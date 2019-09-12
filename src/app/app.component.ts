import { Producto } from './models/producto.model';
import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Caja registradora';

  show = false;

  arrBebida: Producto[];
  arrEntrante: Producto[];
  arrComida: Producto[];
  arrPostre: Producto[];

  arrFinales: Producto[];

  constructor(private Service: ServiceService) {

    const screenF = document.getElementById('screenF');
    console.log('Root width: ' + screenF.offsetWidth + ' Root height: ' + screenF.offsetHeight);

    if (window.screen.width >= 1024 && window.screen.height >= 768 && screenF.offsetWidth >= 1024 && screenF.offsetHeight >= 768) {
      this.show = true;
      console.log('show ' + this.show);
      console.log('Window width: ' + window.screen.width + ' Window height: ' + window.screen.height);
      console.log('Root width: ' + screenF.offsetWidth + ' Root height: ' + screenF.offsetHeight);
    }

    this.arrBebida = [
      new Producto('agua', 1, 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/5878d1335cafe8afe18b4578/alergia-agua_0.jpg'),
      new Producto('coca-cola', 1.50, 'https://static.condisline.com/resize_395x416/images/catalog/large/603070.jpg'),
      new Producto('coca-cola light', 1.50, 'https://stenbol.es/wp-content/uploads/2017/02/cocacola-light-600x449.jpg'),
      new Producto('coca-cola zero', 1.50, 'https://images-na.ssl-images-amazon.com/images/I/71G0qO-%2BlXL._SX569_.jpg'),
      new Producto('fanta naranja', 1.50, 'https://www.encopadebalon.com/3497-large_default/fanta-naranja-pack-24-unidades-33cl.jpg'),
      new Producto('fanta limon', 1.50, 'https://www.encopadebalon.com/3404-large_default/fanta-limon-lata-33cl-pack-24-unidades.jpg'),
      new Producto('aquarius', 1.50, 'https://static.carrefour.es/hd_1600x_/supermercado/bcc_static/catalogImages/product/000097/000097.jpg'),
      new Producto('cerveza', 1.50, 'https://cdn.shopify.com/s/files/1/2028/1947/products/CERVEZA_LATA_HEINEKEN_33_CL2_1024x1024.jpg?v=1501690071'),
      new Producto('copa vino tinto', 2, 'https://www.ohgar.com/sites/default/files/styles/uc_product/public/repositorioImagenes/7144593.jpg?itok=x_9II8ul'),
      new Producto('copa vino blanco', 2, 'https://www.ideavinos.com/media/wysiwyg/blanco.png'),
      new Producto('cafe con leche', 1, 'http://cdn.laprensa.com.ni/wp-content/uploads/2016/08/19154911/20-Vida-Cocina2.jpg'),
      new Producto('cafe solo', 1, 'https://www.cocina.es/wp-content/uploads/2012/04/predecir-el-tiempo-observando-taza-de-cafe-con-leche.png'),
    ];

    this.arrEntrante = [
      new Producto('patatas bravas', 4.50, 'http://cucharaotenedor.com/wp-content/uploads/2014/02/patatas-bravas.jpg'),
      new Producto('saltamontes curry', 13, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/11/26/14485535753770.jpg'),
      new Producto('jamon serrano y queso', 6.50, 'https://media-cdn.tripadvisor.com/media/photo-s/0a/96/87/ac/tabla-de-queso-curado.jpg'),
      new Producto('croquetas', 4.80, 'https://www.hogarmania.com/archivos/201801/croquetas-jamon-detalle-668x400x80xX.jpg'),
      new Producto('empanadillas', 5.00, 'https://images-gmi-pmc.edge-generalmills.com/083f1873-7237-41ee-832f-2fb7bdd989f2.jpg'),
      new Producto('rollitos salsa', 4.80, 'https://lovecooking.neff.es/wp-content/uploads//2017/12/rollitos-navidad_570px.jpg'),
      new Producto('huevo relleno', 4.50, 'https://cdn.cookmonkeys.es/categories/entrantes-y-huevos.jpg'),
      new Producto('montaditos', 7, 'https://www.natursan.net/wp-content/entrantes-nochevieja.jpg')
    ];

    this.arrComida = [
      new Producto('huevos rotos', 12.50, 'https://madridsecreto.co/wp-content/uploads/2015/06/huevos-7.jpg'),
      new Producto('arroz cubano', 10, 'https://cdn1.cocina-familiar.com/recetas/arroz-a-la-cubana-receta-tradicional.JPG'),
      new Producto('ensalada espinacas', 8.75, 'https://www.hogarmania.com/archivos/201601/5700-2-ensalada-de-espinacas-y-remolacha-con-vinagreta-de-cafe-xl-668x400x80xX.jpg'),
      new Producto('lubina plancha', 12, 'https://unareceta.com/wp-content/uploads/2018/07/receta-de-lubina-a-la-plancha-con-limon.jpg'),
      new Producto('hamburguesa vegetal', 10.35, 'https://www.natursan.net/wp-content/hamburguesa-vegetal-receta.jpg'),
      new Producto('entrecot brasa', 18, 'https://okdiario.com/img/recetas/2017/07/21/entrecot-de-ternera-a-la-brasa-3.jpg'),
      new Producto('sopa tomate', 6.75, 'https://t1.rg.ltmcdn.com/es/images/8/1/9/img_sopa_de_tomate_con_thermomix_30918_600.jpg'),
      new Producto('lentejas', 8.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu8cVouUsNXeR3vV-R2NnyElmPiM6qM8PDTAsauEQodDlTG1I1g'),
      new Producto('ensalada pasta', 7.75, 'https://www.hogarmania.com/archivos/201608/recetas-ensalada-pasta-668x400x80xX.jpg')
    ];

    this.arrPostre = [
      new Producto('flan de huevo', 4.50, 'https://quierocakes.com/wp-content/uploads/2019/05/Postres-con-leche-condendada-1024x717.jpg'),
      new Producto('arroz con leche', 5.00, 'https://www.lasrecetascocina.com/wp-content/uploads/2018/03/arroz-con-leche.jpg'),
      new Producto('cheescake con fresas', 5.00, 'https://foodloversblog.es/wp-content/uploads/cheesecake-tarta-queso-fresa-postre-sin-horno.jpg'),
      new Producto('gelatina', 3.75, 'https://t2.rg.ltmcdn.com/es/images/5/8/2/img_postre_mil_y_una_gelatina_10285_orig.jpg'),
      new Producto('helado', 3.00, 'https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/05/portada-wp-heladerias.jpg'),
      new Producto('bomba de chocolate', 5.00, 'https://e0605b5e794e16b15e51-b25f5db3158ecf712705ad7a35f2aa8a.ssl.cf3.rackcdn.com/0f0bdd3d6059-coulant-de-chocolate-negro-80-640-640-nw.jpg'),
      new Producto('yogur griego', 2.25, 'https://cocina-casera.com/wp-content/uploads/2017/10/Yogur-griego.jpg'),
      new Producto('fruta', 1.50, 'https://www.casacochecurro.com/wp-content/uploads/2013/06/fruta-viva-1200x623.jpg'),
    ];

    this.arrFinales = [];
  }

  handleSentInfo($event) {
    const i: number = this.arrFinales.findIndex(producto => producto.nombre === $event.nombre);

    i === -1 ? this.arrFinales.push($event) : this.Service.updateCountAndPrice(this.arrFinales[i], 'add');
  }

}
