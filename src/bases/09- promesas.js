// Promesas en JS
import heroes, { owners } from "./data/heroes";
import { getHeroeById } from '../bases/08-import-export-filter-find';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         //reject(p1);
//         resolve(p1);
//     }, 2000); //cantidad de milisegundos para ejecutar el setTimeOut

// });

// promesa.then((heroe) => {
//     console.log(heroe)
// })
//     .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            //reject(p1);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se encontro el heroé');
            }
        }, 2000); //cantidad de milisegundos para ejecutar el setTimeOut

    });

}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)