package project.service

import grails.gorm.transactions.Transactional
import org.springframework.web.multipart.MultipartFile
import project.domain.UploadFile

@Transactional
class UpdateUploadFileService implements BaseService {

    static scope = "request";

    def grailsApplication;

    private MultipartFile file;

    private UploadFile uploadFile;

    private Boolean validate() {

        if (!file) {

            this.errors << new Error(errorCode: "uploadFile.fileIsRequired");

            return false;
        }

        if (!file.name) {

            this.errors << new Error(errorCode: "uploadFile.fileNameIsRequired");

            return false;
        }

        return true;
    }

    private void save() {

        String name_;
        String extension;

        String orignialName = file.originalFilename;
        Integer index = orignialName.lastIndexOf('.');

        if (index != -1) {

            name_ = orignialName.substring(0, index - 1);
            extension = orignialName.substring(index + 1);
        } else {

            name_ = orignialName;
        }

        uploadFile = new UploadFile(
                name: name_, fileSize: file.size, extension: extension,
                isDeleted: false, lastModifiedTime: new Date(), lastModifiedUser: "admin"
        );

        uploadFile.save(flush: true);

        String subFix = extension ? ".${extension}" : "";

        File destFile = new File("${grailsApplication.config.uploadFile.baseDir}/${uploadFile.id}${subFix}");

        file.transferTo(destFile);
    }

    Boolean upload(MultipartFile file) {

        this.file = file;

        if (!this.validate()) return false;

        this.save();

        this.result.uploadFile = uploadFile;

        return true;
    }
}
