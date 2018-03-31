import {BaseDomain} from './base-domain';

export class Attribute implements BaseDomain {

  code: string;
  title: string;
  jsonConfig: string;
  group: string;

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;
}
