import {
  AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {AttributeService} from "../../service/attribute.service";
import {FilterLogic} from "./filter-logic";
import {Attribute} from "../../bean/attribute";
import {SupportOnChangesComponentModal} from "../../common/support-on-changes-component-modal";
import {OnChangeCallBack} from "../../common/on-change-call-back";
import {ComponentUtils} from "../../common/component-utils";
import {AttributeConfig} from "../../bean/attribute-config";
import {isNullOrUndefined} from "util";
import {SimpleObject} from "../../common/simple-object";
import {ApplicationUtils} from "../../common/application-utils";

declare var $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent
  extends FilterLogic implements OnInit, AfterContentChecked, SupportOnChangesComponentModal, OnChanges {

  contentChangedAttrs: string[];

  viewChangedAttrs: string[];

  afterContentCheckCallbacks: OnChangeCallBack[];

  afterViewCheckCallbacks: OnChangeCallBack[];

  attributesFilter: Attribute[];

  attributeConfigs: { [code: string]: AttributeConfig };

  filterOptions: { [code: string]: SimpleObject[] };

  @Input()
  filterValues: { [code: string]: string[] };

  @Input()
  type: string;

  @Output()
  filterValuesChange: EventEmitter<any> = new EventEmitter<any>();

  filterValuesChangeMap: { [code: string]: boolean };

  constructor(protected attributeService: AttributeService,
              protected componentUtils: ComponentUtils,
              protected applicationUtils: ApplicationUtils) {

    super(attributeService);
  }

  ngOnInit() {

    this.filterOptions = {};

    this.filterValues = {};

    this.filterValuesChangeMap = {};

    this.getAttribute();

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["type"], (() => this.buildAttributeFiler())),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  afterGetListAttribute(attributes: Attribute[]): void {

    super.afterGetListAttribute(attributes);

    this.buildAttributeConfigs();

    this.buildAttributeFiler();

    this.initFilterOptions();
  }

  getAttributeConfig(attribute: Attribute): AttributeConfig {

    return isNullOrUndefined(this.attributeConfigs) ? null : this.attributeConfigs[attribute.code];
  }

  getFilterOptions(attribute: Attribute): SimpleObject[] {

    return isNullOrUndefined(this.filterOptions) ? null : this.filterOptions[attribute.code];
  }

  filterSelectOptions(filterStr: string, attribute: Attribute): void {

    let attributeConfig = this.getAttributeConfig(attribute);

    this.filterOptions[attribute.code] = this.applicationUtils.isStringEmpty(filterStr) ?
      attributeConfig.items : attributeConfig.items.filter((item) => item.name.toLowerCase().indexOf(filterStr.toLowerCase()) != -1)
  }

  getFilterValue(attribute: Attribute, filterOptionValue: string): string {

    let filterValues = this.filterValues[attribute.code];

    return !isNullOrUndefined(filterValues) && filterValues.indexOf(filterOptionValue) != -1 ? filterOptionValue : null;
  }

  filterValueChanged(filterValue: string, attribute: Attribute, filterOptionValue: string): void {

    let filterValues = this.filterValues[attribute.code];

    if (isNullOrUndefined(filterValues)) {

      filterValues = this.filterValues[attribute.code] = [];
    }

    if (isNullOrUndefined(filterValue)) {

      filterValues.splice(filterValues.indexOf(filterOptionValue), 1);
    } else {

      filterValues.push(filterValue);
    }

    this.filterValuesChangeMap[attribute.code] = true;
  }

  applyFilterValues(event: any): void {

    event.preventDefault();

    this.filterValuesChange.emit(this.filterValues);

    this.filterValuesChangeMap = {};
  }

  isFilterValueChanged(attribute: Attribute): boolean {

    return this.filterValuesChangeMap[attribute.code];
  }

  protected buildAttributeFiler(): void {

    this.attributesFilter = isNullOrUndefined(this.attributes) ? null : this.attributes.filter((attribute) => attribute.group == this.type);
  }

  protected buildAttributeConfigs(): void {

    this.attributeConfigs = {};

    if (isNullOrUndefined(this.attributes)) return;

    this.attributes.forEach((item) => {

      let any_ = JSON.parse(item.jsonConfig);

      let attributeConfig = new AttributeConfig();

      if (!isNullOrUndefined(any_.items)) {

        attributeConfig.items = any_.items.map((item1) => new SimpleObject(item1.id, item1.name))
      }

      this.attributeConfigs[item.code] = attributeConfig;
    })
  }

  protected initFilterOptions(): void {

    this.filterOptions = {};

    if (isNullOrUndefined(this.attributes)) return;

    this.attributes.forEach((item) =>

      this.filterOptions[item.code] = this.attributeConfigs[item.code].items
    )
  }
}
