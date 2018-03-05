import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";

export class WebLeftSideLogic{

  constructor(protected categoryService: CategoryService) {
  }

  categoryListItem: CategoryItem[];


  getListCategory(){

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
