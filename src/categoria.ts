import { Serie } from "./serie.js"
export class Categoria{
    nombre:string
    categorias:Serie[]

    constructor(nombre:string,categorias:Serie[]){
        this.nombre = nombre
        this.categorias = categorias
    }
    listadoDeCategorias(){
        console.log("Listado de categorias:")
        console.log(this.nombre)
    }
}