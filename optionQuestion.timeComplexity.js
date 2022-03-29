let array = [3,1,3,4,4,5,3,5,3,3,3,6,3];
let solveValues = [];

for (let i =  array.length; i >=0; i --) {
 if(!solveValues.includes(array[i])){
     solveValues.push(array[i]);
   let valueLength =  array.filter(el => el == array[i]).length;
   if(valueLength >= array.length/2){
       return console.log("The array contains a majority element.");
   }
 }
}
return console.log("The array does not contain a majority element.")