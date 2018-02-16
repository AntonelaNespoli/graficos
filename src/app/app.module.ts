import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './componentes/linea/linea.component';
import { BarrasComponent } from './componentes/barras/barras.component';
import { DonaComponent } from './componentes/dona/dona.component';
import { RadarComponent } from './componentes/radar/radar.component';
import { PolarAreaComponent } from './componentes/polar-area/polar-area.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent,
    PolarAreaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
