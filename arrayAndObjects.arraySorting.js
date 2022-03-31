const array = [1,10,4,7,8,56];

function sorter(array) {
  const newArray = [];
  let min = array[0],max = array[0],pos = 0;

   for(let j=0; j< array.length;j++){
     if(max < array[j]){
       max = array[j];
     }
   }
   
   for(let b =0; b <  array.length; b++) {
     
     for(let a=0; a< array.length;a++){
       if(array[a] !== null){

         if(min > array[a]){
           min = array[a];
           pos = a;
          }
          
        }
     }

     array[pos] = null;
     newArray[b] = min;
     min = max;
  }
  
   

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
return primeSort(newArray);
  }

console.log(  sorter(array));