import { Persona } from "./persona";
export class Actor extends Persona{

    constructor(nombre:string,foto:string,descripcion:string){
        super(nombre,foto,descripcion)
    }
}