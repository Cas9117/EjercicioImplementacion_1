import { Categoria } from "./categoria.js"
import { Director } from "./director.js"
import { Actor } from "./actor.js"
import { Episodio } from "./episodio.js"
import { Plataforma } from "./plataforma.js"

export class Serie {
    nombre:string
    imagen:string
    categorias:Categoria[]
    directores:Director[]
    actores:Actor[]
    episodios:Episodio[]
    plataformas:Plataforma[]
    

    constructor(nombre:string,imagen:string,categorias:Categoria[],directores:Director[],actores:Actor[],
        episodios:Episodio[],plataformas:Plataforma[]){
        this.nombre = nombre
        this.imagen = imagen
        this.categorias = categorias
        this.directores = directores
        this.actores = actores
        this.episodios = episodios
        this.plataformas = plataformas
        
    }
    mostrarListadoSeries(){
        console.log("Listado de series:",this.nombre)
       
    }
    mostarDetalleSerie(){
        console.log("Detalle de serie:")
        console.log("Imagen:",this.imagen)
        console.log("Categoria:",this.categorias)
        console.log("Director:",this.directores)
        console.log("Actores:",this.actores)
        console.log("Episodios:",this.episodios)
        console.log("Plataformas:",this.plataformas)
    }

}
    