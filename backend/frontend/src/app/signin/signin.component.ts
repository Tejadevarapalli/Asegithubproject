import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {mongoService} from "../mongo.service";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  constructor(public formDetails: mongoService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        EmailID: new FormControl(),
        Password: new FormControl()
      });
  }
  onSubmit() {
    this.formDetails.signinDetails(this.form.value).subscribe(result => {
      console.log('login check point result - ', result);
      });
  }
}
