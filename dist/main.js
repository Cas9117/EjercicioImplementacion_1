import { Actor } from "./actor.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";
// Datos Base
const plataforma1 = new Plataforma("Netflix", "Nectflix.com", []);
const plataforma2 = new Plataforma("HBO", "HBO.com", []);
const actor1 = new Actor([], "Jack", "Jack JPG", "Todos cantando Hiohoo");
const actor2 = new Actor([], "Luka", "Luka JPG", "Hemos de morir");
const director1 = new Director("Laura", "Laura JPG", "La mejor", []);
const director2 = new Director("Cas", "Cas JPG", "Crazy", []);
const categoria1 = new Categoria("Acción", []);
const categoria2 = new Categoria("Drama", []);
const serie1 = new Serie("Sere Mejor", "Sere Mejor JPG", [categoria1], [director1], [actor1], [], [plataforma1]);
const serie2 = new Serie("Puedo ser Mejor", "Puedo ser Mejor JPG", [categoria2], [director2], [actor2], [], [plataforma2]);
//categoria2.categorias.push(serie2)
//categoria1.categorias.push(serie1)
//director1.series.push(serie1)
//director2.series.push(serie2)
// Ejecución 
// 1. Mostrar listado de series. 
serie1.mostrarListadoSeries();
serie2.mostrarListadoSeries();
// 2. Mostrar detalle de una serie.
serie1.mostarDetalleSerie();
// 3. Mostrar el listado de categorías
categoria1.listadoDeCategorias();
categoria2.listadoDeCategorias();
// 4.Mostrar el listado de directores y actores de una serie
director1.mostrarListadoDirector();
director2.mostrarListadoDirector();
actor1.mostrarListadoActor();
actor2.mostrarListadoActor();
// 5.Mostrar el detalle de un director y de un actor
director1.mostrarDetalle();
actor1.mostrarDetalle();
// 6.Mostrar el listado de las plataformas
plataforma1.mostrarListadoPlataformas();
plataforma2.mostrarListadoPlataformas();
// 7. Mostrar detalle de una plataforma
plataforma1.mostrarDetalle();
// 8.Crear una nueva serie
const serie3 = new Serie("Nueva serie", "Nueva serie JGP", [categoria1], [director1], [actor1], [], [plataforma1]);
console.log("Nueva serie:", serie3);
// 9. Crear una nueva categoria
const categoria3 = new Categoria("Romance", []);
console.log("Nueva categoria:", categoria3);
// 10.Crear un nuevo actor
const actro3 = new Actor([], "nuevo actor", "nuevo actor JPG", "Descripción del nuevo actor");
console.log("El nuevo actor:", actro3);
// 11.Crear un nuevo director
const director3 = new Director("nuevo director", "foto nuevo director", "descripción nuevo director", []);
console.log(director3);
