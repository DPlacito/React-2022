// Funciones en JS

//Funciones deben de tener declaradas unas cosntantes
const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//Funciones como se usan normalmente
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

//Funciones que sol otienen un return
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Danielito`;

console.log(saludar4());


const getUser = () =>
({

    uid: 'ABC123',
    username: 'El_Papi1502',
});

const user = getUser();


console.log(user);

//Tareea
// 1- Tranfdformar a funcion de flecha
// 2- Tiene que retornar un objeto implicito 
// 3- Pruebas
const getUsuarioActivo = (nombre) =>
({
    uid: 'ABC123',
    username: 'Daniel',
})


const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);






