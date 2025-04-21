/*
-> Stack(for primitive datatypes)
-> Heap(for Non-primitive datatypes(i.e. refernce type))
*/

//➡️ Stack(for primitive datatypes)---------------------------------------------------------------------------------------------------
let name = "prashant";
let anotherName = name;

anotherName = "SRPK"

console.log(anotherName) //OUTPUT: SRPK

/*
--> Since oopar jitne bhi variables hain woh sab primitive datatypes hain, toh fir stack memory mein store hoga data, and jab main
kisi ek variable ko doosre variable mein assign karta hoon toh fir uss time par copy create hoti hai, like a = 10; b = a; toh yahan par
'b' ke liye ek nayi memory allocate huyi hai jismein "10" assign hua hai, toh agar main b = 12; karunga toh fir 'a' ki value intact rahegi
and kewal 'b' ki value hi 10 se 12 hogi naa ki 'a' ki hogi, since yahan par new memory allocate huyi hai 'b' ke liye and ab 'a' kaa kuch
lena dena nahin hai 'b' se.
*/

//➡️ Heap(for Non-primitive datatypes(i.e. refernce type))-----------------------------------------------------------------------------

let myObj = {
    name: "prashant",
    age: 100,
}

let copyObj = myObj;

copyObj.name = "SRPK";

console.log(myObj.name);

/*
--> oopar "myObj" naam kaa object create kiya hua hai, and then "copyObj" variable mein "myObj" object ko assign kar diya hai,
and yahan par assign karte time mein "myObj" object ki koi copy nahin banegi, balki "copyObj" mein jo hai kewal "myObj" kaa refernce
store hoga, toh ab dono hi object jo hain same memory location ko target kar rahe hain, toh fir kisi bhi object mein changes
karenge toh fir woh changes dono hi objects mein reflect honge.

Remember: object ke variable names "stack" memory mein store honge and jo stored data hai variable mein, woh heap mein store 
        hoga i.e., {name: "prashant", age: 100} and yeh variable name jo hai heap memory mein jahan par data store hai, uss location 
        ke address ko refer karega.
*/