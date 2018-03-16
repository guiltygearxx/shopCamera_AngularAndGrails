package project.controller

import grails.converters.JSON
import grails.rest.RestfulController
import project.bean.PaginationParams
import project.bean.TableQueryResponse
import project.domain.BaseDomain

class DefaultRestfulController<T> extends RestfulController<T> {

    def restfulQueryService;
    def queryPagingService;

    DefaultRestfulController(Class<T> resource) {

        super(resource);
    }

    DefaultRestfulController(Class<T> resource, boolean readOnly) {

        super(resource, readOnly);
    }

    @Override
    def index(Integer max) {

        params.max = Math.min(max ?: 10, 100);

        render(_search() as JSON);
    }

    def paginate(PaginationParams paginationParams) {

        TableQueryResponse result = queryPagingService.query(
                this.resource, this.buildFilterClosure(), paginationParams
        );

        render(result as JSON);
    }

    @Override
    def show() {

        render(queryForResource(params.id) as JSON);
    }

    protected List<T> _search() {

        return resource.createCriteria().list(params, this.buildFilterClosure());
    }

    protected Closure buildFilterClosure() {

        return restfulQueryService.buildCommonRestClosure(resource, params);
    }

    @Override
    protected T queryForResource(Serializable id) {

        T object = super.queryForResource(id);

        return ((object instanceof BaseDomain) && (object as BaseDomain)?.isDeleted) ? null : object;
    }
}
