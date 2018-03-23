import {BaseDomain} from './base-domain';

export class Category implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  name: string;
  parentCategoryId: string;
  code: string;
}
