import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(nombre, foto, descripcion, series) {
        super(nombre, foto, descripcion);
        this.series = series;
    }
    mostrarDetalle() {
        console.log("Detalle del director:");
        console.log("Nombre:", this.nombre);
        console.log("Foto:", this.foto);
        console.log("Descripción:", this.descripcion);
    }
    mostrarListadoDirector() {
        console.log("Listado Director:", this.nombre);
    }
}
