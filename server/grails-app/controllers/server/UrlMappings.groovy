package server

class UrlMappings {

    static mappings = {

        "/productView/paginate"(controller: "productView", action: "paginate", method: "GET");
        "/productView"(resources: "productView")

        "/product/updateProduct"(controller: "product", action: "updateProduct", method: "POST");
        "/product"(resources: "product")

        "/uploadFile/paginate"(controller: "uploadFile", action: "paginate", method: "GET");
        "/uploadFile/uploadFile"(controller: "uploadFile", action: "uploadFile", method: "POST");
        "/uploadFile/downloadFile/$id?(.$format)?"(controller: "uploadFile", action: "downloadFile", method: "GET");
        "/uploadFile"(resources: "uploadFile")

        "/contact/updateStatus"(controller: "contact", action: "updateStatus")
        "/contact/paginate"(controller: "contact", action: "paginate", method: "GET");
        "/contact"(resources: "contact")

        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
