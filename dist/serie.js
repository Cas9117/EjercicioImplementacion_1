export class Serie {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = [];
        this.directores = [];
        this.actores = [];
        this.episodios = [];
        this.plataformas = [];
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    agragarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarSerie(this);
    }
    agregarDirector(director) {
        this.directores.push(director);
        director.agregarSerie(this);
    }
    agregarActor(actor) {
        this.actores.push(actor);
        actor.agregarSerie(this);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    mostrarDetalle() {
        console.log(`Titulo: ${this.nombre}`);
        console.log(`Imagen: ${this.imagen}`);
        this.listarCategorias();
    }
    listarCategorias() {
        console.log(`Titulo:`);
        this.categorias.forEach((categoria) => {
            console.log(categoria);
        });
    }
    listarActores() {
        this.actores.forEach((value) => {
            value.mostrarDetalle();
        });
    }
    listarDirectores() {
        this.directores.forEach((value) => {
            value.mostrarDetalle();
        });
    }
    listaPlataformas() {
        this.plataformas.forEach((value) => {
            value.mostrarDetalle();
        });
    }
}
