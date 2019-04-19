import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {mongoService} from '../mongo.service';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public value= any;
  constructor(private route: ActivatedRoute, public service: mongoService) { }
  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.viewdetails(id).subscribe(result => {
    console.log(result);
    this.value=result;
    });
  }

}
