import { Persona } from "./persona.js";
import { Serie } from "./serie.js";

export class Director extends Persona{
    series:Serie[]
    constructor(nombre:string,foto:string,descripcion:string,series:Serie[]){
    super(nombre,foto,descripcion)
    this.series = series
    }

    mostrarDetalle(){
        console.log("Detalle del director:")
        console.log("Nombre:",this.nombre)
        console.log("Foto:",this.foto)
        console.log("Descripción:",this.descripcion)
    }
    mostrarListadoDirector(){
        console.log("Listado Director:",this.nombre)

    }
}