import {RestService} from '../common/rest-service';
import {AttributeValue} from '../bean/attribute-value';
import {HttpService} from '../common/http.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AttributeValueService extends RestService<AttributeValue> {

  resource: string = 'attributeValue';

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
