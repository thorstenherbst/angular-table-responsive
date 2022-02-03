import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //url principal
  { path: 'home', component: TableResponsiveComponent },
  { path: '**', component: TableResponsiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
