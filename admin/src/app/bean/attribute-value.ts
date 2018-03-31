import {BaseDomain} from './base-domain';

export class AttributeValue implements BaseDomain {

  referenceId: string;
  attributeId: string;
  value: string;

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;
}
