import {BaseDomain} from "./base-domain";

export class News implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  tieuDe: string;
  hinhAnh: string;
  noiDungNgan: string;
  noiDungChiTiet: string;
}
