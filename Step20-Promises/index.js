const myPromise = new Promise((resolve, reject) => {
    console.log("Promise created");
    resolve(); /* agar resolve() method ko execute nahin karunga toh fir neeche jo '.then', '.catch' or '.finally' 
                    likha hai woh nahin chalega, toh 'inn teeno' chalane ke liye humein apne promise se connect karna 
                    padega in teeno ko or yeh karne ke liye humein "resolve() yaa reject()" method ko execute karte hain. 
                    And if reject() method likha hota yahan par toh fir .catch() wala block run hoga, and finnaly wale 
                    block toh run hoga hi hoga agar dono mein se kuch bhi likha hai toh(i.e., resolve() or reject()) 
                */
});

myPromise.then(() => {
    console.log("Promise consumed")
})
.catch((error) => {
    console.log("error", error)
})
.finally(() => {
    console.log("Final block")
})