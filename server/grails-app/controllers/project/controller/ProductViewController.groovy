package project.controller

import project.domain.Attribute
import project.domain.AttributeValue
import project.view.ProductView

class ProductViewController extends DefaultRestfulController<ProductView> {

    def cacheService;

    ProductViewController() {
        super(ProductView);
    }

    ProductViewController(Class<ProductView> resource) {

        super(resource, true);
    }

    ProductViewController(Class<ProductView> resource, Boolean readOnly) {

        super(resource, readOnly);
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

//            or {
//                (params.paramsQuery) && (ilike("name", "%${params.paramsQuery.toLowerCase()}%"));
//                (params.paramsQuery) && (ilike("hangSanXuat", "%${params.paramsQuery.toLowerCase()}%"));
//                (params.paramsQuery) && (ilike("code", "%${params.paramsQuery.toLowerCase()}%"));
//                (params.paramsQuery) && (ilike("categoryName", "%${params.paramsQuery.toLowerCase()}%"));
//            }

            (params.productIds) && (inList("id", params.productIds.split(";")));
            (params.categoryIds) && (inList("categoryId", params.categoryIds.split(";")));

            cacheService.attributes.each { Attribute attribute ->

                List values = params.getList(attribute.code);

                if (values) {

                    def p1 = ProductView;

                    exists(AttributeValue.where {
                        p1.id == referenceId && attribute.id == attributeId && isDeleted == false && value in values
                    }.id());
                }
            }

            defaultClosure.delegate = delegate;

            defaultClosure.call();
        }
    }
}

