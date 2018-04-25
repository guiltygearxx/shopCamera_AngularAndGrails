package project.controller

import grails.converters.JSON
import project.bean.PaginationParams
import project.bean.TableQueryResponse
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
    protected List<ProductView> _search() {

        this.buildCriteria().list(params);
    }

    protected buildCriteria() {

        Closure filterClosure = this.buildFilterClosure();

        return ProductView.where({

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
        })
    }

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.productIds) && (inList("id", params.productIds.split(";")));
            (params.categoryIds) && (inList("categoryId", params.categoryIds.split(";")));
            (params.fromPrice) && (ge("gia", (new BigDecimal(params.fromPrice) * 1000 * 1000)))
            (params.toPrice) && (le("gia", (new BigDecimal(params.toPrice) * 1000 * 1000)))

            delegate.with defaultClosure;
        }
    }

    @Override
    def paginate(PaginationParams paginationParams) {

        TableQueryResponse result = queryPagingService.query(this.buildCriteria(), paginationParams);

        render(result as JSON);
    }
}

