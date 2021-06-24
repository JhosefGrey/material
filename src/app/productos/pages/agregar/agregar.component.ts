import { Component, OnInit } from '@angular/core';
import { single, multi, } from '../agregar/data'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

import { KtdGridLayout, ktdTrackById } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent implements OnInit {

  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
      {id: '0', x: 0, y: 0, w: 3, h: 3},
      {id: '1', x: 3, y: 0, w: 3, h: 3},
      {id: '2', x: 0, y: 3, w: 3, h: 3},
      {id: '3', x: 3, y: 3, w: 3, h: 3},
  ];
  trackById = ktdTrackById

  single = [];
  multi = [];
  view: [number, number] = [1000, 370];

  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

 
  
    constructor(public dialog: MatDialog) {
      Object.assign(this, { single });
      Object.assign(this, { multi });
    }

    openDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height= '800px';
      dialogConfig.width= '1200px';

      const dialogRef = this.dialog.open(EditarComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
  }

}

