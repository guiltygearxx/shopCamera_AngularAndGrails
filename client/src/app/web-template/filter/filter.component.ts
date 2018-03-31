import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {FilterForm} from "./filter-form";

declare var $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterContentChecked {

  filterFormForAll: FilterForm[];

  filterFormCamera: FilterForm[] = [
    new FilterForm('000', 'Thương hiệu', 'thuongHieu', '{"2_1":"A1 Security Cameras","2_2":"ACTi","2_3":"Alphafinity","2_4":"Arecont Vision","2_5":"Axis"}'),
    new FilterForm('001', 'Loại Len', 'len', '{"2_1":"Fixed Lens","2_2":"Motorized (Automatic Zoom) Lens","2_3":"Varifocal (Manual Zoom) Lens"}'),
    new FilterForm('002', 'Phân giải', 'phanGiai', '{"2_1":"2K","2_2":"4K","2_3":"8K","2_4":"HD","2_5":"FULLHD"}'),
    new FilterForm('003', 'Màu sắc', 'mauSac', '{"2_1":"Trắng","2_2":"Đen","2_3":"Đỏ","2_4":"Hồng","2_5":"Cam"}',),
    new FilterForm('004', 'Hình dạng', 'hinhDang', '{"2_1":"Vuông","2_2":"Tròn","2_3":"Dẹp","2_4":"Đa giác","2_5":"Lục giác"}'),
    new FilterForm('005', 'Zoom quang học', 'zoom', '{"2_1":"2x Optical Zoom","2_2":"2.2x Optical Zoom","2_3":"2.4x Optical Zoom","2_4":"2.5x Optical Zoom","2_5":"25x Optical Zoom"}'),
    new FilterForm('006', 'Khẩu độ', 'khauDo', '{"2_1":"1","2_2":"1/1.25","2_3":"1/1.7","2_4":"1/1.8","2_5":"1/1.9"}'),
    new FilterForm('007', 'Wifi', 'wifi', '{"2_1":"YES","2_2":"NO"}'),
  ];

  filterFormDauGhi: FilterForm[] = [
    new FilterForm('001', 'Loại Len1', 'len', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
    new FilterForm('002', 'Phân giải1', 'phanGiai', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
    new FilterForm('003', 'Màu sắc1', 'mauSac', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}',),
    new FilterForm('004', 'Hình dạng1', 'hinhDang', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
    new FilterForm('005', 'Zoom quang học1', 'zoom', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
    new FilterForm('006', 'Khẩu độ1', 'khauDo', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
    new FilterForm('007', 'Wifi1', 'wifi', '{"2_1":"2.1","2_2":"2.2","2_3":"2.3","2_4":"2.4","2_5":"2.5"}'),
  ];

  ngAfterContentChecked(): void {

    switch (this.type) {
      case "camera":
        this.filterFormForAll = this.filterFormCamera;
        return null;
      case "daughi":
        this.filterFormForAll = this.filterFormDauGhi;
        return null;

      default:
        return null;
    }

  }

  @Input()
  type: string;

  constructor() {
  }

  ngOnInit() {
  }

  getParamsOfFilter(params: string): string[] {

    var parsed = JSON.parse(params);

    var arr = [];

    for (var x in parsed) {
      arr.push(parsed[x]);
    }
    return arr;
  }

}
