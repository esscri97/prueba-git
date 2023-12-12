function CuentaBancaria(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    this.retirarDinero = function(dinero){
        this.saldo -= dinero;
    }

    this.ingresarDinero = function(dinero){
        this.saldo += dinero;
    }

    this.mostrarDatos = function(){
        console.log(`El usuario ${this.nombre} tiene ${this.saldo}€ actualmente.`);
    }
}

let david = new CuentaBancaria("David", 1000);
david.ingresarDinero(5000);
david.retirarDinero(3000);
david.mostrarDatos();