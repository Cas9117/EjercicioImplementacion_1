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
    

    constructor(nombre:string,imagen:string){
        this.nombre = nombre
        this.imagen = imagen
        this.categorias = []
        this.directores = []
        this.actores = []
        this.episodios = []
        this.plataformas = []
        
    }
    
    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
    }
    
    agragarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarSerie(this)
    }
    agregarDirector(director:Director){
        this.directores.push(director)
        director.agregarSerie(this)
    }

    agregarActor(actor:Actor){
        this.actores.push(actor)
        actor.agregarSerie(this)
    }
    agregarEpisodio(episodio:Episodio){
        this.episodios.push(episodio)
    }
    mostrarDetalle(){
        console.log(`Titulo: ${this.nombre}`)
        console.log(`Imagen: ${this.imagen}`)
        this.listarCategorias()
    }
    listarCategorias(){
        console.log(`Titulo:`)
        this.categorias.forEach((categoria) =>{
            console.log(categoria)
        })
    }
    listarActores(){
        this.actores.forEach((value)=>{
            value.mostrarDetalle()
        })
    }
    listarDirectores(){
        this.directores.forEach((value)=>{
            value.mostrarDetalle()
        })
    }
    listaPlataformas(){
        this.plataformas.forEach((value) => {
            value.mostrarDetalle()
        })
    }

}
    