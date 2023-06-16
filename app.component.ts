import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Administración de artículos';

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0

  }

  articulos: any[] = [{ codigo: 1, descripcion: 'papas', precio: 12.5 },
  { codigo: 2, descripcion: 'manzanas', precio: 12.10 },
  { codigo: 3, descripcion: 'melon', precio: 52.30 },
  { codigo: 4, descripcion: 'cebollas', precio: 17 },
  { codigo: 5, descripcion: 'calabaza', precio: 20 }

  ];

  agregarArticulo() {
    const codigoExistente = this.articulos.find(item => item.codigo === this.art.codigo);

    if (codigoExistente) {
      alert("No se puede agregar el producto. El código ya existe.");
    } else {
      this.articulos.push({ ...this.art });
      this.art = {
        codigo: 0,
        descripcion: "",
        precio: 0
      };
    }
  }

  eliminarArticulo(item: any) {
    const index = this.articulos.indexOf(item);
    this.articulos.splice(index, 1);
  }

  seleccionarArticulo(item: any) {
    this.art = { ...item };
    const index = this.articulos.indexOf(item);
    this.articulos.splice(index, 1);
  }

  modificarArticulo(articuloModificado: any) {
    const index = this.articulos.findIndex(item => item.codigo === articuloModificado.codigo);
    if (index !== -1) {
      this.articulos[index] = articuloModificado;
    }
  }
  
}
