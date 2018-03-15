package project.bean

import project.service.Error

class ResultBean {

    Boolean isSuccess;
    List<Error> errors;
    def result;
}
