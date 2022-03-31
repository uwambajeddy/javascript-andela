
const primeArray= [1,2,2,3,4,5,6,7,8,9,35,36,37,38,39,41,500000000];

/* let primeSort = (array) => {
    let primeNumber = [], isPrime = true;
    let newArray = array.filter( el => el >1);

    newArray.map(el =>{
    for(let a=2; a < el;a++){

        el % a == 0 ? isPrime = false : isPrime;  
    }
    isPrime ? primeNumber.push(el) : "";
    isPrime = true;
});

return primeNumber;
}


console.log(primeSort(primeArray)); */



let primeSort = (array) => {
    let primeNumber = [], isPrime = true;
    array.filter( el => el >1 ).map(el =>{
    for(let a=2; a < el;a++){
       if( el % a == 0){
        isPrime = false;
        break;
       };  
    }
    isPrime ? primeNumber.push(el) : "";
    isPrime = true;
});

return primeNumber;
}


console.log(primeSort(primeArray));