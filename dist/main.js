import { Actor } from "./actor.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";
//Creacción de plataformas
let netflix = new Plataforma("Nteflix", "www.netflix.com");
let amazon = new Plataforma("Amazon", "www.amazon.com");
let planBasicoNetflix = new Plan(10000);
let planPremiumNetflix = new Plan(25000);
let planBasicoAmazon = new Plan(20000);
let planPremiumAmazon = new Plan(30000);
netflix.agregarPlan(planBasicoNetflix);
netflix.agregarPlan(planPremiumNetflix);
amazon.agregarPlan(planBasicoAmazon);
amazon.agregarPlan(planPremiumAmazon);
// 8.Crear una nueva serie
let serie1 = new Serie("serie1", "serie1.jpg");
let serie2 = new Serie("serie2", "serie2.jpg");
// 9.Crear una nueva categoria
let categoriaAccion = new Categoria("Acción");
let categoriaDrama = new Categoria("Drama");
let categoriaRomanca = new Categoria("Romance");
// Crear Episodios
new Episodio("Episodio 1", "Primer episodio serie 1", 20, serie1);
new Episodio("Episodio1", "Primer episodio serie 2 ", 30, serie2);
// Asiganar categorias
serie1.agragarCategoria(categoriaAccion);
serie2.agragarCategoria(categoriaDrama);
// 10.Crear un nuevo actor
let actor1 = new Actor("Actor 1", "Actor1.jpg", "Descripción actor 1");
let actor2 = new Actor("Actor 2", "Actor2.jpg", "Descripción actor 2");
// 11.Crear un nuevo director
let director1 = new Director("Director1", "Diretor1.jpg", "Descripción deirectoe 1");
let director2 = new Director("Director2", "Diretor2.jpg", "Descripción deirectoe 2");
//Asiganar actores y directores
serie1.agregarActor(actor1);
serie1.agregarDirector(director1);
serie2.agregarActor(actor2);
serie2.agregarDirector(director2);
// Agregar series a la plataforma 
netflix.agregarSerie(serie1);
amazon.agregarSerie(serie2);
console.log(netflix);
console.log(amazon);
// Ejecución 
// 1.Mostrar listado de series. 
netflix.listarSeries();
amazon.listarSeries();
// 2.Mostrar detalle de una serie.
serie1.mostrarDetalle();
serie2.mostrarDetalle();
// 3.Mostrar el listado de categorías
serie1.listarCategorias();
serie2.listarCategorias();
// 4.Mostrar el listado de directores y actores de una serie
serie1.listarActores();
serie1.listarDirectores();
// 5.Mostrar el detalle de un director y de un actor
actor1.mostrarDetalle();
director1.mostrarDetalle();
// 6.Mostrar el listado de las plataformas
serie1.listaPlataformas();
serie2.listaPlataformas();
// 7.Mostrar detalle de una plataforma
netflix.mostrarDetalle();
amazon.mostrarDetalle();
