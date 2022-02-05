
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { InfoTransaccion } from '../models/infoTransaccion.model';

@Component({
  selector: 'app-table-responsive-grid',
  templateUrl: './table-responsive-grid.component.html',
  styleUrls: ['./table-responsive-grid.component.scss']
})
export class TableResponsiveGridComponent implements OnInit {

  constructor(private data:DataService) {
     this.TEST_DATA= data.testArrayData; //Data test service
  }

  public TEST_DATA;

  displayedColumns: string[] = ['Fecha', 'ID', 'Tipo', 'Descripcion','Monto', 'star'];
  dataSource = new MatTableDataSource<InfoTransaccion>(this.data.testArrayData);//Data test

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort| any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    const myFilterValue=filterValue.target.value;
    this.dataSource.filter = myFilterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

