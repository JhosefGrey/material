import { Component, OnInit } from '@angular/core';
import { single, multi, } from '../agregar/data'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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

