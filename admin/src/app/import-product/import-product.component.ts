import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImportProductForm} from '../bean/import-product-form';
import {ImportProductLogic} from './import-product-logic';
import {ImportProductService} from '../service/import-product.service';
import {isNullOrUndefined} from 'util';
import {ValidateUtils} from '../common/validate/validate-utils';
import {ApplicationUtils} from '../common/application-utils';
import {CategoryService} from '../service/category.service';
import {FormFlowManager} from '../common/form-flow-manager';
import {ImportProductRow} from '../bean/import-product-row';


const COL_HEADERS_CODE = ['categoryName', 'name', 'image1', 'image2', 'image3', 'image4', 'hangSanXuat', 'baoHanh',
  'khoHang', 'giaTruocKhiHa', 'phanTramGiamGia', 'gia', 'thongTinChiTiet', 'thongSoKiThuat', 'khuyenMai'];

@Component({
  selector: 'app-import-product',
  templateUrl: './import-product.component.html',
  styleUrls: ['./import-product.component.css']
})
export class ImportProductComponent
  extends ImportProductLogic implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('hotTableContainer')
  hotTableContainer: ElementRef;

  @ViewChild('hotTable')
  hotTable: any;

  colHeaders: string[];

  columns: any[] = [
    {data: 'categoryName'},
    {data: 'name'},
    {data: 'image1'},
    {data: 'image2'},
    {data: 'image3'},
    {data: 'image4'},
    {data: 'hangSanXuat'},
    {data: 'baoHanh'},
    {data: 'khoHang'},
    {data: 'giaTruocKhiHa'},
    {data: 'phanTramGiamGia'},
    {data: 'gia'},
    {data: 'thongTinChiTiet'},
    {data: 'thongSoKiThuat'},
    {data: 'khuyenMai'},
  ];

  options: any = {
    stretchH: 'all',
    columnSorting: true,
    allowInvalid: false,
    height: 475,
    rowHeaders: true,
    manualRowResize: true,
    manualColumnResize: true,
  };

  colWidths: any = '200px';

  errorMessages: string[] = [];

  constructor(protected importProductService: ImportProductService,
              protected validateUtils: ValidateUtils,
              protected applicationUtils: ApplicationUtils,
              protected categoryService: CategoryService,
              protected formFlowManager: FormFlowManager) {

    super(importProductService, categoryService, applicationUtils, validateUtils, formFlowManager);
  }

  ngOnInit() {

    this.form = new ImportProductForm();

    this.colHeaders = COL_HEADERS_CODE.map((code) => this.applicationUtils.message('product.field.' + code));

    this.loadCategories();
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.options.width = $(this.hotTableContainer.nativeElement).width() - 15;

      this.hotTable.getHandsontableInstance().render();

    }, 2000);
  }

  ngAfterContentInit(): void {

    this.items = [];
  }

  importFileChanged(importFile: File): void {

    this.uploadFile();
  }

  cellValuesChanged(event: any[]): void {

    let changes = event[0];

    if (isNullOrUndefined(changes)) return;

    let calGiaItems: ImportProductRow[] = [];

    let shouldRerender = false;

    changes.forEach((change: any[]) => {

      if (isNullOrUndefined(change)) return;

      let rowIndex: string = change[0];
      let prop: string = change[1];
      let newValue: string = change[3];
      let item = this.items[rowIndex];

      if ((['giaTruocKhiHa', 'phanTramGiamGia', 'gia'].indexOf(prop) != -1) && this.applicationUtils.isNumberFormat(newValue)) {

        let formattedValue = this.applicationUtils.formatNumber(newValue, 2);

        if (formattedValue != newValue) {

          shouldRerender = true;

          newValue = formattedValue;
        }
      }

      item[prop] = newValue;

      if (prop == 'giaTruocKhiHa' || prop == 'phanTramGiamGia') calGiaItems.push(item);
    });

    calGiaItems.forEach((item) => this.calculateGia(item));

    this.items = [].concat(this.items); //trick for refresh hottable;
  }

  protected calculateGia(item: ImportProductRow) {

    let isGiaTruocKhiHaFormatOK = this.applicationUtils.isNumberFormat(item.giaTruocKhiHa);
    let isPhanTramGiamGiaOK = this.applicationUtils.isNumberFormat(item.phanTramGiamGia);

    if (!isGiaTruocKhiHaFormatOK || !isPhanTramGiamGiaOK) {

      item.gia = this.applicationUtils.isNumberFormat(item.giaTruocKhiHa) ? item.giaTruocKhiHa : null;
    } else {

      let giaTruocKhiHa = this.applicationUtils.convertStringToBigNumber(item.giaTruocKhiHa);
      let phanTramGiamGia = this.applicationUtils.convertStringToBigNumber(item.phanTramGiamGia);

      item.gia = this.applicationUtils.formatBigNumber(giaTruocKhiHa.minus(giaTruocKhiHa.mul(phanTramGiamGia).div(100)), 2);
    }
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this);
  }

  protected afterUploadFile(items: ImportProductRow[]): void {

    super.afterUploadFile(items);

    if (!isNullOrUndefined(items))
      items.forEach((item) => {

        let isGiaTruocKhiHaFormatOK: boolean;
        let isPhanTramGiamGiaOK: boolean;

        if (isGiaTruocKhiHaFormatOK = this.applicationUtils.isNumberFormat(item.giaTruocKhiHa))
          item.giaTruocKhiHa = this.applicationUtils.formatNumber(item.giaTruocKhiHa, 2);

        if (isPhanTramGiamGiaOK = this.applicationUtils.isNumberFormat(item.phanTramGiamGia))
          item.phanTramGiamGia = this.applicationUtils.formatNumber(item.phanTramGiamGia, 2);

        if (!isGiaTruocKhiHaFormatOK || !isPhanTramGiamGiaOK) {

          item.gia = this.applicationUtils.isNumberFormat(item.giaTruocKhiHa) ? item.giaTruocKhiHa : null;
        } else {

          let giaTruocKhiHa = this.applicationUtils.convertStringToBigNumber(item.giaTruocKhiHa);
          let phanTramGiamGia = this.applicationUtils.convertStringToBigNumber(item.phanTramGiamGia);

          item.gia = this.applicationUtils.formatBigNumber(giaTruocKhiHa.minus(giaTruocKhiHa.mul(phanTramGiamGia).div(100)), 2);
        }
      });
  }
}
