const persona = {
nombre: 'Tony',
apellido: 'Stark',
edad: 45,
direccion: {
    ciudad: 'New York',
    zipCode: 2323232,
    lat: 233.3232
},
}



const persona2 = { ...persona };  //Clonar un Objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);