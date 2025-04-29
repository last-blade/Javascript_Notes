const myObj = new Object();

console.log(myObj); //OUTPUT: {}; Empty object

myObj.name = "Prashant";
myObj.id = "iamsrpk02";
myObj.isLoggedIn = false;

console.log(myObj); // OUTPUT: { name: 'Prashant', id: 'iamsrpk02', isLoggedIn: false }

//---------------------------------------------------------------------------------------------------------------------------------------

const regularUser = {
    email: "prashant@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Prashant",
            lastName: "Tyagi",
        },
    },
}

console.log(regularUser.fullname.userFullname.firstName); // OUTPUT: Prashant

//----------------------------------------------------------------------------------------------------------------------------------------

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = {obj1, obj2};
console.log(obj3); // OUTPUT: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }; yahan par object of object ban gaya, but humein toh dono objects ka data obj3 mein daalna tha naa ki nested daalna tha, toh iss problem ko solve karne ke liye spread operator use karenge jaise ki array ein kiya tha same

//spread operator
const obj4 = {...obj1, ...obj2};
console.log(obj4); // OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Object.assign(source, target);
const obj5 = Object.assign({}, obj1, obj2); // OUTPUT: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);

//Object.keys(object_name) or Object.values(object_name); yeh methods object ki keys ya values ko extract karne ke liye use karte hain, and return mein humein array milti hai outpu ke saath
console.log(Object.keys(myObj)); // OUTPUT:  [ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(myObj)) // OUTPUT: [ 'Prashant', 'iamsrpk02', false ]

//Object.entries(object_name)
console.log(Object.entries(myObj)); //OUTPUT: [ [ 'name', 'Prashant' ], [ 'id', 'iamsrpk02' ], [ 'isLoggedIn', false ] ]

//object_name.hasOwnProperty(your_property_name)
console.log(myObj.hasOwnProperty('name'));// OUTPUT: true
