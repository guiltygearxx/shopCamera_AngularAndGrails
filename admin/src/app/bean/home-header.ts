import {BaseDomain} from "./base-domain";

export class HomeHeader implements BaseDomain{

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  nameHeader: string;
  contentHeader: string;
  flag: boolean;
}
