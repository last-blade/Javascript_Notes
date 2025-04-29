const marvelHeroes = ["Thor", "Ironman", "Captain America"];
const dcHeroes = ["Superman", "Wonder Woman", "Flash"];
//PUSH
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // OUTPUT: [ 'Thor', 'Ironman','Captain America',[ 'Superman', 'Wonder Woman', 'Flash' ]]; array or array ban gaya yeh toh, lekin mujhe toh bas elements chahiye thay dcHeroes wali array ke, for this use 'concat()'
console.log(marvelHeroes[3][0]); // OUTPUT: Superman
//CONCAT
const allHeroes = marvelHeroes.concat(dcHeroes);// it return new array or original array mein koi changes nahin karta, but push() method jo hai original array mein changes karta hai, isiliye mujhe newly returned array ko ek new variable mein store karana pada.
console.log("allheroes:", allHeroes); //OUTPUT: ["Thor", "Ironman", "Captain America, "Superman", "Wonder Woman", "Flash"]

//Spread Operator
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const allDigits = [...arr1, ...arr2];
console.log(allDigits); // OUTPUT: [1, 2, 3, 4, 1, 2, 3, 4]

//flat()
const anotherArray = [1, 2, 3, [4, 5, 6], 8, 9, [10, 11, [12, 13, 14, [15, 16, 17]]]]; //array ke andar array or unn array ke andar bhi array
const allInOne = anotherArray.flat(Infinity);
console.log(allInOne); //OUTPUT: [1,  2,  3,  4,  5,  6, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17]

//Array.isArray();
console.log(Array.isArray("Prashant")); //OUTPUT: false
console.log(Array.from("Prashant")); // OUTPUT: [p, r, a, s, h, a, n, t]; converting string into an array

console.log(Array.from({name: "Prashant"})); // OUTPUT: []; empty because, jab object ko array mein convert karte hain toh batana padta hai ki "key" ko array bana rahe ho yaa "value" ko convert kar rahe ho array mein.

console.log(Object.entries({ name: "Prashant" })); // Output: [ [ 'name', 'Prashant' ] ]; array of array returning

console.log(Object.keys({name: "Prashant"})); //OUTPUT: [ 'name' ]

//Array.of();
let a = 10;
let b = 20;
let c = 30;
let d = 40;

console.log(Array.of(a, b, c, d)); //OUTPUT: [ 10, 20, 30, 40 ]
