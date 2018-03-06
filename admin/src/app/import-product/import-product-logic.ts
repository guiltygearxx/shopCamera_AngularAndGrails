import {ImportProductForm} from "./import-product-form";
import {ImportProductRow} from "./import-product-row";
import {ImportProductService} from "../service/import-product.service";
import {CategoryService} from "../service/category.service";
import {Category} from "../examples/category";
import {GroupByWrapper} from "../common/group-by-wrapper";

export class ImportProductLogic {

  form: ImportProductForm;

  items: ImportProductRow[];

  categories: Category[];

  private categoriesMapping: GroupByWrapper<Category> = new GroupByWrapper();

  constructor(protected importProductService: ImportProductService,
              protected categoryService: CategoryService) {
  }

  uploadFile(): void {

    this.importProductService
      .importProduct(this.form.importFile)
      .subscribe((items) => this.afterUploadFile(items));
  }

  loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.afterLoadCategories(categories));
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
