package project.controller

import project.domain.Solution

class SolutionController extends DefaultRestfulController<Solution> {

    SolutionController() {
        super(Solution);
    }

    SolutionController(Class<Solution> resource) {
        super(resource)
    }

    SolutionController(Class<Solution> resource, boolean readOnly) {
        super(resource, readOnly)
    }
}