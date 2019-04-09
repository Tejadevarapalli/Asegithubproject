import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class mongoService {

  constructor(private http: HttpClient) {}


  sendDetails(formdata) {
    console.log('checkpoint',formdata);
    return this.http.post('http://localhost:3000/sendDetails', formdata);
   }
}
