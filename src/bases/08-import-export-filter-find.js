import heroes, { owners } from "../data/heroes";


//import { heroes } from './data/heroes';
//console.log(heroes);
//console.log(owners)

export const getHeroeById = (id) => {
    return heroes.find(superheroe => superheroe.id === id);
}

//console.log(getHeroeById(2))


//find no srive aqui por que solo regresa 1, cuando son mas elementos usar filter
export const getHeroeByOwner = (owner) => {
    return heroes.filter(superheroe => superheroe.owner === owner);
}

//console.log('DC', getHeroeByOwner('DC'));
