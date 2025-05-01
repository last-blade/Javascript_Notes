
// rest(...) operator-> yahan par isko rest operator bolte hain
function printValues(a, b, ...extraValues) {
    return {a, b, extraValues}
}

console.log(printValues(100, 200, 300, 400, 500, 600)); // OUTPUT: { a: 100, b: 200, extraValues: [ 300, 400, 500, 600 ] }
/*
function mein 6 arguments pass kiye hain, or function kewal 3 parameters hi accept kar raha hai, toh shuru ke 2 
arguments (100, 200) toh "a & b" mein store ho jaayenge or baaki ke bache huye arguments (300,400....600) jo hain
rest operator(i.e., extraValues) mein store ho jaayenge as an Array. 
*/

//objects in function----------------------------------------------------------------------------------------------------------------------

const user = {
    name: "prashant",
    age: 18,
}

function handleObject(myObj){
    console.log(`my name is ${myObj.name} and age is ${myObj.age}`)
}

handleObject(user); //OUTPUT: my name is prashant and age is 18
        //OR
handleObject({name: "prashant", age: 18})

