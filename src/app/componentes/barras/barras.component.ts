import { Component } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: []
})
export class BarrasComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 15, 56, 55, 40], label: 'Tacos'},
    {data: [80, 48, 40, 19, 86, 27, 90], label: 'Tamales'},
    {data: [27, 40, 54, 75, 56, 77, 45], label: 'Quesadillas'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let dataTacos = [ Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40 ];
    let dataTamales = [ 80, Math.round(Math.random() * 100), 40, (Math.random() * 100), 86, 27, (Math.random() * 100)];
    let dataQuesadillas = [ 27, 40, Math.round(Math.random() * 100) , 75, (Math.random() * 100), (Math.random() * 100), 45 ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = dataTacos;
    clone[1].data = dataTamales;
    clone[2].data = dataQuesadillas;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
