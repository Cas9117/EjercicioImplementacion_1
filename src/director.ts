import { Persona } from "./persona.js";

export class Director extends Persona{

    constructor(nombre:string,foto:string,descripcion:string){
    super(nombre,foto,descripcion)
    }
}