import { Persona } from "./persona.js";
import { Serie } from "./serie.js";

export class Director extends Persona{
    series:Serie[]

    constructor(nombre:string,foto:string,descripcion:string){
    super(nombre,foto,descripcion)
    this.series = []
    }

    agregarSerie(serie:Serie){
        this.series.push(serie)
    }
    
}