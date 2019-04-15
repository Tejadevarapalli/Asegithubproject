import { Component, OnInit } from '@angular/core';
import { mongoService} from '../mongo.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  constructor(private service: mongoService) { }

  ngOnInit() {
    this.service.modelDetails().subscribe(result => {
      console.log('login check point result - ', result);
    });

  }

}
