//definiendo  los módulos de angular material a utilizar en el proyecto
//este archivo se importa en app.module.ts
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,

  ],
  declarations: [

  ]
})
export class MaterialModules {}
