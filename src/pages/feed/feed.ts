import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  @ViewChild('lineCanvas') lineChartElem;
  public lineChart: any;
  public controlCollapsible: any = {
    status: true,
    exams: false,
    warning: false,
    attempts: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private loadChart(): void {
    this.lineChart = new Chart(this.lineChartElem.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
          label: "Evolução",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
      }]}
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.loadChart();
  }

  public goExams() {
    this.navCtrl.parent.select(1);
  }

  public goAppointments() {
    this.navCtrl.parent.select(2);
  }

  public toggleCollapsible(keyToShow: string) {
    if(this.controlCollapsible[keyToShow]) {
      this.controlCollapsible[keyToShow] = !this.controlCollapsible[keyToShow];
      return;
    }

    Object.keys(this.controlCollapsible).forEach(key => {
      this.controlCollapsible[key] = false;
    });
    this.controlCollapsible[keyToShow] = true;
  }

}
