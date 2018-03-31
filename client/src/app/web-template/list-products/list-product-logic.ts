import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {ProductViewService} from "../../service/product/product-view.service";
import {isNullOrUndefined} from "util";
import {ListProductFilterForm} from "../../bean/list-product-filter-form";
import {ExampleObject} from "../../bean/example-object";

export class ListProductLogic {

  filterForm: ListProductFilterForm;

  khoangGia: ExampleObject[];

  constructor(protected productViewService: ProductViewService,
              protected categoryService: CategoryService) {
  }


  allowDisplayProductVetical: boolean;

  categoryName: string;

  subCategoryList: CategoryItem[];

  categoryList: CategoryItem[];

  productList: ProductView[];

  getListProduct() {

    let params = {

      categoryIds: this.filterForm.categoryIds,
      paramsQuery: this.filterForm.paramsQuery,
      max: 100,
    };

    this.buildParamsForFilter(params);

    this.productViewService.get(params).subscribe((productView) =>
      this.afterGetListProduct(productView)
    );
  }

  protected buildParamsForFilter(params: any): void {

    // params.attributeCode = ["value1", "value2"];
  }

  getListImageHighlight(productView: ProductView): string[] {

    if (isNullOrUndefined(productView)) return null;
    let dateElements: string[] = productView.hinhAnhTrucQuan.split(",");
    return dateElements;
  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};

    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }


  afterGetListProduct(productViews: ProductView[]): void {

    this.productList = productViews;
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;
  }
}
