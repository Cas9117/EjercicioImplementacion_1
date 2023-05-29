import { Categoria } from "./categoria.js"
import { Director } from "./director.js"

export class Serie {
    nombre:string
    imagen:string
    categorias:Categoria[]
    directores:Director[]

    constructor(nombre:string,imagen:string,categorias:Categoria[],directores:Director[]){
        this.nombre = nombre
        this.imagen = imagen
        this.categorias = categorias
        this.directores = directores
    }
}