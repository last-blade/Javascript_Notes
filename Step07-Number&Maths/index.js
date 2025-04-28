const score = 350;

console.log(score); // OUTPUT: 350

const balance = new Number(152);
console.log(balance); // Output: [Number: 152]

//toString();-----------------------------------------------------------------------------
console.log(balance.toString()); // Output: 152
console.log(balance.toString().length); // Output: 3

//toFixed();-------------------------------------------------------------------------------
console.log(balance.toFixed(1)); //OUTPUT: 152.0; "toFixed()" kaa usecase iska mostly e-commerce apps mein hota hai, like GST calculation ke baad price.
console.log(balance.toFixed(2)); //OUTPUT: 152.00   
console.log(balance.toFixed(3)); //OUTPUT: 152.000 
console.log(balance.toFixed()); //OUTPUT: 152

//toPrecision();----------------------------------------------------------------------------
const randomNumber = 155.8976
console.log(randomNumber.toPrecision(3));/*
1. toPrecision() method jo hai decimal se pehle ki values ko priority deta hai, iska matlab hai ki jaise oopar maine 
    'toPrecision' method mein "3" pass kiya hai, toh woh decimal se pehle ki value 3 digits ko check karega, or fir decimal 
    decimal ke baad jo value hai uske respect mein value increase kar dega, like 49 se zyada hai decimal ke baad ki value, 
    toh fir "+1" kar dega or '156' return kar dega and 49 yaa uske kam hai decimal ke baad ki value, toh fir 155 return 
    karega or decimal ke baad ki value ko remove kar dega.

2. Agar humein decimal (i.e., point or dot) ke baad ki value ko priority deni hai toh fir humein decimal se pehle
    jitni digits hain usse extra value pass karni hai "toPrecision" method mein, like oopar 155.8976 likha hua hai, toh decimal
    se pehle "3" digits hain, toh humein "toPrecision" method mein 3 se zyada pass karna hoga like 4 jaise hum pass karte
    hain, toh fir 155.9 print hoga, agar "5" pass karenge toh fir 155.90 print hoga, agar "6" pass karenge toh
    fir 155.898 print hoga.
*/

//toLocaleString();----------------------------------------------------------------------------
const rupees = 10000000;
console.log(rupees.toLocaleString()); // OUTPUT: 1,00,00,000; USA ke standards ke hisaab se commas lag jaate hain iss method se
console.log(rupees.toLocaleString('en-IN'));// OUTPUT: 1,00,00,000; INDIA ke standards ke hisaab se commas lag jaate hain iss method se

//Number---------------------------------------------------------------------------------------
console.log(Number.MAX_VALUE)//OUTPUT: 1.7976931348623157e+308; Yahi max value ho sakti hai Javascript mein Number ki
console.log(Number.MAX_SAFE_INTEGER); // OUTPUT: 9007199254740991

//---------------------------------------------------------MATHS------------------------------------------------------------------------


console.log(Math); // OUTPUT: Object
console.log(Math.abs(-4)); // OUTPUT: 4; -ve values ko positive mein convert karta hai bas

console.log(Math.round(4.4)); // OUTPUT: 4
console.log(Math.round(4.5)); // OUTPUT: 5

console.log(Math.ceil(4.2)); //OUTPUT: 5
console.log(Math.floor(4.8)); //OUTPUT: 4

console.log(Math.max(8, 8, 6, 5, 9, 4)); //OUTPUT: 9
console.log(Math.min(8, 8, 6, 5, 9, 4)); //OUTPUT: 4

console.log(Math.random()); //OUTPUT: 0 se 1 ke beech ki random value generate hoti hai bas
console.log(Math.floor((Math.random() * 10) + 1));

//Generating 4-digit OTP
for(let i = 1; i<=4; i++){
    console.log(`Digit ${i}: `, Math.floor((Math.random() * 10)));
}