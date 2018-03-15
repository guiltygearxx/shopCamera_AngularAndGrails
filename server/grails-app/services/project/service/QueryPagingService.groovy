package project.service

import grails.gorm.transactions.Transactional
import project.bean.PaginationParams
import project.bean.TableQueryResponse

@Transactional
class QueryPagingService {

    TableQueryResponse query(Class domainClass, Closure filterClosure, PaginationParams paginationParams) {

        Long itemsLength = domainClass.createCriteria().count(filterClosure);

        List items;

        Long pageIndex;

        if (itemsLength) {

            pageIndex = [paginationParams.pageIndex, itemsLength / paginationParams.maxPageSize].min();

            Long offset = pageIndex * paginationParams.maxPageSize;

            String order = paginationParams.order == "des" ? "desc" : paginationParams.order;

            def pagingParams = [offset: offset, max: paginationParams.maxPageSize, sort: paginationParams.sort, order: order];

            items = domainClass.createCriteria().list(pagingParams, filterClosure);
        } else {

            pageIndex = 0;
        }

        return new TableQueryResponse(pageData: items, pageIndex: pageIndex, dataSize: itemsLength);
    }
}
