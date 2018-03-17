import {BaseDomain} from "./base-domain";

export class Contact implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  name: string;
  email: string;
  phone: string;
  address: string;
  comment: string;
  status: string;
}
