package project.controller

import grails.converters.JSON
import org.springframework.http.HttpStatus
import org.springframework.web.multipart.MultipartFile

class UploadFileController {

    def updateUploadFileService;
    def applicationUtilsService;
    def uploadFileService;

    private writeFileToRespond(File file) {

        byte[] buffer = new byte[1024];

        int nRead;

        file.withDataInputStream { stream ->

            while ((nRead = stream.read(buffer)) != -1) {

                response.outputStream.write(buffer, 0, nRead);
            }
        }

        response.outputStream.close();
    }

    def uploadFile() {

        MultipartFile file = request.getFile("file");

        updateUploadFileService.upload(file);

        render(applicationUtilsService.getResultBean(updateUploadFileService) as JSON);
    }

    def downloadFile(String id) {

        File file = uploadFileService.getFile(id);

        if (!file) {

            render(status: HttpStatus.NOT_FOUND);

            return;
        }

        this.writeFileToRespond(file);
    }
}
