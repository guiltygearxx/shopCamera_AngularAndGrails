import {Component, OnInit} from '@angular/core';
import {ProductForm} from "../bean/product-form";
import {Category} from "../bean/category";
import {CategoryService} from '../service/category.service';
import {ProductDetailLogic} from "./product-detail-logic";
import {ValidateUtils} from "../common/validate/validate-utils";
import {FormFlowManager} from "../common/form-flow-manager";
import {ProductService} from "../service/product.service";
import {ApplicationUtils} from "../common/application-utils";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent
  extends ProductDetailLogic
  implements OnInit {

  categories: Category[];

  constructor(protected categoryService: CategoryService,
              protected validateUtils: ValidateUtils,
              protected formFlowManager: FormFlowManager,
              protected productService: ProductService,
              protected applicationUtils: ApplicationUtils,
              protected route: ActivatedRoute) {

    super(validateUtils, productService, formFlowManager, applicationUtils);
  }

  ngOnInit() {

    this.form = new ProductForm();

    this.form.productId = this.route.snapshot.paramMap.get('id');

    if (!this.applicationUtils.isStringEmpty(this.form.productId)) this.initForEdit();

    this.loadCategories();
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  protected loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.categories = categories);
  }

  protected initForEdit(): void {

    this.productService.getById(this.form.productId).subscribe((product) => {

      this.form.name = product.name;
      this.form.categoryId = product.categoryId;
      this.form.image1 = product.image1;
      this.form.image2 = product.image2;
      this.form.image2 = product.image2;
      this.form.image2 = product.image2;
      this.form.hangSanXuat = product.hangSanXuat;
      this.form.baoHanh = product.baoHanh;
      this.form.khoHang = product.khoHang;
      this.form.thongTinChiTiet = product.thongTinChiTiet;
      this.form.thongSoKiThuat = product.thongSoKiThuat;
      this.form.khuyenMai = product.khuyenMai;
      this.form.gia = this.applicationUtils.formatNumber2(product.gia, 2);
      this.form.giaTruocKhiHa = this.applicationUtils.formatNumber2(product.giaTruocKhiHa, 2);
    });
  }
}
