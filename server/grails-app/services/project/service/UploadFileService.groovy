package project.service

import grails.gorm.transactions.Transactional
import project.domain.UploadFile

@Transactional
class UploadFileService {

    def grailsApplication;

    File getFile(String id) {

        UploadFile uploadFile = UploadFile.findByIdAndIsDeleted(id, false);

        if (!uploadFile) return null;

        String subFix = uploadFile.extension ? ".${uploadFile.extension}" : "";

        File file = new File("${grailsApplication.config.uploadFile.baseDir}/${id}${subFix}");

        return file.exists() ? file : null;
    }
}
