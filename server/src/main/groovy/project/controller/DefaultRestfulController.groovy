package project.controller

import grails.rest.RestfulController

class DefaultRestfulController<T> extends RestfulController<T> {

    def restfulQueryService;

    DefaultRestfulController(Class<T> resource) {

        super(resource);
    }

    DefaultRestfulController(Class<T> resource, Boolean readOnly) {

        super(resource, readOnly);
    }

    @Override
    def index(Integer max) {

        params.max = Math.min(max ?: 10, 100);

        respond _search(), model: [];
    }

    protected List<T> _search() {

        return resource.createCriteria().list(params, this.buildFilterClosure());
    }

    protected Closure buildFilterClosure() {

        return restfulQueryService.buildCommonRestClosure(resource, params);
    }
}
