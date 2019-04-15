import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
display = 'none';
  constructor(private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled(){
    this.display = 'none';
  }

  mymodels()
  {
    this.router.navigateByUrl('/mymodels/' + this.route.snapshot.paramMap.get('id'));
  }
}


