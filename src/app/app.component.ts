import { Component } from '@angular/core';
import { ArticulosService } from './services/articulos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedFiles: Array <File>;
  title = 'frontAngularApp';
  lista=null;
  art: any = {
    id:null,
    nombre:null,
    tipo:null,
    precio:null,
    stock:null,
  }

  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio.listar().subscribe(result => {
      this.lista = result;
    });
  }

  nuevo() {
    this.articulosServicio.nuevo(this.art).subscribe(result => {
      if (result=='ok') {
        this.limpiar();
        this.recuperarTodos();
      }
    });
  }

  eliminar(codigo) {
  	if(!confirm("Esta seguro que desea eliminar este registro?"))
  		return;
    this.articulosServicio.eliminar(codigo).subscribe(result => {
      if (result=='ok') {
        this.recuperarTodos();
      }
    });
  }

  actualizar() {
    this.articulosServicio.actualizar(this.art).subscribe(result => {
       
        this.limpiar();
        this.recuperarTodos(); 
    });    
  }
  
  mostrar(codigo: any) {
    this.articulosServicio.mostrar(codigo).subscribe(result => {
      this.art = result
    });
  }

  hayRegistros() {
    return true;
  }

  limpiar(){
    this.art = { 
      id:null,
      nombre:null,
      tipo:null,
      precio:null,
      stock:null
    };
  }
  //Agregado
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  upload() {
    let producto = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      producto.append("uploads[]",
	this.uploadedFiles[i],
	this.uploadedFiles[i].name);
    }
    this.articulosServicio.nuevo(producto).subscribe((res)=> {
      console.log('response received is ', res);
    });
  }
}
