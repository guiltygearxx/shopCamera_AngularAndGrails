export class Breadcrumb {

  code: string;
  title: string;
  params: any;

  constructor(title: string, code: string, params: any) {
    this.title = title;
    this.code = code;
    this.params = params;
  }
}
