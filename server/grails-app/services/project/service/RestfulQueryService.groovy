package project.service

import grails.gorm.transactions.Transactional
import project.domain.BaseDomain

@Transactional
class RestfulQueryService {

    def applicationUtilsService;

    private bindData(def target, def source) {

        return applicationUtilsService.bindData(target, source);
    }

    Closure buildCommonRestClosure(Class domainClass, def params) {

        def example = domainClass.newInstance();

        bindData(example, params);

        return {

            (BaseDomain.isAssignableFrom(domainClass)) && (eq("isDeleted", false));

            example.properties.each { String key, def value ->

                if (value == null) return;

                eq(key, value);
            }
        }
    }
}
