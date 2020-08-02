import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  jobs = [
    {
      category: "Developer",
      jobs: [{
        description:"Does front-end.", 
        jobTitle:"Front-end",

      },
      {
        description:"hnmbn hbn", 
        jobTitle:"Full Stack",
           
      },
      {
        description:"mkjn,m", 
        jobTitle:"Back End",
           
      }]
      
    },
    {
      category: "sbajfb fudf whbjnbjh",
      jobs: [{
        description:"sahn",
        jobTitle:"fghjknmv", 
      },
      {
        description:"jhasndb", 
        jobTitle:"fcghvjbkan",
           
      },
      {
        description:"jhasndb", 
        jobTitle:"fcghvjbkan",
           
      }]
    },
    {
      category: "dfghjcvbnmtyui",
      jobs: [{
        description:"njsak",
        jobTitle:"vhjn",
      },
      {
        description:"jhasndb", 
        jobTitle:"fcghvjbkan",
           
      },
      {
        description:"jhasndb", 
        jobTitle:"fcghvjbkan",
           
      }]
    }
  ];

  category;
  setCategory(category) {
    this.category = category;
    console.log(this.category);
  }
  getJobs() {
    return this.jobs;
  }
  getCategory(){
    return this.category;
  }
  constructor() { }

  

}
