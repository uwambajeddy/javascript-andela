
const primeArray= [1,2,3,4,5,6,7,8,9];
let primeSort = (array) => array.filter( el => el % 2 !== 0);

console.log(primeSort(primeArray));