import { Injectable } from '@angular/core';
import { InfoTransaccion } from '../models/infoTransaccion.model';

@Injectable()
export class DataService {
  public testArrayData: InfoTransaccion[] = [
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

}
