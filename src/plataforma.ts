import { Plan } from "./plan.js"
import { Serie } from "./serie.js"

export class Plataforma{
    nombre:string
    sitioWeb:string
    planes:Plan[]
    series:Serie[]

    constructor(nombre:string,sitioWeb:string){
        this.nombre = nombre
        this.sitioWeb = sitioWeb
        this.planes = []
        this.series = []
    }
    agregarSerie(serie:Serie){
        this.series.push(serie)
        serie.agregarPlataforma(this)
    }
    agregarPlan(plan:Plan){
        this.planes.push(plan)
        plan.agregarPlataforma(this)
    }
    listarSeries(){
        this.series.forEach((value)=> {
            console.log(value.nombre)

        })
    }
    detalleSerie(nombre:string){
        let serie = this.series.find((value)=>value.nombre === nombre)
            if(serie){
                serie.mostrarDetalle()
            }else{
                console.log("No se encontró información de esa serie")
            }

        }

        mostrarDetalle(){
            console.log(`Nombre: ${this.nombre}`)
            console.log(`Sitio web: ${this.sitioWeb}`)
            this.listarSeries()
        }
    }
