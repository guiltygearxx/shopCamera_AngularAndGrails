package project.controller

import project.domain.Attribute
import project.domain.AttributeValue
import project.domain.BaseDomain
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
    protected List<ProductView> _search() {

        Closure filterClosure = this.buildFilterClosure();

        ProductView.where({

            def tableAlias = ProductView;

            cacheService.attributes.each { Attribute attribute ->

                List values = params.getList(attribute.code);

                if (!values) return;

                exists(AttributeValue.where {

                    def ave = AttributeValue;

                    return referenceId == tableAlias.id && attributeId == attribute.id && isDeleted == false && value in values

                }.id());
            }

            delegate.with filterClosure

        }).list(params);
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            if (params.productIds) id in params.productIds.split(";");
            if (params.categoryIds) categoryId in params.categoryIds.split(";");

            if (params.fromPrice) gia >= (params.fromPrice as BigDecimal);
            if (params.toPrice) gia <= (params.toPrice as BigDecimal);

            delegate.with defaultClosure;
        }
    }
}

