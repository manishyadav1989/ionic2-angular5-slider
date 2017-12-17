import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  styleUrls: ['/src/pages/home/home.scss'],
  templateUrl: 'home.html',
})

export class HomePage {
  images: any = [];
  constructor(public navCtrl: NavController) {
      for(var i=1; i<16; i++){
          this.images.push({
              name : "Manish",
              img :"assets/imgs/"+ i +".jpg",
              age: 25,
              hobby:"Workout, Games",
              country:"India"
          })
      }
  }
}