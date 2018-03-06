import {BaseDomain} from "../bean/base-domain";

export class Category implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  name: string;
}
