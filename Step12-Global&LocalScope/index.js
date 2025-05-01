if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // reference error
console.log(b); // reference error
console.log(c);
//---------------------------------------------------------------------------------------------------------------------------------------

for(let i = 0; i <= 5; i++){
    console.log(i);// will print values w/o error
    var num1 = 555;
    const num2 = 999;
    let num3 = 222;
}
console.log("OUT OF For-Loop\n");
console.log(i); // OUTPUT: ReferenceError: i is not defined
console.log(num1); // OUTPUT: NO error will occur; "var" jo hai accessible hai for-loop ke bahar bhi, but function ke andar hoga "var" toh fir access nahin kar sakte, neeche example dekhte hain iska
console.log(num2); // OUTPUT: ReferenceError: num2 is not defined
console.log(num3); // OUTPUT: ReferenceError: num3 is not defined

//---------------------------------------------------------------------------------------------------------------------------------------

function myFun(){
    var name = "prashant";
    let myname = "prashant";
    const fullname = "prashant";
}

console.log(name); // OUTPUT: ReferenceError: name is not defined
console.log(myname); // OUTPUT: ReferenceError: myname is not defined
console.log(fullname); // OUTPUT: ReferenceError: fullname is not defined


//----------------------------------------------------------practice----------------------------------------------------------------------

if(true){
    const username = "prasahnt";
    if(username === "prashant"){
        const gitHubId = "last-blade";
        console.log(username + gitHubId);// nor error, simply print.
    }

    console.log(gitHubId); //reference error
}

console.log(username); //reference error
