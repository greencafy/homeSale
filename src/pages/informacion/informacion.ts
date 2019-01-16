import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  llevame(){
    const toast = this.toastCtrl.create({
      message: 'Vamos a la casa',
      duration: 3000
    });
    toast.present();
  }
  mePresiona(){
      const toast = this.toastCtrl.create({
      message: 'presiono la imagen',
      duration: 3000
    });
    toast.present();
  }

}
