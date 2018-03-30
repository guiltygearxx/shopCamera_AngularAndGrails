import {Injectable} from '@angular/core';
import {ImportProductRow} from '../bean/import-product-row';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {ImportProductsForm} from '../bean/import-products-form';
import {ResultBean} from '../common/result-bean';
import {HttpService} from '../common/http.service';

@Injectable()
export class ImportProductService {

  constructor(protected httpService: HttpService) {
  }

  parseFile(file: File): Observable<ImportProductRow[]> {

    let url = 'importProduct/parseFile';

    let formData: FormData = new FormData();

    formData.append('file', file, file.name);

    return this.httpService.post(url, formData, null);
  }

  importProducts(form: ImportProductsForm): Observable<ResultBean> {

    let url = 'importProduct/importProducts';

    return this.httpService.post(url, form, null);
  }
}
