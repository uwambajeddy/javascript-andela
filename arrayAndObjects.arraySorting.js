const array = [1,10,4,7,8,56];

function sorter(array) {
  const newArray = [];
  const isNotPrime = [];
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
  
  for(let i =0; i <  newArray.length; i ++) {
      array[i] % 2 == 0 ? isNotPrime.unshift(newArray[i]) : '';
  }
  
    return isNotPrime; 
  }

console.log(  sorter(array));