export class CategoryItem {

  code: string;
  label: string;
  parentCode: string;

  constructor(code: string, label: string, parentCode ?: string) {

    this.code = code;
    this.label = label;
    this.parentCode = parentCode;
  }
}
