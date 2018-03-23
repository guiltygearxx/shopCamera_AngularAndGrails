package project.controller

import grails.converters.JSON
import project.domain.Category

class CategoryController extends DefaultRestfulController<Category> {

    CategoryController() {
        super(Category)
    }

    CategoryController(Class<Category> resource) {
        super(resource)
    }

    CategoryController(Class<Category> resource, boolean readOnly) {
        super(resource, readOnly)
    }

    @Override
    def index(Integer max) {

        params.max = 99999;

        render(_search() as JSON);
    }
}
