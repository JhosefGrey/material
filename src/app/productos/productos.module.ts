import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NgxChartsModule } from '@swimlane/ngx-charts'

import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


import {DragDropModule} from '@angular/cdk/drag-drop';

import { KtdGridModule } from '@katoid/angular-grid-layout';





@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListadoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatTableModule,
    NgxChartsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    KtdGridModule
  ]
})
export class ProductosModule { }
