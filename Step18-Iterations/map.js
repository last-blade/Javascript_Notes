const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((item) => {
    return item+10;
});

console.log(newNumbers); // OUTPUT: [ 11, 12, 13, 14, 15 ]

//-----------------------------------------------CHAINING-----------------------------------------------------------------------

const values = numbers
                .map((item) => item * 10)
                .map((item) => item + 1)
                .filter((value) => value > 11);
console.log(values); // OUTPUT: [ 21, 31, 41, 51 ]