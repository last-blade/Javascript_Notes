const arr = [10, 20, 30, 40];

var initialValue = 0;

const numbers = arr.reduce((accumulator, currentValue) => {
    console.log(`accumulator:${accumulator} and current Value: ${currentValue}`);
    /*OUTPUT:
        accumulator:0 and current Value: 10
        accumulator:10 and current Value: 20
        accumulator:30 and current Value: 30
        accumulator:60 and current Value: 40
    */
    return accumulator + currentValue;
}, initialValue);

console.log(numbers); // OUTPUT: 100

//---------------------------------------------------------------------------------------------------------------------------------

const course = [
    {
        courseName: "Javascript",
        price: 999,
    },
    
    {
        courseName: "Backend",
        price: 4999,
    },
    {
        courseName: "ReactJs",
        price: 1999,
    },
    {
        courseName: "MongoDB",
        price: 499,
    },
];

const totalPrice = course.reduce((acc, item) => {
    return acc + item.price
}, 0);

console.log(totalPrice); // OUTPUT: 8496