import { Plan } from "./plan.js"
export class Plataforma{
    nombre:string
    sitioWeb:string
    precio:Plan[]

    constructor(nombre:string,sitioWeb:string,precio:Plan[]){
        this.nombre = nombre
        this.sitioWeb = sitioWeb
        this.precio = precio
    }
    mostrarListadoPlataformas(){
        console.log("Listado de plataformas:",this.nombre)
    }
    mostrarDetalle(){
        console.log("Detalle del plataforma:")
        console.log("Nombre:",this.nombre)
        console.log("Foto:",this.sitioWeb)
        console.log("Descripción:",this.precio)
    }
}