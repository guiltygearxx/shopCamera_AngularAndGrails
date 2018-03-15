package project.service

import grails.gorm.transactions.Transactional

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

            example.properties.each { String key, def value ->

                if (value == null) return;

                eq(key, value);
            }
        }
    }
}
