import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal'; 
import { InformacionPage } from '../informacion/informacion';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController) {

  }

buscar(){
this.modalCtrl.create(ModalPage).present();
}

verInfo(){
  this.navCtrl.push(InformacionPage);
}

}


