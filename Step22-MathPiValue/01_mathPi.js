/*
Ques: kya hum 'Pi' ki predefined value 3.14 ko change kar sakte hain ?
Ans: NO

see the proof below:
*/

const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // 'Math' object ke andar "PI" property ko check kar rahe hain ki yeh change ho sakti hai yaa nahin, toh output neeche print karaya hua hai.
console.log(piDescriptor);
/*
OUTPUT:
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }

    'writable' false likha hua hai output mein, iska matlab hai ki hum PI ki value ko change nahin kar sakte hain.
    aise hi hum apne custom objects ki properties ko bhi check kar sakte hain, see below:
*/

const user = {
    username: "Prashant",
    age: 18,
    email: "prashant@google.com"
}

const userDescriptor = Object.getOwnPropertyDescriptor(user, "email");
console.log(userDescriptor);
/*
OUTPUT:
    {
        value: 'prashant@google.com',
        writable: true,
        enumerable: true, // enumerable kaa matlab iteration hota hai, i.e. loop laga sakte hain
        configurable: true
    }

    "email" property jo hai user object ke andar, usko hum change kar sakte hain, writable true likha hua hai oopar output mein.
    agar hum isko false karde toh fir koi bhi email ko change nahin kar sakta hai.
*/

Object.defineProperty(user, "email", {
    writable: false,
})

user.email = "srk@google.com"
console.log(user.email); /*OUTPUT: prashant@google.com; user object mein "email" property change hi nahin ho paa rahi hai ab, kyoki 
                                    oopar maine writable ko false kar diya hai, jo purani email hai wahi print ho rahi hai, naa 
                                    ki srk@google.com
                        */