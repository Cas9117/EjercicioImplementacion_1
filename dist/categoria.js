export class Categoria {
    constructor(nombre, categorias) {
        this.nombre = nombre;
        this.categorias = categorias;
    }
    listadoDeCategorias() {
        console.log("Listado de categorias:");
        console.log(this.nombre);
    }
}
