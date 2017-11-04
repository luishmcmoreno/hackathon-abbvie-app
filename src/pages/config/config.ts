import { CodeModalPage } from './../code-modal/code-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  public generateCode() {
    this.modalCtrl.create(CodeModalPage).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
