export class CategoryItem {

  id: string
  code: string;
  parentCategoryId: string;
  name: string;


  constructor(id: string, code: string, parentCategoryId: string, name: string) {
    this.id = id;
    this.code = code;
    this.parentCategoryId = parentCategoryId;
    this.name = name;
  }
}
