package server

import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        this.registerDateMarshaller();
    }

    def destroy = {
    }

    private registerDateMarshaller() {

        JSON.registerObjectMarshaller(Date) { Date date ->

            date.getTime();
        }
    }
}
