//Destructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes

console.log(p3);


const retornaArreglo = () => {

    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea 
//1. el primer valor del arr se llamarà nombre 
//2. se llamará setNombre
const returnValor = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = returnValor('Daniel');
console.log(nombre);
setNombre();