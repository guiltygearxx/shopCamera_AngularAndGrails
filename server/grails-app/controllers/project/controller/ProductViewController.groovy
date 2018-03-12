package project.controller

import grails.converters.JSON
import project.bean.PaginationParams
import project.bean.TableQueryResponse
import project.view.ProductView

class ProductViewController {

    def queryPagingService;
    def restfulQueryService;

    def paginate(PaginationParams paginationParams) {

        TableQueryResponse result = queryPagingService.query(
                ProductView, restfulQueryService.buildCommonRestClosure(ProductView, params), paginationParams
        );

        render(result as JSON);
    }
}
