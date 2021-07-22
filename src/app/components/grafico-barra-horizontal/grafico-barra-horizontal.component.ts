import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  public results = [{
    "name": "Juego 1",
    "value": 20
  },
  {
    "name": "Juego 2",
    "value": 50
  },
  {
    "name": "Juego 3",
    "value": 25
  },
  {
    "name": "Juego 4",
    "value": 12
  }]
  


  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Juegos';
  public showYAxisLabel = true;
  public yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {
    
  }

  onSelect(event : any ) {
    console.log(event);
  }

}
