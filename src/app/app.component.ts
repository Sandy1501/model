import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Usando modelos en angular';

  public inventario : any = [
    {id : 1, nombre : "Pantalon", precio : 250},
    {id : 2, nombre : "Chamarra", precio : 500}
  ];

  public formulario : any = {
    id: null,
    nombre : null, 
    precio : null
  }
  public seleccionar(articulos : any) : void{
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }

  public eliminar(id : number) : void {
    for (let index = 0; index < this.inventario.length; index++){
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert("Eliminado con exito!!");
        break;
      }
    }

  }

  public agregar() : void {
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    };

    let repetido_id: number = 0;
    for (let index = 0; index < this.inventario.length; index++) {
      if (parseInt(this.inventario[index].id) == parseInt(datoNuevo.id)) {
        repetido_id = 1;
        break;  
      }else{

      }  
    }
    if (repetido_id == 1) {
      alert("Ya existe este ID");
    }else{
      if(datoNuevo.id == null && datoNuevo.nombre == null || datoNuevo.nombre == "" && datoNuevo.precio == null){
        alert("Recuerda que tienes que llenar todos los campos");
      }else if(datoNuevo.id == null){
        alert("Tu campo id esta vacio");
      }else if(datoNuevo.nombre == null || datoNuevo.nombre == ""){
        alert("Tu campo de nombre esta vacio");       
      }else if(datoNuevo.precio == null){
        alert("Tu campo de precio esta vacio");
      }else{
        this.inventario.push(datoNuevo);
        alert("Tu registro a sido agregado con exito!!");
        this.limpiar();
      }
    }
  }

  public editar() : void {
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    }
    for (let index = 0; index < this.inventario.length; index++){
      if(this.inventario[index].id == this.formulario.id){
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
      }
    }
    if(datoNuevo.id == null && datoNuevo.nombre == null || datoNuevo.nombre == "" && datoNuevo.precio == null){
      alert("No has seleccionado ningun registro");
      }else if(datoNuevo.id == null){
        alert("Tu campo id esta vacio");
      }else if(datoNuevo.nombre == null || datoNuevo.nombre == ""){
        alert("Tu campo de nombre esta vacio");       
      }else if(datoNuevo.precio == null){
        alert("Tu campo de precio esta vacio");
        alert("Modificado con exito!!");
        this.limpiar();
    }
  }

  public limpiar() : void {
    this.formulario.id = "";
    this.formulario.nombre = "";
    this.formulario.precio = "";
  }
}
