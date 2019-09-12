import { Producto } from '../models/producto.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() productoSeleccionado = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(pProducto) {
    this.productoSeleccionado.emit(pProducto);
  }

}
