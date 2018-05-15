import {Breadcrumb} from "../bean/breadcrumb";

export interface SupportBreadcrumbs {

  breadcrumbs: Breadcrumb[];

  breadcrumbSelected(breadcrumb: Breadcrumb): void;
}
