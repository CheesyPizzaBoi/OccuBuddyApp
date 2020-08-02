import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.page.html',
  styleUrls: ['./jobslist.page.scss'],
})
export class JobslistPage implements OnInit {
  public jobs;
  constructor(public route: ActivatedRoute, private router: Router, private service: ServiceService ) {
  console.log(this.service.getCategory());
  this.jobs = this.service.getCategory();
  }

  ngOnInit() {
  }

}
