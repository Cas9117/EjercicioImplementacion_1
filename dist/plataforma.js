export class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
        serie.agregarPlataforma(this);
    }
    agregarPlan(plan) {
        this.planes.push(plan);
        plan.agregarPlataforma(this);
    }
    listarSeries() {
        this.series.forEach((value) => {
            console.log(value.nombre);
        });
    }
    detalleSerie(nombre) {
        let serie = this.series.find((value) => value.nombre === nombre);
        if (serie) {
            serie.mostrarDetalle();
        }
        else {
            console.log("No se encontró información de esa serie");
        }
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sitio web: ${this.sitioWeb}`);
        this.listarSeries();
    }
}
