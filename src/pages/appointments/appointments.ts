import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  public searching: boolean;
  public searchText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public loadData() {
    if (!this.searchText || this.searching) {
      return;
    }

    this.searching = true;
    setTimeout(() => {
      this.searching = false;
    }, 1000);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

}
