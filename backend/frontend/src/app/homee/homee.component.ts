import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {FileuploadService} from "../fileupload.service";
import {saveas} from 'file-saver';
import { mongoService } from '../mongo.service';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const uri = 'http://localhost:3000/file/upload';
/*import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../upload.service';
*/
@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {

  form1: FormGroup;
  uploader:FileUploader = new FileUploader({url: uri});

  attachmentList:any = [];

  constructor(private _fileService: FileuploadService, public formDetails: mongoService) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }

  download(index){
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename)
      .subscribe(
        data => saveas(data, filename),
        error => console.error(error)
      );
  }

  ngOnInit() {
    this.form1 = new FormGroup(
      {
        Projecttitle : new FormControl(),
        ProjectDescription : new FormControl(),
        GithubURL : new FormControl()
      });
  }
  onSubmit1() {
    console.log(this.form1.value),
    this.formDetails.sendDetails(this.form1.value).subscribe(result => {
      console.log('login check point result - ', result);
    });
  }
}



