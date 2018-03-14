package project.controller

import project.domain.News

class TinTucController extends DefaultRestfulController<News> {


    TinTucController() {
        super(News);
    }

    TinTucController(Class<News> resource) {
        super(resource)
    }

    TinTucController(Class<News> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}
