import {BaseDomain} from "./base-domain";

export class Solution implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  tieuDe: string;
  hinhAnh: string;
  noiDungNgan: String;
  noiDungChiTiet: string;
}
