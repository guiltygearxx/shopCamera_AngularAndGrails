package project.service

import grails.gorm.transactions.Transactional
import grails.web.databinding.DataBindingUtils
import project.domain.BaseDomain

@Transactional
class RestfulQueryService {

    private bindData(def target, def source) {

        DataBindingUtils.bindObjectToInstance(target, source, null, null, "");

        return target;
    }

    Closure buildCommonRestClosure(Class domainClass, def params) {

        def example = domainClass.newInstance();

        bindData(example, params);

        return {

            example.properties.each { String key, def value ->

                if (value == null) return;

                eq(key, value);
            }

            (BaseDomain.isAssignableFrom(domainClass)) && (eq("isDeleted", false));
        }
    }
}
