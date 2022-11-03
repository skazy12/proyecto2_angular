import { Component, OnInit } from '@angular/core';
import {Motos} from '../models/models';
import {ServiciomotosService} from '../services/serviciomotos.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ServiciomotosService]
})
export class ClientesComponent implements OnInit {
  clientes: any = {
    nombre: null,
    apellidos: null,
    email: null,
    telefono: null,
    ci: null,
    password: null,
  }
  descuento: number = 0;
  especificaciondescuento: string ='';

  public selectedMoto: Motos = { id: 0, marca: '', modelo: '', exclusiva: false, precio: 0};
  public motos: Motos[] = [];
  constructor(private dataservice: ServiciomotosService) { }
  
  ngOnInit(): void {
    this.motos = this.dataservice.getMotos();
  }
  onSelect(id: number): void {

    this.selectedMoto = this.dataservice.getMoto(id);
    this.calculardescuento();

  }
  create(): void {
    console.log(this.clientes);
    alert('Cliente creado');
    this.clientes = {
      nombre: null,
      apellidos: null,
      email: null,
      telefono: null,
      ci: null,
      password: null,
    }
    this.selectedMoto = { id: 0, marca: '', modelo: '', exclusiva: false, precio: 0};
    this.descuento = 0;
    this.especificaciondescuento = '';
    
  }
  calculardescuento(): void {
    if (this.selectedMoto.exclusiva) {
      this.especificaciondescuento = 'Descuento por moto exclusiva del 15%: ';
      this.descuento = this.selectedMoto.precio- this.selectedMoto.precio * 0.15;
    } else {
      this.especificaciondescuento = 'Descuento por moto normal del 10%: ';
      this.descuento = this.selectedMoto.precio- this.selectedMoto.precio * 0.10;
    }
  }

}
