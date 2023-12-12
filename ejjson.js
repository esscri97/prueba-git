let propPeli = new String(`{
    "nombre" : "Harry Potter",
    "actores" : "['act1', 'act2']",
    "director" : "David Escrivá"
}`);

class Pelicula{
    constructor(datos){
        this.peliJSON = JSON.parse(datos);
        this.nombre = this.peliJSON.nombre;
        this.actores = this.peliJSON.actores;
        this.director = this.peliJSON.director;
    }

    mostrarDatos(){
        console.log(`Nombre: ${this.nombre} | Actores: ${this.actores} | Director: ${this.director}`);
    }
}

harryPotter = new Pelicula(propPeli);
harryPotter.mostrarDatos();