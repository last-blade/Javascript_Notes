const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

        if(!error){
            resolve({username: "prashant", age: 18}) // inn resolve and reject method mein hum string, object, array, etc kuch bhi pass kar sakte hain
        }

        else{
            reject("Error: something went wrong!")
        }
    }, 1000);
})
.then((userObj) => {// agar promise resolve hoga toh fir jo oopar argument pass kiya hai 'resolve' method ke andar usko yahan iss tareeke se accept kar sakte hain
    console.log(userObj);
    return userObj.age;
})
.then((userAge) => {
    console.log("Age is:", userAge);
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Promise executed either resolved or rejected")
});

/*
    OUTPUT:
        { username: 'prashant', age: 18 }
        Age is: 18
        Promise executed either resolved or rejected
*/

//-------------------------------now handling Promise w/o '.then' or '.catch', i will use async-await-----------------------------------------

const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        
        if(!error){
            resolve({username: "Prashant", age: 18})
        }

        else{
            reject("Error: Something went wrong")
        }
    }, 1000);
})

async function consumeRandomPromise() {
    try {
        const response = await randomPromise; // promise ek object return karta hai, toh fir oopar jo variable "randomPromise" mein jo promise ko hold kiya hai woh object store ho raha hai iss variable mein, toh yeh ek objetc hai toh fir hum yahan par "await randomPromise()" iss tareeke se function call nahin karenge, kyoki owh ek object hai
        console.log(response)
    } catch (error) {
        console.log(error)   
    }
}

consumeRandomPromise();// OUTPUT: Error: Something went wrong