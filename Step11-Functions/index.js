function add(a, b){//yahan par parameters bolte hain jab function accept karta hai input ko
    let result  = a + b;
    return result;
}
const result = add(4, 4);
console.log(result); //"arguments" kehte hain function mein paas karte hain input 

//-----------------------------------------------------------------------------------------------------------------------------

function login(username){
    return `${username} logged in!`
}

console.log(login()); // OUTPUT: undefined logged in!; "undefined" isliye aaya kyoki maine function call karte time koi argument paas hi nahin kiya.

function random(username = "Prashant"){
    return `${username} logged in!`
}

console.log(random());