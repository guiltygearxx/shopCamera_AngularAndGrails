import {BaseDomain} from "./base-domain";

export class UploadFile implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  name: string;
  fileSize: number;
  extension: string;
}
