package server

class UrlMappings {

    static mappings = {

        "/productView/paginate"(controller: "productView", action: "paginate", method: "GET");
        "/productView"(resources: "productView")

        "/product/updateProduct"(controller: "product", action: "updateProduct", method: "POST");
        "/product"(resources: "product")

        "/product"(resources: "product")

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
