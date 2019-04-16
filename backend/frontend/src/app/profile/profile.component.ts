import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mongoService} from '../mongo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute, public service: mongoService) { }

  ngOnInit() {
    this.service.profiledetails(this.route.snapshot.paramMap.get('id')).subscribe(details => {
      console.log(details);
    });
  }

}
