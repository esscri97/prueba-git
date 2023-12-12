let fecha = new Date();
let horaActual = fecha.getHours();

if(horaActual > 6 && horaActual < 12){
    console.log(`Son las ${horaActual}... ¡Buenos días!`);
}else if(horaActual > 12 && horaActual < 22){
    console.log(`Son las ${horaActual}... ¡Buenas tardes!`);
}else{
    console.log(`Son las ${horaActual}... ¡Buenas noches!`);
}