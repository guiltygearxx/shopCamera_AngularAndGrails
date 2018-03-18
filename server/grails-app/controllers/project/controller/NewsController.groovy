package project.controller

import project.domain.News

class NewsController extends DefaultRestfulController<News> {

    NewsController() {
        super(News)
    }

    NewsController(Class<News> resource) {
        super(resource)
    }

    NewsController(Class<News> resource, boolean readOnly) {
        super(resource, readOnly)
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.sTieuDe) && (ilike("tieuDe", "%${params.sTieuDe.toLowerCase()}%"));
            (params.sNoiDungNgan) && (ilike("noiDungNgan", "%${params.sNoiDungNgan.toLowerCase()}%"));

            defaultClosure.delegate = delegate;

            defaultClosure.call();
        }
    }
}
