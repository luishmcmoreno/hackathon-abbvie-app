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
  @ViewChild('pieCanvas') pieChartElem;
  public lineChart: any;
  public pieChart: any;
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
          data: [23, 28, 31, 45, 56, 74, 75],
          spanGaps: false,
      }]}
    });

    this.pieChart = new Chart(this.pieChartElem.nativeElement, {
      type: 'pie',
      data: {
      labels: ["Usuários piores", "Usuários melhores"],
      datasets: [{
      label: 'Comparação de usuários',
      data: [75, 25],
      backgroundColor: [
        'rgba(50, 219, 100, 1)',
        'rgba(212, 212, 212, 1)'
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB"
      ]}]}
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
