package project.controller

import grails.converters.JSON
import grails.gorm.DetachedCriteria
import project.bean.PaginationParams
import project.bean.TableQueryResponse
import project.domain.Attribute
import project.domain.AttributeValue
import project.domain.Category
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

        List<String> sorts = this.params.getList("sorts");

        DetachedCriteria<ProductView> criteria = this.buildCriteria();

        if (!sorts) {

            return criteria.list(params);

        } else {

            List<String> orders = this.params.getList("orders");

            sorts.eachWithIndex { String sort, int index ->

                criteria = criteria.order(sort, orders[index]);
            }

            return criteria.list(params);
        }
    }

    protected DetachedCriteria<ProductView> buildCriteria() {

        String categoryGroup = params.categoryGroup;

        return ProductView.where({

            def tableAlias = ProductView;

            cacheService.attributes.findAll {

                it.group == categoryGroup && params.getList(it.code)

            }.each { Attribute attribute ->

                List values = params.getList(attribute.code);

                exists(AttributeValue.where {

                    def ave = AttributeValue;

                    return referenceId == tableAlias.id && attributeId == attribute.id && isDeleted == false && value in values

                }.id());
            }

            delegate.with this.buildFilterClosure();
        });
    }

    @Override
    protected Closure buildFilterClosure() {

        return {

            if (params.productIds) (inList("id", params.productIds.split(";")));
            if (params.categoryIds) (inList("categoryId", params.categoryIds.split(";")));
            if (params.fromPrice) (ge("gia", (new BigDecimal(params.fromPrice) * 1000 * 1000)))
            if (params.toPrice) (le("gia", (new BigDecimal(params.toPrice) * 1000 * 1000)))

            delegate.with super.buildFilterClosure();
        }
    }

    @Override
    def paginate(PaginationParams paginationParams) {

        TableQueryResponse result = queryPagingService.query(this.buildCriteria(), paginationParams);

        render(result as JSON);
    }
}

