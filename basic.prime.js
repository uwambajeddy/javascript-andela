
const primeArray= [1,2,3,4,5,6,7,8,9];
const newArray = [];

function primeSort(array){
    for(let a= 0; a <= array.length-1;a++){
        array[a] % 2 !== 0 ? newArray.push(array[a]) : '';
    }

    return newArray;

}

console.log(primeSort(primeArray));