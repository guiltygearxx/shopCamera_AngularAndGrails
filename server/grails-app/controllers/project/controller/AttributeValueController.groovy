package project.controller

import project.domain.AttributeValue

class AttributeValueController extends DefaultRestfulController<AttributeValue> {

    AttributeValueController() {
        super(AttributeValue)
    }

    AttributeValueController(Class<AttributeValue> resource) {
        super(resource)
    }

    AttributeValueController(Class<AttributeValue> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
