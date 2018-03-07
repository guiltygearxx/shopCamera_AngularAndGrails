package project.service

import grails.gorm.transactions.Transactional
import grails.web.databinding.DataBindingUtils
import project.bean.ResultBean

@Transactional
class ApplicationUtilsService {

    def bindData(def target, def source) {

        DataBindingUtils.bindObjectToInstance(target, source, null, null, "");

        return target;
    }

    ResultBean getResultBean(BaseService baseService) {

        return new ResultBean(isSuccess: !baseService.errors, errors: baseService.errors, result: baseService.result);
    }

    BigDecimal convertToBigDecimal(String value) {

        if (!value || !value.trim()) return null;

        value = value.replaceAll("\\.", "").replaceAll(",", ".")

        return new BigDecimal(value);
    }
}
