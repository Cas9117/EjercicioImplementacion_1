import { Persona } from "./persona.js";
import { Serie } from "./serie.js";
export class Actor extends Persona{
    actor:Serie[]

    constructor(actor:Serie[],nombre:string,foto:string,descripcion:string){
        super(nombre,foto,descripcion)
        this.actor = actor
    }
    mostrarDetalle(){
        console.log("Detalle del actor:")
        console.log("Nombre:",this.nombre)
        console.log("Foto:",this.foto)
        console.log("Descripción:",this.descripcion)
    }
    mostrarListadoActor(){
        console.log("Listado actores:",this.nombre)
    }
}