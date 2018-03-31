export class FilterForm{
  id: string;
  name: string;
  code: string;
  metaConfig: string; //dạng json của FieldMetaConfig


  constructor(id: string, name: string, code: string, metaConfig: string) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.metaConfig = metaConfig;
  }
}
