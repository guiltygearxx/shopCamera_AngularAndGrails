import {Component, OnInit} from '@angular/core';
import {ProductForm} from '../bean/product-form';
import {Category} from '../bean/category';
import {UploadFilePopupComponent} from '../upload-file-popup/upload-file-popup.component';
import {DefaultDetailComponent2} from '../common/default-detail-component-2';
import {Product} from '../bean/product';
import {ResultBean} from '../common/result-bean';
import {Observable} from 'rxjs/Observable';
import {ApplicationUtils} from '../common/application-utils';
import {FormFlowManager} from '../common/form-flow-manager';
import {ValidateUtils} from '../common/validate/validate-utils';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../service/product.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {CategoryService} from '../service/category.service';
import {SolutionDetailForm} from '../bean/solution-detail-form';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent
  extends DefaultDetailComponent2<ProductForm, Product>
  implements OnInit {

  categories: Category[];

  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: ProductService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService,
              protected categoryService: CategoryService) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new ProductForm();

    this.loadCategories();

    super.ngOnInit();
  }

  submit(): Observable<ResultBean> {

    return this.domainRestService.updateProduct(this.form);
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this);
  }

  inputIconClick(event: any, field: string): void {

    this.openUploadImagePopup(field);
  }

  giaTruocKhiHaChanged(event: any): void {

    this.calculateGia();
  }

  phanTramGiamGiaChanged(event: any): void {

    this.calculateGia();
  }

  afterSubmit(resultBean: ResultBean): void {

    super.afterSubmit(resultBean);

    if (resultBean.isSuccess) {

      this.form = this.bindDataToForm(resultBean.result.product);
    }
  }

  protected calculateGia(): void {

    if (!this.applicationUtils.isNumberFormat(this.form.giaTruocKhiHa) ||
      !this.applicationUtils.isNumberFormat(this.form.phanTramGiamGia)) {

      this.form.gia = this.applicationUtils.isNumberFormat(this.form.giaTruocKhiHa) ? this.form.giaTruocKhiHa : null;

      return;
    }

    let giaTruocKhiHa = this.applicationUtils.convertStringToBigNumber(this.form.giaTruocKhiHa);
    let phanTramGiamGia = this.applicationUtils.convertStringToBigNumber(this.form.phanTramGiamGia);

    this.form.gia = this.applicationUtils.formatBigNumber(giaTruocKhiHa.minus(giaTruocKhiHa.mul(phanTramGiamGia).div(100)), 2);
  }

  protected openUploadImagePopup(field: string): void {

    this.dialogService
      .addDialog(UploadFilePopupComponent)
      .subscribe((url) => {

        if (!this.applicationUtils.isStringEmpty(url)) this.form[field] = url;
      });
  }

  protected loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.categories = categories);
  }

  protected getDetailFormConstraints(): any {

    return ProductForm.constraints;
  }

  protected bindDataToForm(product: Product): ProductForm {

    let form = new ProductForm();

    form.productId = product.id;
    form.name = product.name;
    form.categoryId = product.categoryId;
    form.image1 = product.image1;
    form.image2 = product.image2;
    form.image2 = product.image2;
    form.image2 = product.image2;
    form.hangSanXuat = product.hangSanXuat;
    form.baoHanh = product.baoHanh;
    form.khoHang = product.khoHang;
    form.thongTinChiTiet = product.thongTinChiTiet;
    form.thongSoKiThuat = product.thongSoKiThuat;
    form.khuyenMai = product.khuyenMai;
    form.gia = this.applicationUtils.formatNumber2(product.gia, 2);
    form.giaTruocKhiHa = this.applicationUtils.formatNumber2(product.giaTruocKhiHa, 2);
    form.phanTramGiamGia = this.applicationUtils.formatNumber2(product.phanTramGiamGia, 2);

    return form;
  }

  protected initForCreate(): ProductForm {

    return new ProductForm();
  }


}
