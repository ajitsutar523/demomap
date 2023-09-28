import { Component, Inject, OnInit } from '@angular/core';
import { Maps,Zoom } from '@syncfusion/ej2-angular-maps';
// import { usa_map } from './usa';
// import { california } from './california';
import { worldmap } from './worldmap.json';
Maps.Inject(Zoom);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public zoomSettings?: object;
  public urlTemplate?: string;

  public shapeData?: object;
  public shapeSettings?: object;
  public shapeData1?: object;
  public type?: string;
  public shapeSettings1?: object;


  ngOnInit(): void {
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
    this.zoomSettings = {
      enable: true,
      toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
    }

    this.shapeData = worldmap;
    this.shapeSettings = {
      fill: '#E5E5E5',
      border: {
        color: 'black',
        width: 0.1
      }
    }
    this.shapeData1 = california;
    this.type = 'SubLayer',
      this.shapeSettings1 = {
        fill: 'rgba(141, 206, 255, 0.6)',
        border: {
          color: '#1a9cff',
          width: 0.25
        }
      }
  }
}
