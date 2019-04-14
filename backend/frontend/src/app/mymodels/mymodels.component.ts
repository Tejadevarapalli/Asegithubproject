import { Component, OnInit } from '@angular/core';

import {mongoService} from '../mongo.service';
import {mongoService} from "../mongo.service";
import {IProject} from "./project";


@Component({
  selector: 'app-mymodels',
  templateUrl: './mymodels.component.html',
  styleUrls: ['./mymodels.component.css']
})
export class MymodelsComponent implements OnInit {
  pageTitle = 'Projects List';

  listFilter1 = '';
  get listFilter(): string {
    return this.listFilter1;
  }
  set listFilter(value: string) {
    this.listFilter1 = value;
    this.filteredproject = this.listFilter ? this.performFilter(this.listFilter) : this.projects;
  }

  filteredproject: IProject[] = [];
  projects: any;

  performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>
      project.Projecttitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(public getDetails: mongoService) {
    this.filteredproject = this.projects;
  }

  ngOnInit() {
    this.getDetails.mymodelDetails().subscribe(result => {
      this.projects=result;
      this.filteredproject = this.projects;

      console.log('login check point result - ', result);
     });




  }
}
