import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
