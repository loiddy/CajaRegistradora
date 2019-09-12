import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})

export class ComandaComponent implements OnInit {

  @Input() finales: Producto[];

  constructor(private Service: ServiceService) {
    this.finales = [];
  }

  ngOnInit() {
  }

  sumar() {

    let suma: number;

    suma = 0;

    for (const i of this.finales) {
      suma += i.precio;
    }

    return suma;
  }

  handleClick(f) {

    if (!f.nombre.includes('(x')) {

      const i: number = this.finales.findIndex(producto => producto.nombre === f.nombre);

      this.finales.splice(i, 1);

    } else {

      this.Service.updateCountAndPrice(f, 'delete');

    }
  }

}
