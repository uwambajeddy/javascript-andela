const array = [1,2,10,4,7,8,56,9,10,17,13,11];

function sorter(array) {

  //sorting array in ascending order
  const newArray = [];
  let min = array[0],max = array[0],pos = 0;
  
  //find the maxmum number
  for(let j=0; j< array.length;j++){
    if(max < array[j]){
      max = array[j];
     }
    }
   /*  --------------------- */
   
   //loop that will help to srot array
    for(let b =0; b <  array.length; b++) {
      
      //find the minmum number
      for(let a=0; a< array.length;a++){
      if(array[a] !== null){
          
          if(min > array[a]){
            min = array[a];
           pos = a;
          }
          
        }
      }
      /*  --------------------- */
     
     array[pos] = null;
     newArray[b] = min;
     min = max;
    }

    /* ------------------------------------- */
    
    
   //removing prime number 
    let primeSort = (array) => {
      let primeNumber = [], isPrime = false;
    array.filter( el => el >1 ).map(el =>{
      if(el === 2) isPrime = false;
      for(let a=2; a < el;a++){
        
        if( el % a == 0){
          isPrime = true;
          break;
        };  
      }
      isPrime ? primeNumber.push(el) : "";
      isPrime = false;
});

return primeNumber;
}
/* ------------------------------------- */

//sorting in descinding order

const primeArray =  primeSort(newArray);
const descArray = [];
primeArray.map(el=> descArray.unshift(el));
/* ------------------------------------- */

 return descArray;

 
}


console.log( sorter(array) );