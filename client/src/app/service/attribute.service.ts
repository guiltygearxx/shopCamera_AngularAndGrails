import {Injectable} from '@angular/core';
import {RestService} from '../common/rest-service';
import {Attribute} from '../bean/attribute';
import {HttpService} from '../common/http.service';

@Injectable()
export class AttributeService extends RestService<Attribute> {

  resource: string = 'attribute';

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
