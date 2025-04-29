const myArray = [4 ,6, 1, 9, 5];

const demoArray = new Array(8, 6, 1, 0, 3);

console.log(myArray[4]);
console.log(demoArray); // OUTPUT: [ 8, 6, 1, 0, 3 ]

//Array methods:-
//1. push();
myArray.push(10); // Will insert the element at the last of the array
console.log(myArray); //OUTPUT: [ 4, 6, 1, 9, 5, 10 ]

//2. pop();
myArray.pop(); // Will delete the element at the last of the array
console.log(myArray)

//3. unshift();
myArray.unshift(2); // Will insert the element at the start of the array((i.e. 0th index)), lekin fir isse saare elements shift ho jaayenge, kyoki hum array ki starting mein insert kar rahe hain element ko or isse fir computation power zyada use hogi or ek kaafi badi array mein yeh operation perform karenge toh fir performance kharab ho jaayegi
console.log(myArray); //OUTPUT: [ 2, 4, 6, 1, 9, 5 ]

//4. shift();
myArray.shift();// Will delete the element at the start of the array(i.e. 0th index), lekin fir isse saare elements shift ho jaayenge, kyoki hum array ki starting se delete kar rahe hain element ko or isse fir computation power zyada use hogi or ek kaafi badi array mein yeh operation perform karenge toh fir performance kharab ho jaayegi
console.log(myArray);

//5. includes()
console.log(myArray.includes(9)); //OUTPUT: true

//6. indexOf()
console.log(myArray.indexOf(9)); //OUTPUT: 3; agar element '3' exist hi nahin karta toh fir -1 index return karta

//7. join()
const arr = [4, 9, 1, 10, 40, 2, 1]
console.log(arr.join());//Convert into string and return all the elements as string; OUTPUT: 4,9,1,10,40,2,1
console.log(typeof arr.join()); //OUTPUT: string

//8. slice(); it's also in string also
console.log(arr.slice(2, 4)); // OUTPUT: [ 1, 10 ]; will print from index 2 to 3, excluding index 4

//9. splice(); yeh jo hai array mein se ek part ko return karta hai or original array bhi change ho jaati hai, i.e. jo splice kiya hai like splice(1,3) toh 1,2,3 index wale elements remove ho jayenge array mein se, lekin slice method mein aisa nahin ho raha tha
console.log(arr.splice(1, 3)); //OUTPUT: [ 9, 1, 10 ]
console.log(arr); //OUTPUT: [ 4, 40, 2, 1 ]; Original array after splice, 1,2,3rd index ke item hi remove ho gaye original array se