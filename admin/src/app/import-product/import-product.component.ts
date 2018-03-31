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
import {AttributeService} from '../service/attribute.service';
import {SimpleObject} from '../common/simple-object';
import {IMPORT_PRODUCT_TEMPLATE_CAMERA, IMPORT_PRODUCT_TEMPLATE_DAU_GHI} from '../common/application-constants';
import {Attribute} from '../bean/attribute';
import {GroupByWrapper} from '../common/group-by-wrapper';

const COL_HEADERS_CODE = ['categoryName', 'name', 'image1', 'image2', 'image3', 'image4', 'hangSanXuat', 'baoHanh',
  'khoHang', 'giaTruocKhiHa', 'phanTramGiamGia', 'gia', 'thongTinChiTiet', 'thongSoKiThuat', 'khuyenMai'];

const COL_CONFIG = [
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

const TEMPLATE_URL_CAMERA = 'assets/importProductTemplateCamera.xlsx';
const TEMPLATE_URL_DAU_GHI = 'assets/importProductTemplateDauGhi.xlsx';

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

  columns: any[];

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

  templateTypeOptions: SimpleObject[];

  isImportFileDisable: boolean = true;

  templateURL: string;

  protected attributeMapByCode: GroupByWrapper<Attribute>;

  constructor(protected importProductService: ImportProductService,
              protected validateUtils: ValidateUtils,
              protected applicationUtils: ApplicationUtils,
              protected categoryService: CategoryService,
              protected formFlowManager: FormFlowManager,
              protected attributeService: AttributeService) {

    super(importProductService, categoryService, applicationUtils, validateUtils, formFlowManager, attributeService);
  }

  ngOnInit() {

    this.form = new ImportProductForm();

    this.colHeaders = COL_HEADERS_CODE.map((code) => this.applicationUtils.message('product.field.' + code));

    this.columns = COL_CONFIG.slice();

    this.templateTypeOptions = [IMPORT_PRODUCT_TEMPLATE_CAMERA, IMPORT_PRODUCT_TEMPLATE_DAU_GHI].map((item) =>

      new SimpleObject(item, this.applicationUtils.message('importProduct.template.' + item))
    );

    this.loadCategories();

    this.loadAttributes();
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.buildHotTableOptions();

      this.hotTable.getHandsontableInstance().render();

    }, 2000);
  }

  ngAfterContentInit(): void {

    this.items = [];
  }

  importFileChanged(importFile: File): void {

    this.uploadFile();
  }

  templateTypeChanged(templateType: string): void {

    this.isImportFileDisable = this.applicationUtils.isStringEmpty(templateType);

    this.form.importFile = null;

    this.items = [];

    this.buildHotTableColumns();

    this.hotTable.getHandsontableInstance().render();

    switch (templateType) {

      case IMPORT_PRODUCT_TEMPLATE_CAMERA:
        this.templateURL = TEMPLATE_URL_CAMERA;
        break;

      case IMPORT_PRODUCT_TEMPLATE_DAU_GHI:
        this.templateURL = TEMPLATE_URL_DAU_GHI;
        break;

      default:
        this.templateURL = null;
        break;
    }
  }

  protected getAttribute(code: string): Attribute {

    return isNullOrUndefined(this.attributeMapByCode) ? null : this.attributeMapByCode.getItem([code]);
  }

  protected isDynamicField(code: string): boolean {

    let attribute = this.getAttribute(code);

    return isNullOrUndefined(attribute) ? false : true;
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

      if (this.isDynamicField(prop)) {

        item.attribute[prop] = newValue;

      } else {


        if ((['giaTruocKhiHa', 'phanTramGiamGia', 'gia'].indexOf(prop) != -1) && this.applicationUtils.isNumberFormat(newValue)) {

          let formattedValue = this.applicationUtils.formatNumber(newValue, 2);

          if (formattedValue != newValue) {

            shouldRerender = true;

            newValue = formattedValue;
          }
        }

        item[prop] = newValue;

        if (prop == 'giaTruocKhiHa' || prop == 'phanTramGiamGia') calGiaItems.push(item);
      }
    });

    calGiaItems.forEach((item) => this.calculateGia(item));

    this.items = [].concat(this.items); //trick for refresh hottable;
  }

  protected buildHotTableColumns(): void {

    this.colHeaders.splice(COL_HEADERS_CODE.length - 1);

    this.columns.splice(COL_CONFIG.length - 1);

    if (!isNullOrUndefined(this.attributes)) {

      let attribute_ = this.attributes.filter((item) => item.group == this.form.templateType);

      attribute_.forEach((item) => {

        this.colHeaders.push(item.title);
        this.columns.push({data: 'attribute.' + item.code});
      });
    }
  }

  protected buildHotTableOptions(): void {

    this.options.width = $(this.hotTableContainer.nativeElement).width() - 15;
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

  protected afterLoadAttributes(attributes: Attribute[]): void {

    super.afterLoadAttributes(attributes);

    (this.attributeMapByCode = new GroupByWrapper<Attribute>()).groupBy(attributes, [(item) => item.code]);

    this.buildHotTableColumns();

    this.hotTable.getHandsontableInstance().render();
  }
}
