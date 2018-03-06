package project.controller

import grails.converters.JSON
import org.springframework.web.multipart.MultipartFile
import project.bean.ImportProductRow

class ImportProductController {

    def importProductService;

    def importProduct() {

        MultipartFile file = request.getFile("file");

        List<ImportProductRow> items = this.importProductService.readFile(file.inputStream);

        render(items as JSON);
    }
}
