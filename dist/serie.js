export class Serie {
    constructor(nombre, imagen, categorias, directores, actores, episodios, plataformas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = categorias;
        this.directores = directores;
        this.actores = actores;
        this.episodios = episodios;
        this.plataformas = plataformas;
    }
    mostrarListadoSeries() {
        console.log("Listado de series:", this.nombre);
    }
    mostarDetalleSerie() {
        console.log("Detalle de serie:");
        console.log("Imagen:", this.imagen);
        console.log("Categoria:", this.categorias);
        console.log("Director:", this.directores);
        console.log("Actores:", this.actores);
        console.log("Episodios:", this.episodios);
        console.log("Plataformas:", this.plataformas);
    }
}
