import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(actor, nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.actor = actor;
    }
    mostrarDetalle() {
        console.log("Detalle del actor:");
        console.log("Nombre:", this.nombre);
        console.log("Foto:", this.foto);
        console.log("Descripción:", this.descripcion);
    }
    mostrarListadoActor() {
        console.log("Listado actores:", this.nombre);
    }
}
