import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ResultBean} from "../common/result-bean";
import {HttpService} from "../common/http.service";
import {UploadFile} from "../bean/upload-file";
import {environment} from "../../environments/environment";
import {ApplicationUtils} from "../common/application-utils";

@Injectable()
export class UploadFileService {

  constructor(protected httpService: HttpService,
              protected applicationUtils: ApplicationUtils) {
  }

  uploadFile(file: File): Observable<ResultBean> {

    let formData: FormData = new FormData();

    formData.append("file", file, file.name);

    return this.httpService.post("uploadFile/uploadFile", formData, null);
  }

  getDownloadLink(uploadFile: UploadFile): string {

    let url = environment.serviceBaseURL + "uploadFile/downloadFile/" + uploadFile.id;

    if (!this.applicationUtils.isStringEmpty(uploadFile.extension)) {

      url = [url, uploadFile.extension].join(".");
    }

    return url;
  }
}
