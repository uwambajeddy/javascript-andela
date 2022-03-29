const array = ["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"];
const nestedObject = {};

let objectFunction =(array) => { 
    array.map(el =>nestedObject[el.split(" ")[0]]= { second_name: el.split(" ")[1].slice(0,-1), age: el.split(" ")[2]} )
    return nestedObject;
};

console.log(objectFunction(array));