class Aula{
    constructor(alumnos){
        this.alumnos = alumnos;
    }

    mostrarInfo(){
        console.log(`Este aula tiene ${this.alumnos} alumnos`);
    }
}

class Musica extends Aula{
    constructor(alumnos, materia){
        super(alumnos);
        this.materia = materia;
    }

    mostrarInfo(){
        console.log(`En este aula se imparte ${this.materia} y tiene ${this.alumnos} alumnos`);
    }
}

let musica = new Musica(25, "música");
musica.mostrarInfo();