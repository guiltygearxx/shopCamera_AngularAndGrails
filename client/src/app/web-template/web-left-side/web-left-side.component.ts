import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-web-left-side',
  templateUrl: './web-left-side.component.html',
  styleUrls: ['./web-left-side.component.css']
})
export class WebLeftSideComponent implements OnInit {

  categories: CategoryItem[] = [

    new CategoryItem("cameraTronBo", "Camera trọn bộ"),
    new CategoryItem("cameraTronBoGiaRe", "Trọn bộ camera giá rẻ", "cameraTronBo"),
    new CategoryItem("cameraTronBoNhapKhau", "Camera nhập khẩu", "cameraTronBo"),

    new CategoryItem("cameraGiamSat", "Camera giám sát"),
    new CategoryItem("cameraGiamSatTheoHang", "Camera theo hãng", "cameraGiamSat"),
    new CategoryItem("cameraGiamSatTheoLoai", "Camera theo loại", "cameraGiamSat"),

    new CategoryItem("dauGhiHinhCamera", "Đầu ghi hình camera"),
    new CategoryItem("dauGhiHinhCameraTheoHang", "Đầu ghi hình theo hãng", "dauGhiHinhCamera"),
    new CategoryItem("dauGhiHinhCameraTheoLoai", "Đầu ghi hình theo loại", "dauGhiHinhCamera"),

    new CategoryItem("phuKienCamera", "Phụ kiện camera"),
    new CategoryItem("phuKienCameraLuuDuLieu", "Ổ lưu dữ liệu", "phuKienCamera"),
    new CategoryItem("phuKienCameraChinhHang", "Phụ kiện chính hãng", "phuKienCamera"),

    new CategoryItem("thietBiAnNinh", "Thiết bị an ninh"),
    new CategoryItem("thietBiAnNinhChongTrom", "Thiết bị chống trộm", "thietBiAnNinh"),
    new CategoryItem("thietBiAnNinhChuong", "Chuông", "thietBiAnNinh"),

    new CategoryItem("mayChamCong", "Máy chấm công"),
    new CategoryItem("mayChamCongTheoHang", "Theo hãng", "mayChamCong"),
    new CategoryItem("mayChamCongTheoLoai", "Theo loại ứng dụng", "mayChamCong"),

    new CategoryItem("giaiPhapCamera", "Giải pháp camera"),
    new CategoryItem("giaiPhapCameraAnNinh", "Giải pháp an ninh", "giaiPhapCamera"),
    new CategoryItem("giaiPhapCameraBaoMat", "Giải pháp bảo mật", "giaiPhapCamera"),
  ]

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  goToCategory(event: any, category: CategoryItem): void {

    event.preventDefault();

    this.router.navigate(["/danhSachSanPham", category.code, ""]);
  }

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    this.router.navigate(["/danhSachSanPham", category.code, subCategory.code]);
  }

  getParentCategories(): CategoryItem[] {

    let categories = this.categories.filter((category) => isNullOrUndefined(category.parentCode));

    return categories;
  }

  getSubCategories(parentCategory: CategoryItem): CategoryItem[] {

    return this.categories.filter((category) => parentCategory.code == category.parentCode);
  }
}
