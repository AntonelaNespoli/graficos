import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styles: []
})
export class PolarAreaComponent {
// PolarArea
public polarAreaChartLabels: string[] = ['Tacos', 'Tamales', 'Quesadillas'];
public polarAreaChartData: number[] = [300, 500, 100];
public polarAreaLegend: boolean = true;

public polarAreaChartType: string = 'polarArea';

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}
public random() {
  this.polarAreaChartData = [
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100)
  ];

 }
}
