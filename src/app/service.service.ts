import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  updateCountAndPrice(arr: any, operation: string) {

    if (!arr.nombre.includes('(x')) {

      // update price
      arr.precio = arr.precio * 2;

      // update name
      arr.nombre = '(x2) ' + arr.nombre;

      return;

    } else {

      // get count number 
      let count = '';

      for (const i of arr.nombre) {
        if (i === ')') {
          break;
        } else if (i === '(' || i === 'x') {
          continue;
        } else {
          count = count + i;
        }
      }

      // and turn to number 
      let countN: number = Number(count);

      // get price of ONE unit
      const precioUnidad = arr.precio / countN;

      // update count and price
      switch (operation) {
        case 'add':
          countN++;
          arr.precio = precioUnidad * countN;
          break;
        case 'delete':
          countN--;
          arr.precio = precioUnidad * countN;
          break;
      }

      // update name
      arr.nombre = countN !== 1 ? arr.nombre.replace(count, countN.toString()) : arr.nombre.slice(5, arr.length);

      return;
    }
  }
}
