//for-of LOOP

const arr = [1,5,3,4,5];

for(const i of arr){
    console.log(i);//1 2 3 4 5
}

//----------------------------------------------

const str = "Prashant";
for(const letter of str){
    console.log(letter); // P r a s h a n t
}

//---------------------------------------------
/*
~ Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
~ A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. 
~ Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into 
~ the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).
*/
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// output: 97

console.log(map1.size);
// output: 3

map1.delete("b");

console.log(map1.size);
// output: 2

//-----------------------------------------------

const map = new Map();

map.set("IN", "India");
map.set("GE", "Germany");
map.set("FR", "France");
map.set("EN", "England");

console.log(map.get("IN")); //OUTPUT: India
console.log(map);
/*
OUTPUT: 
    Map(4) {
        'IN' => 'India',
        'GE' => 'Germany',
        'FR' => 'France',
        'EN' => 'England'
    }
*/

map.set("IN", "India");// yeh same key-value pair hain, toh dobara se add nahin honge yeh, map mein duplicate nahin ho sakta content, but yeh error bhi nahin dega, map jo hai autmatically unique key-value pairs ko hi preserve rakhta hai, agar duplicate values insert karoge toh fir error nahin aayegi.
console.log(map);
/*
OUTPUT: 
    Map(4) {
        'IN' => 'India',
        'GE' => 'Germany',
        'FR' => 'France',
        'EN' => 'England'
    }
*/

for(const [key, value] of map){
    console.log(key, ":", value);
    /*
        OUTPUT:
            IN : India
            GE : Germany
            FR : France
            EN : England
    */
}

//--------------------------------------------------Iterating object using for-of loop--------------------------------------------

const myObj = {
    name: "Prashant",
    age: 18,
}

// for(const [key, value] of myObj){
//     console.log(key, ":", value); //OUTPUT: TypeError: myObj is not iterable
//     //for-of loop se hum object ko iterate nahin kar sakte. For-in loop se kar sakte hain
// }

//--------------------------------------------------Iterating object using for-in loop--------------------------------------------

for (const key in myObj) {
    console.log(key);
    //OUTPUT: name age; Kewal 'keys' print huyi hain, values print nahin huyi

    console.log(key, ":", myObj[key]); // ab 'key' and 'value' dono print ho gayi hain, 'myObj[key]' issey value print huyi hai
    //OUTPUT: name : Prashant
        //    age : 18
}

//--------------------------------------------------Iterating ARRAY using for-in loop--------------------------------------------

const num = ["a","b","c","d"];

for(const i in num){
    console.log(i);// 0 1 2 3; for in loop jo hai Array ke indexes ko print kar raha hai

    console.log(num[i]); // a b c d; ab array ke elements ko print kar raha hoon
}

//--------------------------------------------------Iterating ARRAY using for-each loop--------------------------------------------

const languages = ["Hindi", "English", "German"];

languages.forEach((item) => {
    console.log(item);
});

//-----------------------------------------------------------

function printLanguages(item){
    console.log(item)
}

languages.forEach(printLanguages);// function kaa reference dena hai yahan, execute nahin karna hai khud se 'printLanguages();'

//-------------------------------------------------------------

languages.forEach((item, index, myArr) => {// for-each loop mein jo callback function hota hai uske andar hum array ke elements, index and poori array ko access kar sakte hain, yeh cheez kewal for-each loop ke paas mein hi hai.
console.log(item, index, myArr);
/*
    OUTPUT:
        Hindi 0 [ 'Hindi', 'English', 'German' ]
        English 1 [ 'Hindi', 'English', 'German' ]
        German 2 [ 'Hindi', 'English', 'German' ]
*/
});

//-------------------------------------------------------------

const user = [
    {
        name: "Prashant",
        age: 18,
    },

    {
        name: "SRK",
        age: 18,
    }
];

user.forEach((item) => {
    console.log(item.name); // OUTPUT: Prashant SRK
});