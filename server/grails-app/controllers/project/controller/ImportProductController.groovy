package project.controller

import grails.converters.JSON
import org.springframework.web.multipart.MultipartFile
import project.bean.ImportProductRow
import project.bean.ImportProductsForm

class ImportProductController {

    def importProductService;
    def applicationUtilsService;
    def addProductsService;

    def parseFile(String templateType) {

        println "templateType ${templateType}";

        MultipartFile file = request.getFile("file");

        List<ImportProductRow> items = this.importProductService.readFile(file.inputStream, templateType);

        render(items as JSON);
    }

    def importProducts() {

        ImportProductsForm form = applicationUtilsService.bindData(new ImportProductsForm(), request.JSON);

        println form as JSON;

        this.addProductsService.addProducts(form);

        render(this.applicationUtilsService.getResultBean(this.addProductsService) as JSON);
    }
}
