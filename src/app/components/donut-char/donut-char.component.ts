import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'component-donut-char',
  templateUrl: './donut-char.component.html',
  styles: [],
})
export class DonutCharComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input()
  dataSet?: ChartDataset<'doughnut', number[]>[];

  public doughnutChartData?: ChartData<'doughnut'>;

  ngOnInit(): void {
    if (!this.dataSet) throw Error('Para crear la gráfica se necesitan datos');

    this.doughnutChartData = {
      labels: this.labels,
      datasets: this.dataSet,
    };
  }
}
