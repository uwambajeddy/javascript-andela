const string = "radar";
let palindromeChecker =(string) =>  string.split('').reverse().join('') === string;

console.log(palindromeChecker(string));