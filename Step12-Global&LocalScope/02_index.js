function one(){
    const name = "prashant";

    function two(){
        console.log(name); // easily print the "prashant" w/o error
        let gitHubId = "last-blade"
    }

    // console.log(gitHubId); // ReferenceError: gitHubId is not defined

    two();
}

one();

//---------------------------------------------------interesting concept--------------------------------------------------------

console.log(addNum1(10)); /* neeche wale mein error aa rahi hai but iss oopar wale mein error nahin aa rahi hai, 
                            yahan par hoisting ho rahi hai isliye error nahin aa rahi, or neeche wale mein maine 
                            function ko ek variable mein hold kara hua hai isliye wahan error aa rahi hai kyoki 
                            variable ki hoisting nahin hoti hai, kewal function ki hoisting ho sakti hai, same case 
                            arrorw-function mein bhi hota hai, wahan bhi hoisting kaam nahin karti hai kyoki wahan 
                            bhi humm ek variable mein hold karte hain function ko */ 
function addNum1(a){
    return a + 1;
}


console.log(addNum2(10)); // ReferenceError: Cannot access 'addNum2' before initialization
const addNum2 = function(b){
    return b + 1;
}