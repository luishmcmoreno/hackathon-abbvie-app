import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-health-plan',
  templateUrl: 'select-health-plan.html',
})
export class SelectHealthPlanPage {

  public isPasswordVisible = false;
  public healthPlan: string;
  public showSpinner: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectHealthPlanPage');
  }

  public toggleInputType(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public connect() {
    const loader = this._createLoader();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.setRoot('HomePage');
    }, 2500);
  }

  public cancel() {
    this.navCtrl.pop();
  }

  private _createLoader(): Loading {
    const loader = this.loadingCtrl.create({
      content: 'Conectando com o plano de saúde. Isto pode levar alguns minutos.',
      spinner: 'bubbles'
    });
    loader.present();
    return loader;
  }

}
