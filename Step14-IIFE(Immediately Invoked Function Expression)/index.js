

(function calculate(){
    console.log("Calculated amount")
})();

/*
global scope ke pollution problem hoti hai kayi baar, toh jo uss global scope ke variables hain yaa jo bhi declarations hain wahan, 
pollution ko hatane ke liye hum IIFE kaa istemaal karte hain
*/


(function printName(name){
    console.log(`My name is ${name}`)
})("Prashant");
