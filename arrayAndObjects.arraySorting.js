const array = [1,10,4,7,8,56];

function sorter(array) {
    var swap,swapped,done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
         swap = array[i];
         array[i] = array[i-1];
         array[i-1] = swap;
         swapped =1;
        }
        if(swapped ==0){
            done= true;
        }
      }
    }
  
    return array;
  }

console.log(  sorter(array));