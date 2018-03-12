import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImportProductForm} from "../bean/import-product-form";
import {ImportProductLogic} from "./import-product-logic";
import {ImportProductService} from "../service/import-product.service";
import {isNullOrUndefined} from "util";
import {ValidateUtils} from "../common/validate/validate-utils";
import {ApplicationUtils} from "../common/application-utils";
import {CategoryService} from "../service/category.service";
import {FormFlowManager} from "../common/form-flow-manager";

@Component({
  selector: 'app-import-product',
  templateUrl: './import-product.component.html',
  styleUrls: ['./import-product.component.css']
})
export class ImportProductComponent
  extends ImportProductLogic implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild("hotTableContainer")
  hotTableContainer: ElementRef;

  isAbleToRenderHotTable: boolean = false;

  colHeaders: string[] = ['categoryName', 'name', 'image1', 'image2', 'image3', 'image4', 'hangSanXuat', 'baoHanh',
    'khoHang', 'gia', 'giaTruocKhiHa', 'thongTinChiTiet', 'thongSoKiThuat', 'khuyenMai'];

  columns: any[] = [
    {data: 'categoryName'},
    {data: 'name'},
    {data: 'image1'},
    {data: 'image2'},
    {data: 'image3'},
    {data: 'image4'},
    {data: 'hangSanXuat'},
    {data: 'baoHanh'},
    {data: 'gia'},
    {data: 'giaTruocKhiHa'},
    {data: 'thongTinChiTiet'},
    {data: 'thongSoKiThuat'},
    {data: 'khuyenMai'},
  ];

  options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: ['row_above', 'row_below', 'remove_row'],
    allowInvalid: false,
    height: 475,
    rowHeaders: true,
    manualRowResize: true,
    manualColumnResize: true,
  };

  colWidths: any = "200px";

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

    this.loadCategories();
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.isAbleToRenderHotTable = true;

      this.options.width = $(this.hotTableContainer.nativeElement).width() - 15;

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

    changes.forEach((change: any[]) => {

      if (isNullOrUndefined(change)) return;

      let rowIndex: number = change[0];
      let prop: string = change[1];
      let newValue: number = change[3];

      this.items[rowIndex][prop] = newValue;
    })
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this);
  }
}
