import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  dataSets: {
    title: string;
    labels: string[];
    data: ChartDataset<'doughnut', number[]>[];
  }[] = [
    {
      title: 'Grafica 1',
      labels: ['Sales 1', 'Store 1', 'Products 1'],
      data: [{ data: [350, 350, 440] }],
    },
    {
      title: 'Grafica 2',
      labels: ['Sales 2', 'Store 2', 'Products 2'],
      data: [{ data: [310, 650, 670] }],
    },
    {
      title: 'Grafica 3',
      labels: ['Sales 3', 'Store 3', 'Products 3'],
      data: [{ data: [330, 850, 210] }],
    },
    {
      title: 'Grafica 4',
      labels: ['Sales 4', 'Store 4', 'Products 4'],
      data: [{ data: [370, 250, 110] }],
    },
  ];
}
