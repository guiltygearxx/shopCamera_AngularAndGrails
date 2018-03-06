import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImportProductForm} from "./import-product-form";
import {ImportProductLogic} from "./import-product-logic";
import {ImportProductService} from "../service/import-product.service";
import {isNullOrUndefined} from "util";
import {ValidateUtils} from "../common/validate/validate-utils";
import {ImportProductRow} from "./import-product-row";
import {ApplicationUtils} from "../common/application-utils";
import {CategoryService} from "../service/category.service";

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

  errorMessages: string[];

  get isHasData(): boolean {

    return !isNullOrUndefined(this.items) && this.items.length > 0;
  }

  constructor(protected importProductService: ImportProductService,
              protected validateUtils: ValidateUtils,
              protected applicationUtils: ApplicationUtils,
              protected categoryService: CategoryService) {

    super(importProductService, categoryService);
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

    this.errorMessages = [];

    if (!this.validate()) return;

    this.updateProducts();
  }

  private convertToErrorMessages(): void {

    let fields: string[] = Object.keys(ImportProductRow.constraints);

    this.items.forEach((item, itemIndex) => {

      fields.forEach((field) => {

        let errorMessage = this.buildErrorMessageField(item, itemIndex, field);

        if (this.applicationUtils.isStringEmpty(errorMessage)) return;

        this.errorMessages.push(errorMessage);
      })
    });
  }

  private buildErrorMessageRow(itemIndex: number, errorMessage: string): string {

    return this.applicationUtils.message("importProduct.message.row", [itemIndex, errorMessage]);
  }

  private buildErrorMessageField(item: ImportProductRow, itemIndex: number, field: string): string {

    let errorMessage = this.validateUtils.getFieldErrorMessage(field, item);

    if (this.applicationUtils.isStringEmpty(errorMessage)) return null;

    return this.applicationUtils.message("importProduct.message.field", [

      itemIndex + 1, this.applicationUtils.message("importProduct.field." + field), errorMessage
    ]);
  }

  private validate(): boolean {

    if (!this.isHasData) return true;

    return this.validateForm() && this.validateCategoryNames() && this.validateDuplicateName();
  }

  private validateDuplicateName(): boolean {

    let isOK = true;

    let names_: string[] = [];

    this.items.forEach((item, itemIndex) => {

      if (names_.indexOf(item.name) != -1) {

        isOK = true;

        let errorMessage = this.applicationUtils.message("importProduct.duplicateProductName", [item.name]);

        this.errorMessages.push(this.buildErrorMessageRow(itemIndex, errorMessage));

      } else {

        names_.push(item.name);
      }
    })

    return isOK;
  }

  private validateForm(): boolean {

    let invalidItems = this.items.filter((item) => {

      let validateResult = !this.validateUtils.validate(item, ImportProductRow.constraints);

      return validateResult;
    });

    let validateResult = isNullOrUndefined(invalidItems) || invalidItems.length == 0;

    if (!validateResult) this.convertToErrorMessages();

    return validateResult;
  }

  private validateCategoryNames(): boolean {

    let isOK = true;

    this.items.forEach((item, itemIndex) => {

      let category = this.getCategoryByName(item.categoryName);

      if (isNullOrUndefined(category)) {

        isOK = false;

        let errorMessage = this.applicationUtils.message("importProduct.categoryName.notFound", [item.categoryName]);

        this.errorMessages.push(this.buildErrorMessageRow(itemIndex, errorMessage));
      }
    });

    return isOK;
  }

}
