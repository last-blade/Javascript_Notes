//----------------------------------------------------Set-timeout-------------------------------------------------------------------------

const changeText = function(){
    document.querySelector("h1").innerHTML = "Javascript"
}

const changeMe = setTimeout(changeText ,2000);

const button = document.getElementById("btn");

const button2 = document.getElementById("btn2");

button2.addEventListener("click", () => {
    setTimeout(changeText ,2000);
    console.log("Started timer")
});

button.addEventListener("click", () => {
    clearTimeout(changeMe);
    console.log("Stopped the timer");
});

//----------------------------------------------------set-interval---------------------------------------------------------------------------

setInterval(() => {
    console.log("Hello will print every second continously")
}, 1000);

                        //OR
const printEverySecond = function(str){// accepting arguments passesd in setInterval method
    console.log("Printing every second: ", str)
}                        
setInterval(printEverySecond,1000, "Hello"); // it can take upto 3 parameters only
/*
ab iss "setInterval" ko rokna hai toh fir 'clearInterval(printEverySecond)' kaa use karenge or ho jaayega.
*/                    





