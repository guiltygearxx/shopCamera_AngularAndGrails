import {BaseDomain} from './base-domain';

export class Order implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  code: string;
  tenNguoiMua: string;
  sdt: string;
  email: string;
  diaChi: string;
  moTa: string;
  status: string; //da xem;
}
