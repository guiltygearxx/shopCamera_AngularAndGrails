package project.controller

import grails.converters.JSON
import org.springframework.http.HttpStatus
import org.springframework.web.multipart.MultipartFile
import project.domain.UploadFile

class UploadFileController extends DefaultRestfulController<UploadFile> {

    def updateUploadFileService;
    def applicationUtilsService;
    def uploadFileService;

    UploadFileController() {
        super(UploadFile);
    }

    UploadFileController(Class<UploadFile> resource) {
        super(resource)
    }

    UploadFileController(Class<UploadFile> resource, boolean readOnly) {
        super(resource, readOnly)
    }

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

    @Override
    protected Closure buildFilterClosure() {

        Closure defaultClosure = super.buildFilterClosure();

        return {

            (params.sName) && (ilike("name", "%${params.sName.toLowerCase()}%"));
            (params.sExtension) && (ilike("extension", "%${params.sExtension.toLowerCase()}%"));

            delegate.with defaultClosure;
        }
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

    @Override
    def delete() {

        UploadFile uploadFile = queryForResource(params.id);

        super.delete();

        this.uploadFileService.deleteFile(uploadFile);
    }
}
