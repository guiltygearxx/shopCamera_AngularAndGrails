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

        "/solution/paginate"(controller: "solution", action: "paginate", method: "GET");
        "/solution"(resources: "solution")
        "/giaiPhap"(resources: "solution")

        "/news/paginate"(controller: "news", action: "paginate", method: "GET");
        "/news"(resources: "news")
        "/tintuc"(resources: "news")

        "/order/paginate"(controller: "order", action: "paginate", method: "GET");
        "/order/paginate"(controller: "order", action: "updateOrder");
        "/order"(resources: "order")

        "/product"(resources: "product");

        "/category"(resources: "category")

        "/attribute"(resources: "attribute")

        "/attributeValue"(resources: "attributeValue")

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
