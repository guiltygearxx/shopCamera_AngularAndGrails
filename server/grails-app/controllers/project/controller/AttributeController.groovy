package project.controller

import project.domain.Attribute

class AttributeController extends DefaultRestfulController<Attribute> {

    AttributeController() {
        super(Attribute)
    }

    AttributeController(Class<Attribute> resource) {
        super(resource)
    }

    AttributeController(Class<Attribute> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
