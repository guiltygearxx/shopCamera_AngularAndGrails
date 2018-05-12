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
import {AttributeService} from '../service/attribute.service';
import {AttributeValueService} from '../service/attribute-value.service';
import {Attribute} from '../bean/attribute';
import {AttributeValue} from '../bean/attribute-value';
import {isNullOrUndefined} from 'util';
import {GroupByWrapper} from '../common/group-by-wrapper';
import {SimpleObject} from '../common/simple-object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent
  extends DefaultDetailComponent2<ProductForm, Product>
  implements OnInit {

  categories: Category[];

  attributes: Attribute[];

  displayAttributes: Attribute[];

  attributeMapById: GroupByWrapper<Attribute>;

  attributeJsonConfigMapById: GroupByWrapper<any>;

  selectedCategory: Category;

  protected attributeValues: AttributeValue[];

  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: ProductService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService,
              protected categoryService: CategoryService,
              protected attributeService: AttributeService,
              protected attributeValueService: AttributeValueService,) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new ProductForm();

    this.form.attributes = {};

    this.loadCategories();

    this.loadAttributes();

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

      this.id = resultBean.result.product.id;

      this.attributeValues = resultBean.result.attributeValues;

      this.form = this.bindDataToForm(resultBean.result.product);
    }
  }

  categoryIdChanged(categoryId: string): void {

    this.form.attributes = {};

    this.initSelectedCategory();

    this.buildDisplayAttributes();
  }

  protected loadAttributes(): void {

    this.attributeService.get().subscribe((attributes) => {

      this.attributes = attributes;

      (this.attributeMapById = new GroupByWrapper<Attribute>()).groupBy(attributes, [(item) => item.id]);

      (this.attributeJsonConfigMapById = new GroupByWrapper<any>()).groupBy(
        (attributes || []).map((item) => {
          return {id: item.id, config: JSON.parse(item.jsonConfig)};
        }),

        [(item) => item.id]
      );

      if (!this.applicationUtils.isStringEmpty(this.id)) {

        this.loadAttributeValues();
      }

      this.buildDisplayAttributes();
    });
  }

  protected buildDisplayAttributes(): void {

    let group = isNullOrUndefined(this.selectedCategory) ? null : this.selectedCategory.type;

    this.displayAttributes = isNullOrUndefined(this.attributes) ? null : this.attributes.filter((item) => item.group == group);
  }

  protected getAttributeById(id: string): Attribute {

    return isNullOrUndefined(this.attributeMapById) ? null : this.attributeMapById.getItem([id]);
  }

  protected getAttributeItems(attribute: Attribute): any[] {

    if (isNullOrUndefined(this.attributeJsonConfigMapById)) return null;

    let item = this.attributeJsonConfigMapById.getItem([attribute.id]);

    return isNullOrUndefined(item) ? null : item.config.items;
  }

  protected loadAttributeValues(): void {

    this.attributeValueService.get({referenceId: this.id}).subscribe((attributeValues) => {

      this.attributeValues = attributeValues;

      this.bindAttributeValuesToForm();
    });
  }

  protected bindAttributeValuesToForm(): void {

    if (isNullOrUndefined(this.attributeValues)) return;

    this.attributeValues.forEach((item) => {

      let attribute = this.getAttributeById(item.attributeId);

      if (!isNullOrUndefined(attribute)) {

        this.form.attributes[attribute.code] = item.value;
      }
    });
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

    this.categoryService.get().subscribe((categories) => {

      this.categories = categories;

      this.initSelectedCategory();

      this.buildDisplayAttributes();
    });
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
    form.image3 = product.image3;
    form.image4 = product.image4;
    form.hangSanXuat = product.hangSanXuat;
    form.baoHanh = product.baoHanh;
    form.khoHang = product.khoHang;
    form.thongTinChiTiet = product.thongTinChiTiet;
    form.thongSoKiThuat = product.thongSoKiThuat;
    form.khuyenMai = product.khuyenMai;
    form.gia = this.applicationUtils.formatNumber2(product.gia, 2);
    form.giaTruocKhiHa = this.applicationUtils.formatNumber2(product.giaTruocKhiHa, 2);
    form.phanTramGiamGia = this.applicationUtils.formatNumber2(product.phanTramGiamGia, 2);
    form.thongTinBoSung = product.thongTinBoSung;
    form.thongTinMoRong = product.thongTinMoRong;

    form.attributes = {};

    this.bindAttributeValuesToForm();

    return form;
  }

  protected initForCreate(): ProductForm {

    let form = new ProductForm();

    form.attributes = {};

    return form;
  }

  protected afterGetById(object: Product): void {

    super.afterGetById(object);

    this.loadAttributeValues();

    this.initSelectedCategory();

    this.buildDisplayAttributes();
  }

  protected initSelectedCategory(): void {

    this.selectedCategory = isNullOrUndefined(this.categories) ? null : this.categories.find((item) => item.id == this.form.categoryId);
  }
}
