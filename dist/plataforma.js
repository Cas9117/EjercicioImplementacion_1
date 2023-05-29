export class Plataforma {
    constructor(nombre, sitioWeb, precio) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.precio = precio;
    }
    mostrarListadoPlataformas() {
        console.log("Listado de plataformas:", this.nombre);
    }
    mostrarDetalle() {
        console.log("Detalle del plataforma:");
        console.log("Nombre:", this.nombre);
        console.log("Foto:", this.sitioWeb);
        console.log("Descripción:", this.precio);
    }
}
