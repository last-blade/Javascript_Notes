for(let i = 0; i <= 5; i++){
    console.log(i);
}
//-----------------------------------------------------------------------
let arr = ["Thor", "Iron man", "captain america"];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

//------------------------------------------------------------------------

for(let i = 0; i<=10; i++){
    if(i==5){
        console.log("5 detected")
        break;
    }

    console.log("Value of i is ", i)
    /*
        OUTPUT:
            Value of i is  0
            Value of i is  1
            Value of i is  2
            Value of i is  3
            Value of i is  4
            5 detected
    */
}

//------------------------------------------------------------------------

for(let i = 0; i<=10; i++){
    if(i==5){
        console.log("5 detected")
        continue;
    }

    console.log("Value of i is ", i)
    /*
        OUTPUT:
            Value of i is  0
            Value of i is  1
            Value of i is  2
            Value of i is  3
            Value of i is  4
            5 detected
            Value of i is  6
            Value of i is  7
            Value of i is  8
            Value of i is  9
            Value of i is  10
    */
}
