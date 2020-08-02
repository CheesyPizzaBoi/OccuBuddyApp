import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { JobslistPage } from '../jobslist/jobslist.page';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public jobs;
  
  public category; 
  constructor(public navCtrl: NavController, private router: Router, private service: ServiceService) {
    this.jobs = service.getJobs();
    console.log(this.jobs);
  }
  goPost (category) {
    this.service.setCategory(category);
    this.router.navigate(["jobslist"]);    
  }
  
    
}




