import { Categoria } from "./categoria.js"

export class Serie {
    nombre:string
    imagen:string
    categorias:Categoria[]

    constructor(nombre:string,imagen:string,categorias:Categoria[]){
        this.nombre = nombre
        this.imagen = imagen
        this.categorias = categorias
    }
}