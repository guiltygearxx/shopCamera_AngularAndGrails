import {AttributeService} from "../../service/attribute.service";
import {Attribute} from "../../bean/attribute";

export class FilterLogic {

  attributes: Attribute[];


  constructor(protected attributeService: AttributeService) {

  }

  getAttribute() {

    let params = {max: 200};

    this.attributeService
      .get(params)
      .subscribe((attribute) => this.afterGetListAttribute(attribute));
  }

  afterGetListAttribute(attributes: Attribute[]): void {

    this.attributes = attributes;
  }
}
