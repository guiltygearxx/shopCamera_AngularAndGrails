package project.controller

import grails.converters.JSON
import project.domain.Category

class CategoryController extends DefaultRestfulController<Category> {

    def springSecurityService;

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

    @Override
    protected void deleteResource(Category category) {

        super.deleteResource(category);

        Category.findAllByParentCategoryIdAndIsDeleted(category.id, false)?.each { Category subCategory ->

            subCategory.with {

                isDeleted = true;
                lastModifiedTime = new Date();
                lastModifiedUser = springSecurityService.authentication.name;

                save(flush: true);
            }
        }
    }
}
