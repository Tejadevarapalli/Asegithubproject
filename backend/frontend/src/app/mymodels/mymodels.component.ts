import { Component, OnInit } from '@angular/core';
import {mongoService} from "../mongo.service";

@Component({
  selector: 'app-mymodels',
  templateUrl: './mymodels.component.html',
  styleUrls: ['./mymodels.component.css']
})
export class MymodelsComponent implements OnInit {

  constructor(public getDetails: mongoService) { }

  ngOnInit() {
    this.getDetails.mymodelDetails().subscribe(result => {
    console.log('login check point result - ', result);
     });
  }

}
