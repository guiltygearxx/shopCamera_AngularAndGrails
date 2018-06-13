package project.controller

import project.domain.HomeHeader

class HomeHeaderController extends DefaultRestfulController<HomeHeader> {

    def applicationUtilsService;

    HomeHeaderController() {
        super(HomeHeader);
    }

    HomeHeaderController(Class<HomeHeader> resource) {
        super(resource)
    }

    HomeHeaderController(Class<HomeHeader> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
