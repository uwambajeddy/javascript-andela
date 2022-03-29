const array = [1,10,4,7,8,56];
const newArray = [];

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

    for (var i =  array.length; i >=0; i --) {
        array[i] % 2 == 0 ? newArray.push(array[i]) : '';
    }

  
    return newArray;
  }

console.log(  sorter(array));