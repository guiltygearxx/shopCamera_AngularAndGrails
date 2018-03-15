import {BaseDomain} from "./base-domain";

export class ProductView implements BaseDomain {

  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  categoryId: string;
  name: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  hangSanXuat: string;
  baoHanh: string;
  khoHang: string;
  gia: number;
  giaTruocKhiHa: number;
}
