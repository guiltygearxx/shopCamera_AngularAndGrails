import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class ProductForm implements Validateable {

  errors: Errors;

  productId: string;
  categoryId: string;
  name: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  hangSanXuat: string;
  baoHanh: string;
  khoHang: string;
  gia: string;
  giaTruocKhiHa: string;
  thongTinChiTiet: string;
  thongSoKiThuat: string;
  khuyenMai: string;
  phanTramGiamGia: string;
  thongTinMoRong: string;
  thongTinBoSung: string;
  attributes: { [code: string]: string };

  static constraints = {

    categoryId: {blank: false},
    name: {blank: false, maxSize: 255},
    image1: {nullable: true, maxSize: 1000},
    image2: {nullable: true, maxSize: 1000},
    image3: {nullable: true, maxSize: 1000},
    image4: {nullable: true, maxSize: 1000},
    hangSanXuat: {nullable: true, maxSize: 255},
    baoHanh: {nullable: true, maxSize: 255},
    khoHang: {nullable: true, maxSize: 255},
    gia: {nullable: true},
    giaTruocKhiHa: {nullable: true},
    thongTinChiTiet: {nullable: true},
    thongSoKiThuat: {nullable: true},
    khuyenMai: {nullable: true},
    thongTinMoRong: {nullable: true},
    thongTinBoSung: {nullable: true},
    phanTramGiamGia: {nullable: true, min: 0, max: 100},
    attributes: {nullable: true},
  };
}
