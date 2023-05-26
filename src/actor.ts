import { Persona } from "./persona";
export class Actor extends Persona{
    actor:string[]

    constructor(actor:string[],nombre:string,foto:string,descripcion:string){
        super(nombre,foto,descripcion)
        this.actor = actor
    }
    
}