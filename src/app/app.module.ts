import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material
import { MaterialModules } from './material.modules';

//Test Data Service
import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableResponsiveGridComponent } from './table-responsive-grid/table-responsive-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TableResponsiveComponent,
    TableResponsiveGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
