import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {MenuItem} from "../../bean/menu-item";
import {Router} from "@angular/router";
import {WebHeaderFilterForm} from "./web-header-filter-form";
import {CategoryItem} from "../../bean/category-item";
import {CategoryService} from "../../service/category/category.service";
import {ExampleObject} from "../../bean/example-object";


export class WebHeaderLogic {

  constructor(protected router: Router,
              protected listProductService: ListProductService,
              protected  gioHangService: GioHangService,
              protected categoryService: CategoryService) {
  }


  filterForm: WebHeaderFilterForm;

  categoryListItem: CategoryItem[];

  khoangGia: ExampleObject[];

  getSoLuongTrongGioHang(): number {

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

  protected getCategorys(): void {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryListItem = categoryItems;
  }
}
