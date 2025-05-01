const user = {
    name: "Prashant",
    age: 18,

    message: function(){
        console.log(`Hello ${this.name}`);
        console.log(this); //OUTPUT: { name: 'Prashant', age: 18, message: [Function: message] }, this is referring to the above object
    }
}

user.message(); //OUTPUT: Hello Prashant
user.name = "SRPK";
user.message(); //OUTPUT: Hello SRPK

console.log(this); //OUPTUT: {}; 'this' is referring to node environment, that is why empty object

//-----------------------------------------------------------------------------------------------------------------------------------

function print(){
    console.log(this);
    //JAB main 'this' ko function ke andar print kara raha hoon toh bhot saari values mil rahi hain, lekin jab oopar maine func. ke bahar print karya tha toh fir empty {} object aaya tha.
    /*OUTPUT:- 
        <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Function: structuredClone],
        atob: [Function: atob],
        btoa: [Function: btoa],
        performance: [Getter/Setter],
        fetch: [Function: fetch],
        navigator: [Getter],
        crypto: [Getter]
        }
    */

    let name = "prashant";
    console.log(this.name); // OUTPUT: undefined
}
print();

//-----------------------------------------------------Arrow functions---------------------------------------------------------------

const addValues = (a, b) => {
    return a + b; // iss arrow fun. ko explicit return bolte hain kyoki ismein return statement lagani padti hai
}

console.log(addValues(3, 5));// 8

            //OR

const add = (a, b) => (a + b); //IMPLICIT RETURN arrow func. bolte hain neeche wale or iss wale ko, kyoki return lagana nahin padta inn dono mein

            //OR
const addVal = (a, b) => a + b;            