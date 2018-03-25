import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../common/application.service';
import {Menu} from '../../common/menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})
export class StarterLeftSideComponent implements OnInit {

  username: string;

  menuItems: Menu[] = [

    new Menu(1, null, 'Danh mục sản phẩm', 'starter/productIndex'),
    new Menu(1, null, 'Import sản phẩm', 'starter/importProduct'),
    new Menu(2, null, 'Danh mục tin tức', 'starter/newsIndex'),
    new Menu(3, null, 'Danh mục giải pháp', 'starter/solutionIndex'),
    new Menu(4, null, 'Danh mục uploaded-file', 'starter/uploadFileIndex'),

  ];

  menuItemsOrder: Menu[] = [

    new Menu(1, null, 'Danh mục khuyến mại', 'starter/orderIndex'),
    new Menu(2, null, 'Danh mục order', 'starter/orderIndex'),
  ];

  menuItemsUI: Menu[] = [

    new Menu(1, null, 'Danh mục nhóm sản phẩm', 'starter/categoryIndex'),
    new Menu(1, null, 'Banner Quảng cáo', 'starter/banner'),
    new Menu(2, null, 'Cấu hình giao diện Web bán hàng', 'starter/configurationUi'),
  ];

  constructor(protected applicationService: ApplicationService,
              protected router: Router) {
  }

  ngOnInit() {

    this.username = this.applicationService.user.username;
  }

  menuClicked(event: any, menu: Menu): void {

    event.preventDefault();

    this.router.navigate([menu.navigate]);
  }
}
