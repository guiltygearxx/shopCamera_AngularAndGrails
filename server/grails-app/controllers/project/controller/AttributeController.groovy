package project.controller

import grails.converters.JSON
import project.domain.Attribute

class AttributeController extends DefaultRestfulController<Attribute> {

    def cacheService;

    AttributeController() {
        super(Attribute)
    }

    AttributeController(Class<Attribute> resource) {
        super(resource)
    }

    AttributeController(Class<Attribute> resource, boolean readOnly) {
        super(resource, readOnly)
    }

    @Override
    def index(Integer max) {

        render(cacheService.attributes as JSON);
    }
}
