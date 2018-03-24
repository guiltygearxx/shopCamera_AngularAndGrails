import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {ListProductInputParams} from "../../bean/list-product-input-params";
import {MenuItem} from "../../bean/menu-item";
import {Router} from "@angular/router";
import {WebHeaderFilterForm} from "./web-header-filter-form";
import {CategoryItem} from "../../bean/category-item";
import {CategoryService} from "../../service/category/category.service";
import {ExampleObject} from "../../bean/example-object";


export class WebHeaderLogic{

  constructor(protected router: Router,
              protected listProductService: ListProductService,
              protected  gioHangService: GioHangService,
              protected categoryService: CategoryService) {
  }



  filterForm: WebHeaderFilterForm;

  categories: CategoryItem[];

  khoangGia: ExampleObject[];

  getSoLuongTrongGioHang():number{

    return this.gioHangService.getOrderDetail();
  }

  goToMenuIndex(event: any, menuItem: MenuItem): void {

    event.preventDefault();

    this.router.navigate(["/" + menuItem.id]);
  }

  goToOrder(event: any): void {

    event.preventDefault();

    this.router.navigate(["/gioHangSanPham"]);
  }

  protected loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.categories = categories);
  }

  queryProduct(event: any): void {

    event.preventDefault();

    this.listProductService.isInputParamsChanged = true;

    let inputParams: ListProductInputParams = this.listProductService.inputParams = new ListProductInputParams();

    inputParams.paramsQuery = this.filterForm.paramsQuery;

    this.router.navigate(["/danhSachSanPham"]);
  }
}
