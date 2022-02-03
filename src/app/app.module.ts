import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MaterialModules } from './material.modules';

@NgModule({
  declarations: [
    AppComponent,
    TableResponsiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
