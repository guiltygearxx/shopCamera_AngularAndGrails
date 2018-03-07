import {ImportProductForm} from "./import-product-form";
import {ImportProductRow} from "./import-product-row";
import {ImportProductService} from "../service/import-product.service";
import {CategoryService} from "../service/category.service";
import {Category} from "../examples/category";
import {GroupByWrapper} from "../common/group-by-wrapper";
import {ApplicationUtils} from "../common/application-utils";
import {ImportProductsForm} from "./import-products-form";
import {ResultBean} from "../common/result-bean";

export class ImportProductLogic {

  form: ImportProductForm;

  items: ImportProductRow[];

  categories: Category[];

  resultBean: ResultBean;

  private categoriesMapping: GroupByWrapper<Category> = new GroupByWrapper();

  constructor(protected importProductService: ImportProductService,
              protected categoryService: CategoryService,
              protected applicationUtils: ApplicationUtils) {
  }

  uploadFile(): void {

    this.importProductService
      .parseFile(this.form.importFile)
      .subscribe((items) => this.afterUploadFile(items));
  }

  loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.afterLoadCategories(categories));
  }

  protected updateProducts(): void {

    let form = new ImportProductsForm();
    form.items = this.items;

    this.importProductService
      .importProducts(form)
      .subscribe((resultBean) => this.afterUpdateProducts(resultBean));
  }

  protected afterUpdateProducts(resultBean: ResultBean): void {

    this.resultBean = resultBean;
  }

  protected afterUploadFile(items: ImportProductRow[]): void {

    this.items = items;
  }

  protected afterLoadCategories(categories: Category[]): void {

    this.categories = categories;

    this.categoriesMapping.groupBy(this.categories, [(category) => category.name]);
  }

  protected getCategoryByName(categoryName: string): Category {

    return this.categoriesMapping.getItem([categoryName]);
  }
}
