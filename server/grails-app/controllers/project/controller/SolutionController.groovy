package project.controller

import project.domain.Solution

class SolutionController extends DefaultRestfulController<Solution> {

    SolutionController() {
        super(Solution)
    }

    SolutionController(Class<Solution> resource) {
        super(resource)
    }

    SolutionController(Class<Solution> resource, boolean readOnly) {
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
