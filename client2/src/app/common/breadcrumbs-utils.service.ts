import {Injectable} from "@angular/core";
import {Breadcrumb} from "../bean/breadcrumb";
import {ApplicationUtils} from "./application-utils";
import {CategoryItem} from "../bean/category-item";
import {Router} from "@angular/router";
import {News} from "../bean/news";
import {Solution} from "../bean/solution";
import {Product} from "../bean/product";

@Injectable()
export class BreadcrumbsUtilsService {

  constructor(protected applicationUtils: ApplicationUtils,
              private router: Router) {
  }

  generateBreadcrumbs(code: string, params: any): Breadcrumb[] {

    switch (code) {

      case "danhSachSanPham":
        return (params as CategoryItem[])
          .map((item) => new Breadcrumb(item.name, "danhSachSanPham", [item.id]));

      case "chiTietGiaiPhap":
        return this.generateBreadcrumbs("giaiPhap", null)
          .concat([new Breadcrumb((params[0] as Solution).tieuDe, code, params)]);

      case "chiTietTinTuc":
        return this.generateBreadcrumbs("ttsk", null)
          .concat([new Breadcrumb((params[0] as News).tieuDe, code, params)]);

      case "chiTietSanPham":

        let categories: CategoryItem[] = params[0];
        let product: Product = params[1];

        return this.generateBreadcrumbs("danhSachSanPham", categories)
          .concat([new Breadcrumb(product.name, code, [product.id])]);

      default:
        return [new Breadcrumb(this.applicationUtils.message("breadcrumbs." + code), code, params)];
    }
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    switch (breadcrumb.code) {

      case "danhSachSanPham":

        let selectedCategoryId = breadcrumb.params[0];

        this.navigate(["/danhSachSanPham/", selectedCategoryId]);

        break;

      default:

        this.navigate(['/' + breadcrumb.code].concat(breadcrumb.params || []));

        break;
    }
  }

  private navigate(params: any[]) {

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(params);
    });
  }
}
