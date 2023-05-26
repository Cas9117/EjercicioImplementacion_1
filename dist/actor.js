import { Persona } from "./persona";
export class Actor extends Persona {
    constructor(actor, nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.actor = actor;
    }
}
