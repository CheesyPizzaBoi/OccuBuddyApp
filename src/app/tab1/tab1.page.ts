import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles = [
    {
      title: "jsnvahsv",
      article: "bhd aaufa   u af eabd"
    },
    {
      title: "sbajfb fudf whbjnbjh",
      article: "qwertyuioasdfghjk"
    },
    {
      title: "dfghjcvbnmtyui",
      article: "qwertyuioasdfghjk"
    }
  ];

  

  constructor(public navCtrl: NavController) {

  }

}
