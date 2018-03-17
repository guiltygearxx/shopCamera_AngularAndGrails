import {BaseDomain} from "../../common/base-domain";

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

  static constraints = {

    name: {blank: false, maxSize: 255},
    email: {nullable: false},
    phone: {nullable: false},
    address: {nullable: false},
    comment: {nullable: false},
  }
}
