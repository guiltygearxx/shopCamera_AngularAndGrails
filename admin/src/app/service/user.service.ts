import {Injectable} from '@angular/core';
import {HttpService} from '../common/http.service';
import {ChangePasswordForm2} from '../bean/change-password-form-2';
import {Observable} from 'rxjs/Observable';
import {ResultBean} from '../common/result-bean';

@Injectable()
export class UserService {

  constructor(protected httpService: HttpService) {
  }

  changePassword(form: ChangePasswordForm2): Observable<ResultBean> {

    return this.httpService.post('/user/changePassword', form, null);
  }
}
