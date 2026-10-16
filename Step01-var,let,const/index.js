const accountId = 14332;
let accountEmail = "prashant@google.com"
var accountPassword = "12345"
let accountCity = "Delhi";
let fullname;

// accountId = 123; not allowed to change the value of 'const' type

console.table([accountCity, accountId, accountPassword, accountEmail, fullname]);

/*
OUTPUT:
┌─────────┬───────────────────────┐
│ (index) │ Values                │
├─────────┼───────────────────────┤
│ 0       │ 'Delhi'               │
│ 1       │ 14332                 │
│ 2       │ '12345'               │
│ 3       │ 'prashant@google.com' │
│ 4       │ undefined             │
└─────────┴───────────────────────┘

"name" is undefined because the variable is declared but initialize nahin kiya kisi value se.
*/


console.log("Hello World Hellooooo");
//hello


let firstName="Prashant";
console.log(firstName);
console.log(firstName.length);
console.log(firstName[firstName.length-1]);

let secondName="     Shah Rukh Khan    ";
console.log(secondName.trim());

let thirdName="prashant";
console.log(thirdName.toUpperCase());

let fourthdName="PRASHANT";
console.log(fourthdName.toLowerCase());

let newName="Prashant";
console.log(newName.slice(0,5));


//Comparison operators <, >, <=, >=, = =, etc..................................................................................
let b=5;
let c=8;
console.log(b>c);  //output will be 'false' kyoki 'b' variable 'c' se bada nahin hai

//Difference b/w double equals to(==) and triple equals to(===)....see below:- 
let num1 = "7";
let num2 = 7;
console.log(num1 == num2); //Output mein 'True' aayega..... num1 string datatype hai or num2 number datatype hai tab bhi dono equal hain
                           // baaki or langueges mein 'false' output aayega kyoki c++, c, java mein datatype check hota hai or num1 and
                           // num2 kaa datatype alag hai, but JavaScript mein hi datatype check nahin hota isliye 'True' output aayega 

 /*Agar triple equal to (===)use karte hain to strict checking hoti i.e. iss baar datatype bhi check hoga input value kaa.....but double
 equals to(==) mein bas value check hoti hai datatype check nahin hota....isiliye sabse oopar wale case mein 'true' output aaya tha*/                          
console.log(num1===num2);


/* Not equals to(!=) Vs not equals to equals to (!==) */
console.log(num1 != num2);
console.log(num1 !== num2);








// If-else condition
let myAge=22;
if(myAge>=18)
{
    console.log("You can play the game");
}
else{
    console.log("Can not play the game");
}



/* Falsy values....aisi values jo if condition ko false kar deti hain or else wali statement execute hoti hai, following are the falsy values:-
false, zero(0) ,null, "", undefined */


/* falsy value put kari hai humne 'k' variable mein jisse ki if-condition false ho gayi hai or else wali statemnet chal gayi hai*/
//Example-1
let k="";
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("K variable is initialized with falsy value") 
}

//Example-2

k=0;
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("k variable initialized with falsy value");
}
//Example-3
k=null;
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("k variable initialized with falsy value");
}
// bas aise hi agar baaki jo bachi falsy values hain (false, undefined) same result aayega or else wali statemnt execute hogi

/*Truthy values are:- true, abc, 1, -1......inn values se agar variable ko initialzie karenge toh if-condition true hogi or if wali statement hi chalegi naa ki else wali*/

//Example-1

let p=true;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-2
 p=1;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-3
p = -1;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-4
p="abc";
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}







let my_name="Prashant";
if(my_name[0]=="P")
{
    console.log("Your name starts with P");
}
else{
    console.log("It is false");
}


/*by using 'prompt' keyword we can take input from the user
and 'prompt' ke through liya hua input jo hao woh String datatype mein hota hai....like maine user se input liya 15 toh iss input kaa data
type String hoga i.e. "15" */
// let input1=prompt("Give any number");
// console.log(input1);

/*agar iss string data type ko integer mein convert karna hai toh prompt se pehle + sign laga do...jaise ki humne oopar seekha datatype
ko kaise convert karte hain*/

// let input2= +prompt("Give input 2");
// console.log(typeof input2);















// nested if else....else if
let temp=45;
if(temp===25)
{
    console.log("Normal temperature outside");
}
else if(temp<15)
{
    console.log("cold temperature outside");
}
else if(temp>=30)
{
    console.log("Too hot temperature outside");
}
else{
    console.log("Average temperature outside");
}



//switch case

let day=2;
switch(day)
{
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");    
        break;
    default:
        console.log("Invalid Day");                        
}




//LOOPS
//for loop and while loop same as C++, c, java

for(let i=1; i<=10; i++)
{
    console.log(i);
}

/*console.log(i);  /* 'i' variable jo hai for loop ke andar hai isliye 'i' ki value for loop se bahar print nahin ho sakti but hum agar 
                    'i' variable ko 'var' ka use karke declare kare toh var se jo declared variable hai uska scope global ho jaata hai
                    'let' se declared variable keval ussi scope mein rehte hain jahan declare kiye hain but 'var' jo hai globally declare
                    karta hai variables ko jisse ki uss variable ki value ko scope se bahar bhi access kar skate hai hain*/


for(var j=1; j<=10; j++)                    
{
    console.log(j);
}


console.log("Yeh j ki value for loop se bahar bhi acces kar li humne kyoki for loop ke nadar humne J variable ko 'var' kaa use karke declare kiya hai", j);
