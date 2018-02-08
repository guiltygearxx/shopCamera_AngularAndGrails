import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // $(function () {
    //   $('#example').okzoom({
    //     width: 150,
    //     height: 150,
    //     border: "1px solid black",
    //     shadow: "0 0 5px #000"
    //   });
    // });
  }

}
