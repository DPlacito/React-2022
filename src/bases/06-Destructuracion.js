//Desestructuracion 
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// Entre llaves saco el atributo que quiero del objeto en cuestion
// nombre : nombre2, extraigo el valor de nombre y lo renombro
const { nombre: nombre2, clave, edad } = persona;

//console.log(nombre2);
//console.log(edad);
//console.log(clave);


const retornaPersona = ({ nombre, edad, rango = 'Capitan', clave }) => {

    // console.log(nombre, edad, rango = 'Capitan')

    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, años, latlng: { lat, lng } } = retornaPersona(persona);
//extraer objetos anidados y convertirlos en constantes


console.log(nombreClave, años);
console.log(lat, lng);