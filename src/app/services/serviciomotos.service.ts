import { Injectable } from '@angular/core';
import {Motos} from '../models/models';

@Injectable()
export class ServiciomotosService {
    

  private motos: Motos[] = [
    {id: 1, marca: 'Honda', modelo: 'CBR', exclusiva: false, precio: 10000},
    {id: 2, marca: 'Yamaha', modelo: 'R1', exclusiva: true, precio: 20000},
    {id: 3, marca: 'Suzuki', modelo: 'GSX', exclusiva: false, precio: 30000},
    {id: 4, marca: 'Kawasaki', modelo: 'Ninja', exclusiva: true, precio: 40000},
    {id: 5, marca: 'Ducati', modelo: 'Panigale', exclusiva: true, precio: 50000},
    {id: 6, marca: 'BMW', modelo: 'S1000RR', exclusiva: true, precio: 60000},
    {id: 7, marca: 'Triumph', modelo: 'Speed Triple', exclusiva: false, precio: 70000},
    {id: 8, marca: 'KTM', modelo: '1290 Super Duke', exclusiva: false, precio: 80000},
    {id: 9, marca: 'Aprilia', modelo: 'RSV4', exclusiva: true, precio: 90000},
    {id: 10, marca: 'Harley Davidson', modelo:'harly' , exclusiva: true, precio: 100000},

  ];
  getMotos(): any {
    return this.motos;
  }
  getMoto(id: number): any {
    return this.motos[id - 1];
  }
  constructor() { }
}
