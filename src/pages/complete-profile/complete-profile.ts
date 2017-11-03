import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CompleteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-profile',
  templateUrl: 'complete-profile.html',
})
export class CompleteProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  public completeProfile(): void {
    const loading = this.loadingCtrl.create({
      content: 'Coletando exames e consultas do plano selecionado...',
      duration: 4000
    });
    loading.present();
    loading.didLeave.subscribe(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteProfilePage');
  }

}
