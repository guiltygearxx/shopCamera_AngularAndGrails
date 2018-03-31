package server

import grails.converters.JSON

class BootStrap {

    def cacheService;

    def init = { servletContext ->

        this.registerDateMarshaller();

        cacheService.cachingAttribute();
    }

    def destroy = {
    }

    private registerDateMarshaller() {

        JSON.registerObjectMarshaller(Date) { Date date ->

            date.getTime();
        }
    }
}
