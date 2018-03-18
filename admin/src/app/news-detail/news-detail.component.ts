import {Component} from '@angular/core';
import {DefaultDetailComponent} from "../common/default-detail-component";
import {NewsDetailForm} from "../bean/news-detail-form";
import {News} from "../bean/news";
import {ApplicationUtils} from "../common/application-utils";
import {NewsService} from "../service/news.service";
import {FormFlowManager} from "../common/form-flow-manager";
import {ValidateUtils} from "../common/validate/validate-utils";
import {ActivatedRoute} from "@angular/router";
import {UploadFilePopupComponent} from "../upload-file-popup/upload-file-popup.component";
import {DialogService} from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent extends DefaultDetailComponent<NewsDetailForm, News> {

  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: NewsService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new NewsDetailForm();

    super.ngOnInit();
  }

  inputIconClick(event: any): void {

    this.openUploadImagePopup();
  }

  protected openUploadImagePopup(): void {

    this.dialogService
      .addDialog(UploadFilePopupComponent)
      .subscribe((url) => {

        if (!this.applicationUtils.isStringEmpty(url)) this.form.hinhAnh = url;
      });
  }

  protected getDetailFormConstraints(): any {

    return NewsDetailForm.constraints;
  }

  protected convertToBaseDomain(): News {

    let news = new News();

    news.tieuDe = this.form.tieuDe;
    news.hinhAnh = this.form.hinhAnh;
    news.noiDungNgan = this.form.noiDungNgan;
    news.noiDungChiTiet = this.form.noiDungChiTiet;

    return news;
  }

  protected bindDataToForm(news: News): NewsDetailForm {

    this.id = news.id;

    let form = new NewsDetailForm();

    form.tieuDe = news.tieuDe;
    form.hinhAnh = news.hinhAnh;
    form.noiDungNgan = news.noiDungNgan;
    form.noiDungChiTiet = news.noiDungChiTiet;

    return form;
  }

  protected initForCreate(): NewsDetailForm {

    return new NewsDetailForm();
  }
}
