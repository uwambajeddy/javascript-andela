
const primeArray= [1,2,3,4,5,6,7,8,9];
const newArray = [];

function primeSort(array){
    let isPrime= true;
    for(let a= 0; a < array.length;a++){
        if(array[a] !=1 && array[a]>1){
            for(let j= 2; j < array[a];j++){
                if(array[a] % j ==0){
                     isPrime = false; break; }
        }
        if(isPrime) newArray.push(array[a]);
        isPrime= true;
    }
    }
    return newArray;

}

console.log(primeSort(primeArray));