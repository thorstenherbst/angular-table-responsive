
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.scss']
})
export class TableResponsiveComponent implements OnInit {
  displayedColumns: string[] = ['Fecha', 'ID', 'Tipo', 'Descripcion','Monto', 'star'];
  dataSource = new MatTableDataSource<InfoTransaccion>(TEST_DATA);//Data  TEst

  public getScreenWidth: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort| any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Detectando el width de la pantalla
    @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.getScreenWidth = window.innerWidth;
      console.log(this.getScreenWidth);
    }
 //---------

  applyFilter(filterValue: any) {
    const myFilterValue=filterValue.target.value;
    this.dataSource.filter = myFilterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}




//Ejemplo de datos
 export interface InfoTransaccion{
   fecha:any;
   id:string;
   tipo:string;
   descripcion:string;
   monto:number;
 }
const TEST_DATA: InfoTransaccion[] = [
{fecha:'02/02/2022', id:'101036', tipo:'En APP',descripcion: 'Transferencia',monto:750},
{fecha:'01/02/2022', id:'101562', tipo:'Internacional',descripcion: 'Transferencia',monto:9000},
{fecha:'27/01/2022', id:'105656', tipo:'En APP',descripcion: 'Transferencia',monto:60},
{fecha:'14/01/2022', id:'656262', tipo:'En APP',descripcion: 'Transferencia',monto:365},
{fecha:'12/01/2022', id:'145289', tipo:'En APP',descripcion: 'Transferencia',monto:650},
{fecha:'31/12/2021', id:'101742', tipo:'Internacional',descripcion: 'Transferencia',monto:50},
{fecha:'24/12/2021', id:'561632', tipo:'En APP',descripcion: 'Transferencia',monto:12302},
{fecha:'01/01/2022', id:'101562', tipo:'En APP',descripcion: 'Transferencia',monto:8965},
{fecha:'24/01/2022', id:'101534', tipo:'Otros Bancos',descripcion: 'Transferencia',monto:3620},
{fecha:'01/02/2022', id:'156562', tipo:'En APP',descripcion: 'Transferencia',monto:45},
{fecha:'01/02/2022', id:'101569', tipo:'Internacional',descripcion: 'Transferencia',monto:12.50},
{fecha:'23/02/2022', id:'101536', tipo:'En APP',descripcion: 'Transferencia',monto:1563},
{fecha:'01/02/2022', id:'104512', tipo:'Otros Bancos',descripcion: 'Transferencia',monto:200},
{fecha:'01/02/2022', id:'126445', tipo:'En APP',descripcion: 'Transferencia',monto:369},
{fecha:'18/02/2022', id:'105151', tipo:'En APP',descripcion: 'Transferencia',monto:420},
{fecha:'01/02/2022', id:'126112', tipo:'Internacional',descripcion: 'Transferencia',monto:530},
{fecha:'01/02/2022', id:'556166', tipo:'En APP',descripcion: 'Transferencia',monto:1.25},

];
