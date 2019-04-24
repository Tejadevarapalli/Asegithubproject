import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {until} from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http:HttpClient){}

  downloadFile(file:String){
    var body = {filename:file};

    return this.http.post('http://localhost:3000/file/download',body,{
      responseType : 'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  movefiles(filename,username,projectname) {
    var body = {filename: filename, username: username, projectname: projectname};
    return this.http.post('http://localhost:3000/file/movefile', body,{
      headers:new HttpHeaders().append('content-type','application/json')
    });
  }
}
