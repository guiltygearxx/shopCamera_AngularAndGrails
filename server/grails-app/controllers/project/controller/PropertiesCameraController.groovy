package project.controller

import project.domain.PropertiesCamera

class PropertiesCameraController extends DefaultRestfulController<PropertiesCamera> {

    PropertiesCameraController() {
        super(PropertiesCamera);
    }

    PropertiesCameraController(Class<PropertiesCamera> resource) {

        super(resource, true);
    }

    PropertiesCameraController(Class<PropertiesCamera> resource, Boolean readOnly) {

        super(resource, readOnly);
    }
}