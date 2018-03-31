import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class ImportProductRow implements Validateable {

  errors: Errors;

  categoryName: string;
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
  attribute: { [field: string]: string };

  static constraints = {

    categoryName: {blank: false},
    name: {blank: false, maxSize: 255},
    image1: {nullable: true},
    image2: {nullable: true},
    image3: {nullable: true},
    image4: {nullable: true},
    hangSanXuat: {nullable: true},
    baoHanh: {nullable: true},
    khoHang: {nullable: true},
    gia: {nullable: true},
    giaTruocKhiHa: {nullable: true},
    phanTramGiamGia: {nullable: true, min: 0, max: 100},
    thongTinChiTiet: {nullable: true},
    thongSoKiThuat: {nullable: true},
    khuyenMai: {nullable: true},
    attribute: {nullable: true},
  };
}
