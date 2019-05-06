import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {mongoService} from '../mongo.service';
import {saveas} from 'file-saver';
import {FileuploadService} from '../fileupload.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  projectdetails: object;

  constructor(private route: ActivatedRoute, public service: mongoService, public dservice: FileuploadService) { }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.viewdetails(id).subscribe(result => {
    console.log(result);
    this.projectdetails = result;
    });
  }

  download() {
    console.log(this.projectdetails);
  // this.dservice.downloadFile(this.projectdetails[0].User, this.projectdetails[0].Projecttitle)
  //      .subscribe(
  //        data => console.log(data),
  //        error => console.error(error)
  //      );
    window.open('http://localhost:3000/file/download/' + this.projectdetails[0].User + '/' + this.projectdetails[0].Projecttitle);
  }


}
