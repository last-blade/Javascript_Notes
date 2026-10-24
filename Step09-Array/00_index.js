/*
========================================================
JAVASCRIPT ARRAYS AND ARRAY METHODS
========================================================

CONTENTS

1. What Is an Array?
2. Creating Arrays
3. Accessing Array Elements
4. Adding and Removing Elements
5. splice() — Add, Remove, or Replace Elements
6. slice() — Extract Part of an Array
7. Iteration Methods
8. Searching Methods
9. Checking Conditions
10. Sorting and Reversing
11. Joining and Converting Arrays
12. Spread Operator
13. Array Destructuring
14. Modern Array Methods
15. Mutable vs. Non-Mutating Methods
16. Shallow Copy vs. Reference
17. Other Useful Array Methods
18. Array Methods for DSA
19. Time Complexity
20. Practice Questions
21. Learning Roadmap


========================================================
1. WHAT IS AN ARRAY?
========================================================

An array is a data structure used to store multiple values
inside a single variable.

Instead of creating separate variables for every value,
we can store all values inside an array.

For example:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";

Instead, we can write:

const fruits = ["Apple", "Banana", "Mango"];

Important characteristics:

1. Arrays are zero-indexed.
   The first element has index 0.

2. Arrays have a length property.
   It tells us how many elements are present.

3. JavaScript arrays can store different data types.

4. Arrays are objects in JavaScript.

5. Arrays are dynamic.
   Their length can change as elements are added or removed.

6. Arrays can contain duplicate values.


Example:

*/

const fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1);        // ["Apple", "Banana", "Mango"]
console.log(fruits1.length); // 3
console.log(typeof fruits1); // "object"

/*
An array can contain different data types.
*/

const mixedArray = [
    10,
    "Hello",
    true,
    null,
    undefined,
    { name: "Prashant" },
    [1, 2, 3]
];

console.log(mixedArray);


/*
========================================================
2. CREATING ARRAYS
========================================================

There are several ways to create arrays in JavaScript.

METHOD 1: ARRAY LITERAL

This is the most common and recommended approach.

Syntax:

const arrayName = [element1, element2, element3];

Example:
*/

const numbers1 = [10, 20, 30, 40, 50];

console.log(numbers1);


/*
METHOD 2: EMPTY ARRAY

An empty array contains no elements.
*/

const emptyArray1 = [];

console.log(emptyArray1);        // []
console.log(emptyArray1.length); // 0


/*
METHOD 3: ARRAY CONSTRUCTOR

You can create an array using the Array constructor.

However, be careful when passing a single number.

Example:
*/

const array1 = new Array(10);

console.log(array1);        // Array with 10 empty slots
console.log(array1.length); // 10

/*
The following creates an array containing three elements.
*/

const array2 = new Array(10, 20, 30);

console.log(array2); // [10, 20, 30]

/*
For most situations, array literals are easier to understand.

Prefer:

const numbers = [10, 20, 30];

Instead of:

const numbers = new Array(10, 20, 30);


METHOD 4: Array.of()

Array.of() creates an array using the supplied arguments.

It avoids the special behavior of new Array(singleNumber).

Example:
*/

const arrayOf1 = Array.of(5);

console.log(arrayOf1); // [5]

const arrayOf2 = Array.of(10, 20, 30);

console.log(arrayOf2); // [10, 20, 30]


/*
METHOD 5: Array.from()

Array.from() creates a new array from an iterable or array-like
object.

It is commonly used with strings, Sets, Maps, and NodeLists.

Example:
*/

const letters1 = Array.from("HELLO");

console.log(letters1);
// ["H", "E", "L", "L", "O"]

const set1 = new Set([10, 20, 20, 30]);

const numbersFromSet1 = Array.from(set1);

console.log(numbersFromSet1);
// [10, 20, 30]


/*
Array.from() can also transform elements using a mapping function.
*/

const numbersFromRange1 = Array.from(
    { length: 5 },
    (_, index) => index + 1
);

console.log(numbersFromRange1);
// [1, 2, 3, 4, 5]


/*
========================================================
3. ACCESSING ARRAY ELEMENTS
========================================================

Array elements are accessed using their indexes.

Remember:

First element  -> index 0
Second element -> index 1
Third element  -> index 2

Example:
*/

const fruits2 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits2[0]); // Apple
console.log(fruits2[1]); // Banana
console.log(fruits2[2]); // Mango
console.log(fruits2[3]); // Orange


/*
ACCESSING THE LAST ELEMENT

A common approach is:

array[array.length - 1]

Example:
*/

const numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2[numbers2.length - 1]); // 50

/*
Modern JavaScript also supports at().

Negative indexes count from the end:

at(-1) -> Last element
at(-2) -> Second-last element
at(-3) -> Third-last element
*/

console.log(numbers2.at(-1)); // 50
console.log(numbers2.at(-2)); // 40
console.log(numbers2.at(-3)); // 30


/*
MODIFYING AN ELEMENT

You can modify an array element using its index.
*/

const fruits3 = ["Apple", "Banana", "Mango"];

fruits3[1] = "Orange";

console.log(fruits3);
// ["Apple", "Orange", "Mango"]


/*
ACCESSING AN INDEX THAT DOES NOT EXIST

Accessing a missing index returns undefined.
*/

const numbers3 = [10, 20, 30];

console.log(numbers3[10]); // undefined


/*
========================================================
4. ADDING AND REMOVING ELEMENTS
========================================================

JavaScript provides four commonly used methods:

1. push()
2. pop()
3. unshift()
4. shift()


--------------------------------------------------------
4.1 push()
--------------------------------------------------------

push() adds one or more elements to the END of an array.

It modifies the original array.

It returns the new length of the array.

Syntax:

array.push(element1, element2, ...);

Example:
*/

const numbers4 = [10, 20, 30];

const newLength1 = numbers4.push(40);

console.log(numbers4);
// [10, 20, 30, 40]

console.log(newLength1);
// 4


/*
Adding multiple elements:
*/

const numbers5 = [10, 20];

numbers5.push(30, 40, 50);

console.log(numbers5);
// [10, 20, 30, 40, 50]


/*
--------------------------------------------------------
4.2 pop()
--------------------------------------------------------

pop() removes the LAST element from an array.

It modifies the original array.

It returns the removed element.

If the array is empty, pop() returns undefined.

Example:
*/

const numbers6 = [10, 20, 30, 40];

const removedElement1 = numbers6.pop();

console.log(numbers6);
// [10, 20, 30]

console.log(removedElement1);
// 40


/*
--------------------------------------------------------
4.3 unshift()
--------------------------------------------------------

unshift() adds one or more elements to the BEGINNING
of an array.

It modifies the original array.

It returns the new length.

Example:
*/

const numbers7 = [30, 40, 50];

const newLength2 = numbers7.unshift(10, 20);

console.log(numbers7);
// [10, 20, 30, 40, 50]

console.log(newLength2);
// 5


/*
--------------------------------------------------------
4.4 shift()
--------------------------------------------------------

shift() removes the FIRST element from an array.

It modifies the original array.

It returns the removed element.

Example:
*/

const numbers8 = [10, 20, 30, 40];

const removedElement2 = numbers8.shift();

console.log(numbers8);
// [20, 30, 40]

console.log(removedElement2);
// 10


/*
--------------------------------------------------------
SUMMARY
--------------------------------------------------------

push()    -> Add to the end
pop()     -> Remove from the end
unshift() -> Add to the beginning
shift()   -> Remove from the beginning


TIME COMPLEXITY

push()    -> Usually O(1)
pop()     -> O(1)
unshift() -> O(n)
shift()   -> O(n)

Why are shift() and unshift() generally O(n)?

Because elements may need to be moved to different indexes.

For example, removing the first element:

[10, 20, 30, 40]

Becomes:

[20, 30, 40]

The remaining elements need to shift their positions.


========================================================
5. splice() — ADD, REMOVE, OR REPLACE ELEMENTS
========================================================

splice() is one of the most useful array methods.

It can:

1. Remove elements.
2. Insert elements.
3. Replace elements.

IMPORTANT:

splice() MODIFIES the original array.


SYNTAX:

array.splice(start, deleteCount, item1, item2, ...);

Parameters:

start:
The index at which the operation begins.

deleteCount:
The number of elements to remove.

item1, item2, ...:
Optional elements to insert.


--------------------------------------------------------
5.1 REMOVING ELEMENTS
--------------------------------------------------------

Example:
*/

const numbers9 = [10, 20, 30, 40, 50];

const removedElements1 = numbers9.splice(1, 2);

console.log(numbers9);
// [10, 40, 50]

console.log(removedElements1);
// [20, 30]

/*
Explanation:

splice(1, 2)

Start at index 1.
Remove 2 elements.

The removed elements are 20 and 30.


--------------------------------------------------------
5.2 INSERTING ELEMENTS
--------------------------------------------------------

To insert elements without removing existing elements,
set deleteCount to 0.

Example:
*/

const numbers10 = [10, 20, 40, 50];

numbers10.splice(2, 0, 25, 30);

console.log(numbers10);
// [10, 20, 25, 30, 40, 50]

/*
Explanation:

splice(2, 0, 25, 30)

Start at index 2.
Remove zero elements.
Insert 25 and 30.


--------------------------------------------------------
5.3 REPLACING ELEMENTS
--------------------------------------------------------

You can remove existing elements and insert new ones
in the same operation.

Example:
*/

const fruits4 = ["Apple", "Banana", "Mango"];

fruits4.splice(1, 1, "Orange");

console.log(fruits4);
// ["Apple", "Orange", "Mango"]

/*
Explanation:

splice(1, 1, "Orange")

Start at index 1.
Remove one element.
Insert "Orange".


--------------------------------------------------------
5.4 REMOVING ELEMENTS FROM AN INDEX TO THE END
--------------------------------------------------------

If deleteCount is omitted, all elements from the starting
index to the end are removed.

Example:
*/

const numbers11 = [10, 20, 30, 40, 50];

numbers11.splice(2);

console.log(numbers11);
// [10, 20]


/*
--------------------------------------------------------
5.5 USING NEGATIVE INDEXES
--------------------------------------------------------

A negative start index counts from the end.

Example:
*/

const numbers12 = [10, 20, 30, 40, 50];

numbers12.splice(-2, 1);

console.log(numbers12);
// [10, 20, 30, 50]

/*
Explanation:

-2 refers to the second-last element.
The element 40 is removed.


--------------------------------------------------------
5.6 RETURN VALUE
--------------------------------------------------------

splice() returns an array containing the removed elements.

If no elements are removed, it returns an empty array.

Example:
*/

const numbers13 = [10, 20, 30, 40];

const removedElements2 = numbers13.splice(1, 2);

console.log(removedElements2);
// [20, 30]

console.log(numbers13);
// [10, 40]


/*
--------------------------------------------------------
5.7 splice() VS slice()
--------------------------------------------------------

splice():

- Modifies the original array.
- Can remove, insert, and replace elements.
- Returns the removed elements.

slice():

- Does not modify the original array.
- Extracts a portion of an array.
- Returns a new array.

Example:
*/

const originalArray1 = [10, 20, 30, 40, 50];

const slicedArray1 = originalArray1.slice(1, 3);

console.log(slicedArray1);
// [20, 30]

console.log(originalArray1);
// [10, 20, 30, 40, 50]


const originalArray2 = [10, 20, 30, 40, 50];

const splicedArray1 = originalArray2.splice(1, 2);

console.log(splicedArray1);
// [20, 30]

console.log(originalArray2);
// [10, 40, 50]


/*
========================================================
6. slice() — EXTRACT PART OF AN ARRAY
========================================================

slice() returns a shallow copy of a portion of an array.

It does not modify the original array.

SYNTAX:

array.slice(start, end);

Parameters:

start:
The index where extraction begins.

end:
The index where extraction stops.
The end index is NOT included.


--------------------------------------------------------
6.1 BASIC EXAMPLE
--------------------------------------------------------
*/

const numbers14 = [10, 20, 30, 40, 50];

const result1 = numbers14.slice(1, 4);

console.log(result1);
// [20, 30, 40]

console.log(numbers14);
// [10, 20, 30, 40, 50]

/*
Explanation:

slice(1, 4)

Start at index 1.
Stop before index 4.

Indexes selected:

1 -> 20
2 -> 30
3 -> 40


--------------------------------------------------------
6.2 OMITTING THE END INDEX
--------------------------------------------------------

If the end index is omitted, slice() extracts elements
from the start index to the end of the array.
*/

const numbers15 = [10, 20, 30, 40, 50];

console.log(numbers15.slice(2));
// [30, 40, 50]


/*
--------------------------------------------------------
6.3 COPYING AN ARRAY
--------------------------------------------------------

slice() with no arguments returns a shallow copy
of the array.
*/

const originalArray3 = [10, 20, 30];

const copiedArray1 = originalArray3.slice();

console.log(copiedArray1);
// [10, 20, 30]

console.log(copiedArray1 === originalArray3);
// false

/*
The arrays are different array objects.

However, slice() creates only a shallow copy.
If the array contains objects or nested arrays,
those inner objects are still shared by reference.
*/


/*
--------------------------------------------------------
6.4 NEGATIVE INDEXES
--------------------------------------------------------

Negative indexes count backward from the end.
*/

const numbers16 = [10, 20, 30, 40, 50];

console.log(numbers16.slice(-2));
// [40, 50]

console.log(numbers16.slice(-3, -1));
// [30, 40]


/*
--------------------------------------------------------
6.5 PRACTICAL EXAMPLE: PAGINATION
--------------------------------------------------------

Suppose an API returns 100 products, but you want to display
only 10 products per page.

For page 1:

start = (page - 1) * pageSize
start = (1 - 1) * 10
start = 0

end = start + pageSize
end = 10

For page 2:

start = (2 - 1) * 10
start = 10

end = 20

The general formula is:

start = (page - 1) * pageSize
end = start + pageSize

Example:
*/

const products1 = Array.from(
    { length: 25 },
    (_, index) => `Product ${index + 1}`
);

function getPage(items, page, pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return items.slice(start, end);
}

console.log(getPage(products1, 1, 10));
// Product 1 through Product 10

console.log(getPage(products1, 2, 10));
// Product 11 through Product 20

console.log(getPage(products1, 3, 10));
// Product 21 through Product 25


/*
========================================================
END OF PART 1
========================================================

Next topics:

7. Iteration Methods
8. Searching Methods
9. Checking Conditions
10. Sorting and Reversing
11. Joining and Converting Arrays
12. Spread Operator
13. Array Destructuring
14. Modern Array Methods
15. Mutable vs. Non-Mutating Methods
16. Shallow Copy vs. Reference
17. Other Useful Array Methods
18. Array Methods for DSA
19. Time Complexity
20. Practice Questions
21. Learning Roadmap

========================================================
*/

/*
========================================================
7. ITERATION METHODS
========================================================

Iteration methods allow us to process array elements without
manually writing a traditional for loop.

The most important methods are:

1. forEach()
2. map()
3. filter()
4. reduce()
5. flatMap()

Each method serves a different purpose.

--------------------------------------------------------
7.1 forEach()
--------------------------------------------------------

forEach() executes a callback function once for each
element of an array.

Syntax:

array.forEach((element, index, array) => {
    // Code to execute
});

Parameters:

element:
The current element being processed.

index:
The index of the current element.

array:
The original array being traversed.

Important points:

1. forEach() returns undefined.
2. It does not create a new array.
3. It is generally used for side effects.
4. It cannot be stopped using break.
5. Returning a value from its callback does not create a result array.

Example:
*/

const forEachNumbers1 = [10, 20, 30, 40];

forEachNumbers1.forEach((number) => {
    console.log(number);
});

/*
Output:

10
20
30
40
*/


/*
Accessing the element, index, and original array:
*/

const forEachFruits1 = ["Apple", "Banana", "Mango"];

forEachFruits1.forEach((fruit, index, array) => {
    console.log("Fruit:", fruit);
    console.log("Index:", index);
    console.log("Array:", array);
});

/*
forEach() is useful when you want to perform an action
for every element.

For example, displaying notifications or logging values.

However, if you want to transform an array and receive a new
array as the result, map() is usually more appropriate.


--------------------------------------------------------
7.2 map()
--------------------------------------------------------

map() creates a NEW array by applying a callback function
to every element of the original array.

Syntax:

const newArray = array.map((element, index, array) => {
    return transformedValue;
});

Important points:

1. map() returns a new array.
2. The original array is not modified by map() itself.
3. The returned array has the same number of elements as
   the original array.
4. You should return the transformed value from the callback.

Example: Doubling Every Number
*/

const mapNumbers1 = [1, 2, 3, 4, 5];

const doubledNumbers1 = mapNumbers1.map((number) => {
    return number * 2;
});

console.log(doubledNumbers1);
// [2, 4, 6, 8, 10]

console.log(mapNumbers1);
// [1, 2, 3, 4, 5]


/*
The same example using an arrow function with an implicit return:
*/

const mapNumbers2 = [1, 2, 3, 4, 5];

const doubledNumbers2 = mapNumbers2.map(number => number * 2);

console.log(doubledNumbers2);
// [2, 4, 6, 8, 10]


/*
Example: Extracting Names From Objects
*/

const mapUsers1 = [
    { id: 1, name: "Prashant", age: 24 },
    { id: 2, name: "Rahul", age: 25 },
    { id: 3, name: "Aman", age: 23 }
];

const userNames1 = mapUsers1.map(user => user.name);

console.log(userNames1);
// ["Prashant", "Rahul", "Aman"]


/*
Example: Adding a Property to Every Object

This is common in backend development when transforming
API responses.
*/

const mapProducts1 = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];

const productsWithTax1 = mapProducts1.map(product => {
    return {
        ...product,
        priceWithTax: product.price * 1.18
    };
});

console.log(productsWithTax1);

/*
The original objects are not modified.

The resulting objects contain the original properties
and the additional priceWithTax property.


IMPORTANT: What Happens If You Forget return?

Incorrect:
*/

const mapNumbers3 = [1, 2, 3];

const incorrectMappedNumbers1 = mapNumbers3.map(number => {
    number * 2;
});

console.log(incorrectMappedNumbers1);
// [undefined, undefined, undefined]

/*
The callback uses braces but does not return anything.

Correct:
*/

const mapNumbers4 = [1, 2, 3];

const correctMappedNumbers1 = mapNumbers4.map(number => {
    return number * 2;
});

console.log(correctMappedNumbers1);
// [2, 4, 6]


/*
--------------------------------------------------------
7.3 filter()
--------------------------------------------------------

filter() creates a NEW array containing only those elements
that satisfy a condition.

Syntax:

const filteredArray = array.filter((element, index, array) => {
    return condition;
});

If the callback returns:

true  -> Keep the element.
false -> Exclude the element.

Important points:

1. filter() returns a new array.
2. The original array is not modified by filter() itself.
3. The result can contain fewer elements than the original.
4. The result can be an empty array.

Example: Filter Even Numbers
*/

const filterNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers1 = filterNumbers1.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers1);
// [2, 4, 6, 8]


/*
Example: Filter Numbers Greater Than 10
*/

const filterNumbers2 = [5, 12, 8, 20, 3, 15];

const greaterThanTen1 = filterNumbers2.filter(number => number > 10);

console.log(greaterThanTen1);
// [12, 20, 15]


/*
Example: Filter Users by Age
*/

const filterUsers1 = [
    { name: "Prashant", age: 24 },
    { name: "Rahul", age: 17 },
    { name: "Aman", age: 22 },
    { name: "Rohit", age: 16 }
];

const adults1 = filterUsers1.filter(user => user.age >= 18);

console.log(adults1);

/*
Result:

[
    { name: "Prashant", age: 24 },
    { name: "Aman", age: 22 }
]
*/


/*
Example: Filter Products by Price
*/

const filterProducts1 = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const affordableProducts1 = filterProducts1.filter(
    product => product.price < 15000
);

console.log(affordableProducts1);

/*
Result:

[
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
]
*/


/*
--------------------------------------------------------
7.4 reduce()
--------------------------------------------------------

reduce() processes the array and accumulates its elements
into a single result.

That result can be a number, string, object, array, or
another value.

Syntax:

array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);

Parameters:

accumulator:
The accumulated result from previous iterations.

currentValue:
The element currently being processed.

index:
The current index.

array:
The original array.

initialValue:
The initial accumulator value.

IMPORTANT:

reduce() does not always return a number.
It returns whatever type of value the accumulator produces.


Example: Sum of All Numbers
*/

const reduceNumbers1 = [10, 20, 30, 40];

const sum1 = reduceNumbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum1);
// 100

/*
How it works:

Initial accumulator = 0

Iteration 1:
accumulator = 0
currentValue = 10
result = 10

Iteration 2:
accumulator = 10
currentValue = 20
result = 30

Iteration 3:
accumulator = 30
currentValue = 30
result = 60

Iteration 4:
accumulator = 60
currentValue = 40
result = 100

Final result = 100


Example: Find the Product of All Numbers
*/

const reduceNumbers2 = [1, 2, 3, 4, 5];

const product1 = reduceNumbers2.reduce((accumulator, number) => {
    return accumulator * number;
}, 1);

console.log(product1);
// 120


/*
Example: Find the Maximum Number

One approach using reduce():
*/

const reduceNumbers3 = [12, 45, 7, 89, 23];

const maximum1 = reduceNumbers3.reduce((max, number) => {
    return number > max ? number : max;
}, -Infinity);

console.log(maximum1);
// 89

/*
We use -Infinity as the initial value so that the method
also works correctly when all array elements are negative.

Another option for a non-empty numeric array is:

Math.max(...array)

For very large arrays, spreading every element into a function
can run into argument limits, so reduce() can be more suitable.


Example: Count Occurrences of Each Element

This is a common interview and DSA problem.
*/

const reduceFruits1 = [
    "Apple",
    "Banana",
    "Apple",
    "Mango",
    "Banana",
    "Apple"
];

const fruitCount1 = reduceFruits1.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;

    return accumulator;
}, {});

console.log(fruitCount1);

/*
Result:

{
    Apple: 3,
    Banana: 2,
    Mango: 1
}
*/


/*
Example: Group Objects by a Property
*/

const reduceUsers1 = [
    { name: "Aman", department: "IT" },
    { name: "Rahul", department: "HR" },
    { name: "Prashant", department: "IT" },
    { name: "Rohit", department: "HR" },
    { name: "Neha", department: "Finance" }
];

const usersByDepartment1 = reduceUsers1.reduce((groups, user) => {
    const department = user.department;

    if (!groups[department]) {
        groups[department] = [];
    }

    groups[department].push(user);

    return groups;
}, {});

console.log(usersByDepartment1);


/*
Example: Convert an Array Into an Object Indexed by ID
*/

const reduceUsers2 = [
    { id: 101, name: "Aman" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Prashant" }
];

const usersById1 = reduceUsers2.reduce((result, user) => {
    result[user.id] = user;

    return result;
}, {});

console.log(usersById1);

/*
Result:

{
    101: { id: 101, name: "Aman" },
    102: { id: 102, name: "Rahul" },
    103: { id: 103, name: "Prashant" }
}
*/


/*
IMPORTANT: Why Should You Usually Provide an Initial Value?

Consider:
*/

const reduceNumbers4 = [10, 20, 30];

const sum2 = reduceNumbers4.reduce((accumulator, number) => {
    return accumulator + number;
}, 0);

console.log(sum2);
// 60

/*
When the initial value is 0:

The accumulator starts at 0.
The first array element is processed by the callback.

Without an initial value:

The first array element becomes the initial accumulator.
The callback starts with the second element.

Providing an initial value is generally safer and clearer.

It also makes reduce() work correctly on empty arrays when
the initial value is provided.

An empty array without an initial value causes reduce()
to throw a TypeError.
*/


/*
--------------------------------------------------------
7.5 flatMap()
--------------------------------------------------------

flatMap() first maps each element and then flattens the
result by one level.

Conceptually:

array.map(callback).flat(1)

Example:
*/

const flatMapNumbers1 = [1, 2, 3];

const duplicatedNumbers1 = flatMapNumbers1.flatMap(number => {
    return [number, number * 2];
});

console.log(duplicatedNumbers1);
// [1, 2, 2, 4, 3, 6]

/*
How it works:

1 -> [1, 2]
2 -> [2, 4]
3 -> [3, 6]

The resulting nested structure is flattened by one level.


Example: Extracting Values From Nested Arrays
*/

const flatMapNumbers2 = [[1, 2], [3, 4], [5, 6]];

const doubledValues1 = flatMapNumbers2.flatMap(group => {
    return group.map(number => number * 2);
});

console.log(doubledValues1);
// [2, 4, 6, 8, 10, 12]


/*
--------------------------------------------------------
7.6 DIFFERENCE BETWEEN forEach(), map(), filter(), reduce()
--------------------------------------------------------

forEach():

Purpose:
Execute an operation for each element.

Returns:
undefined.

Typical use:
Logging or performing side effects.

map():

Purpose:
Transform every element.

Returns:
A new array containing the callback results.

Typical use:
Extracting names, transforming API data, calculating values.

filter():

Purpose:
Keep elements satisfying a condition.

Returns:
A new array containing the selected elements.

Typical use:
Filtering users, products, or numbers.

reduce():

Purpose:
Accumulate elements into a result.

Returns:
The final accumulator value.

Typical use:
Calculating totals, counting values, grouping objects.

flatMap():

Purpose:
Map each element and flatten the result by one level.

Returns:
A new array.


QUICK COMPARISON:
*/

const comparisonNumbers1 = [1, 2, 3, 4, 5];

comparisonNumbers1.forEach(number => console.log(number));

const comparisonMapped1 = comparisonNumbers1.map(number => number * 2);

const comparisonFiltered1 = comparisonNumbers1.filter(number => number > 2);

const comparisonReduced1 = comparisonNumbers1.reduce(
    (sum, number) => sum + number,
    0
);

console.log(comparisonMapped1);
// [2, 4, 6, 8, 10]

console.log(comparisonFiltered1);
// [3, 4, 5]

console.log(comparisonReduced1);
// 15


/*
========================================================
8. SEARCHING METHODS
========================================================

JavaScript provides several methods for finding elements.

Important methods:

1. includes()
2. indexOf()
3. lastIndexOf()
4. find()
5. findIndex()
6. findLast()
7. findLastIndex()


--------------------------------------------------------
8.1 includes()
--------------------------------------------------------

includes() checks whether an array contains a particular
value.

It returns true or false.

Syntax:

array.includes(searchElement);

Example:
*/

const searchNumbers1 = [10, 20, 30, 40, 50];

console.log(searchNumbers1.includes(30)); // true
console.log(searchNumbers1.includes(100)); // false


/*
includes() can also accept a starting index.
*/

const searchNumbers2 = [10, 20, 30, 20, 40];

console.log(searchNumbers2.includes(20, 2));
// false

/*
Explanation:

The search starts at index 2.
The value 20 does not appear at or after that index.


--------------------------------------------------------
8.2 indexOf()
--------------------------------------------------------

indexOf() returns the index of the FIRST occurrence
of a value.

If the value does not exist, it returns -1.

Example:
*/

const searchNumbers3 = [10, 20, 30, 20, 40];

console.log(searchNumbers3.indexOf(20));
// 1

console.log(searchNumbers3.indexOf(100));
// -1


/*
Example: Checking Whether a Value Exists
*/

const searchNumbers4 = [10, 20, 30];

if (searchNumbers4.indexOf(20) !== -1) {
    console.log("Value exists");
}

/*
For checking whether a value exists, includes() is generally
clearer than indexOf().

Prefer:

array.includes(value)

Use indexOf() when you need the index.


--------------------------------------------------------
8.3 lastIndexOf()
--------------------------------------------------------

lastIndexOf() returns the index of the LAST occurrence
of a value.

Example:
*/

const searchNumbers5 = [10, 20, 30, 20, 40];

console.log(searchNumbers5.lastIndexOf(20));
// 3

console.log(searchNumbers5.lastIndexOf(100));
// -1


/*
--------------------------------------------------------
8.4 find()
--------------------------------------------------------

find() returns the FIRST element that satisfies a condition.

If no element satisfies the condition, it returns undefined.

Syntax:

array.find((element, index, array) => {
    return condition;
});

Example:
*/

const findNumbers1 = [5, 12, 18, 25, 30];

const firstGreaterThanTwenty1 = findNumbers1.find(
    number => number > 20
);

console.log(firstGreaterThanTwenty1);
// 25


/*
Example: Find a User by ID
*/

const findUsers1 = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Prashant" }
];

const foundUser1 = findUsers1.find(user => user.id === 2);

console.log(foundUser1);
// { id: 2, name: "Rahul" }


/*
If no matching user exists:
*/

const foundUser2 = findUsers1.find(user => user.id === 100);

console.log(foundUser2);
// undefined


/*
--------------------------------------------------------
8.5 findIndex()
--------------------------------------------------------

findIndex() returns the index of the FIRST element
that satisfies a condition.

If no element matches, it returns -1.

Example:
*/

const findNumbers2 = [5, 12, 18, 25, 30];

const firstIndex1 = findNumbers2.findIndex(number => number > 20);

console.log(firstIndex1);
// 3

/*
The first number greater than 20 is 25.
Its index is 3.


Example: Find the Index of a User
*/

const findUsers2 = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Prashant" }
];

const userIndex1 = findUsers2.findIndex(user => user.id === 3);

console.log(userIndex1);
// 2


/*
--------------------------------------------------------
8.6 findLast()
--------------------------------------------------------

findLast() searches from RIGHT TO LEFT and returns the last
element that satisfies a condition.

Example:
*/

const findNumbers3 = [5, 12, 25, 18, 30, 15];

const lastGreaterThanTwenty1 = findNumbers3.findLast(
    number => number > 20
);

console.log(lastGreaterThanTwenty1);
// 30

/*
The array is searched from the end:

15 -> Does not match.
30 -> Matches.

The result is 30.


--------------------------------------------------------
8.7 findLastIndex()
--------------------------------------------------------

findLastIndex() searches from right to left and returns
the index of the last element satisfying a condition.

Example:
*/

const findNumbers4 = [5, 12, 25, 18, 30, 15];

const lastMatchingIndex1 = findNumbers4.findLastIndex(
    number => number > 20
);

console.log(lastMatchingIndex1);
// 4


/*
--------------------------------------------------------
8.8 WHICH SEARCHING METHOD SHOULD YOU USE?
--------------------------------------------------------

includes():

Use when checking whether a specific value exists.

indexOf():

Use when you need the index of the first matching value.

lastIndexOf():

Use when you need the index of the last matching value.

find():

Use when searching for the first element matching a condition.

findIndex():

Use when searching for the index of the first element
matching a condition.

findLast():

Use when searching from right to left for a matching element.

findLastIndex():

Use when searching from right to left for a matching index.


IMPORTANT DIFFERENCE:

includes(20) searches for the value 20.

find(number => number > 20) searches using a condition.

includes() is especially useful for primitive values.

find() is especially useful for finding objects based on
their properties.


========================================================
9. CHECKING CONDITIONS
========================================================

Two important array methods are:

1. some()
2. every()


--------------------------------------------------------
9.1 some()
--------------------------------------------------------

some() checks whether AT LEAST ONE element satisfies
a condition.

It returns true if at least one element matches.

Otherwise, it returns false.

Example:
*/

const someNumbers1 = [1, 3, 5, 8, 9];

const hasEvenNumber1 = someNumbers1.some(
    number => number % 2 === 0
);

console.log(hasEvenNumber1);
// true

/*
The number 8 is even, so the result is true.


Example: Check Whether Any User Is an Adult
*/

const someUsers1 = [
    { name: "Rahul", age: 16 },
    { name: "Aman", age: 17 },
    { name: "Prashant", age: 24 }
];

const hasAdult1 = someUsers1.some(user => user.age >= 18);

console.log(hasAdult1);
// true


/*
--------------------------------------------------------
9.2 every()
--------------------------------------------------------

every() checks whether ALL elements satisfy a condition.

It returns true only when every element matches.

Example:
*/

const everyNumbers1 = [2, 4, 6, 8];

const allEven1 = everyNumbers1.every(
    number => number % 2 === 0
);

console.log(allEven1);
// true


const everyNumbers2 = [2, 4, 5, 8];

const allEven2 = everyNumbers2.every(
    number => number % 2 === 0
);

console.log(allEven2);
// false

/*
The number 5 is not even, so the result is false.


Example: Check Whether All Products Are In Stock
*/

const everyProducts1 = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: true },
    { name: "Keyboard", inStock: true }
];

const allProductsAvailable1 = everyProducts1.every(
    product => product.inStock
);

console.log(allProductsAvailable1);
// true


/*
--------------------------------------------------------
9.3 SOME VS. EVERY
--------------------------------------------------------

some():

At least one element must satisfy the condition.

Think:
"Does at least one item match?"


every():

All elements must satisfy the condition.

Think:
"Do all items match?"


IMPORTANT EMPTY-ARRAY BEHAVIOR

some() on an empty array returns false.

every() on an empty array returns true.

Example:
*/

const emptyArray2 = [];

console.log(emptyArray2.some(() => true));
// false

console.log(emptyArray2.every(() => false));
// true

/*
Why does every() return true for an empty array?

There is no element that violates the condition.

This behavior is intentional in JavaScript and is known
as vacuous truth in logic.

In application code, check whether an array is non-empty
separately if an empty array should not count as success.


========================================================
10. SORTING AND REVERSING ARRAYS
========================================================

Important methods:

1. sort()
2. toSorted()
3. reverse()
4. toReversed()


--------------------------------------------------------
10.1 sort()
--------------------------------------------------------

sort() sorts an array in place.

IMPORTANT:

By default, sort() converts elements to strings and compares
their UTF-16 code units.

Therefore, sorting numbers without a comparator can produce
unexpected results.

Example:
*/

const sortNumbers1 = [100, 5, 25, 1, 10];

sortNumbers1.sort();

console.log(sortNumbers1);
// [1, 10, 100, 25, 5]

/*
This happens because default sorting is not numeric sorting.


NUMERIC SORTING IN ASCENDING ORDER

Use a comparator:

(a, b) => a - b

If the result is negative, a comes before b.
If the result is positive, b comes before a.
If the result is zero, their relative order is treated
as equal by the comparator.

Example:
*/

const sortNumbers2 = [100, 5, 25, 1, 10];

sortNumbers2.sort((a, b) => a - b);

console.log(sortNumbers2);
// [1, 5, 10, 25, 100]


/*
NUMERIC SORTING IN DESCENDING ORDER

Use:

(b, a) => b - a

Or equivalently:

(b, a) => b - a

Example:
*/

const sortNumbers3 = [100, 5, 25, 1, 10];

sortNumbers3.sort((a, b) => b - a);

console.log(sortNumbers3);
// [100, 25, 10, 5, 1]


/*
SORTING STRINGS

Default sorting is suitable for many basic string cases.
However, localeCompare() is useful for locale-aware
string comparisons.
*/

const sortNames1 = ["Rahul", "Aman", "Prashant", "Neha"];

sortNames1.sort();

console.log(sortNames1);
// ["Aman", "Neha", "Prashant", "Rahul"]


/*
Sorting strings without modifying the original array:

Use toSorted() when supported by your JavaScript runtime.
*/

const sortNames2 = ["Rahul", "Aman", "Prashant", "Neha"];

const sortedNames1 = sortNames2.toSorted();

console.log(sortedNames1);
// ["Aman", "Neha", "Prashant", "Rahul"]

console.log(sortNames2);
// ["Rahul", "Aman", "Prashant", "Neha"]


/*
SORTING OBJECTS BY A PROPERTY

Example: Sort Products by Price
*/

const sortProducts1 = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const sortedProducts1 = sortProducts1.toSorted(
    (a, b) => a.price - b.price
);

console.log(sortedProducts1);


/*
The resulting order is:

Keyboard -> 1500
Monitor  -> 12000
Phone    -> 20000
Laptop   -> 50000


IMPORTANT:

sort() modifies the original array.

toSorted() creates a new array.

Both methods sort the array elements themselves; they do not
automatically deep-clone objects inside the array.


--------------------------------------------------------
10.2 reverse()
--------------------------------------------------------

reverse() reverses the order of array elements IN PLACE.

It modifies the original array.

Example:
*/

const reverseNumbers1 = [10, 20, 30, 40, 50];

reverseNumbers1.reverse();

console.log(reverseNumbers1);
// [50, 40, 30, 20, 10]


/*
--------------------------------------------------------
10.3 toReversed()
--------------------------------------------------------

toReversed() returns a new array with the elements in reverse
order, leaving the original array unchanged.

Example:
*/

const reverseNumbers2 = [10, 20, 30, 40, 50];

const reversedNumbers1 = reverseNumbers2.toReversed();

console.log(reversedNumbers1);
// [50, 40, 30, 20, 10]

console.log(reverseNumbers2);
// [10, 20, 30, 40, 50]


/*
--------------------------------------------------------
10.4 REVERSE A STRING USING AN ARRAY
--------------------------------------------------------

A string does not have reverse() directly.

You can convert it into an array, reverse the array,
and join the elements back into a string.

Example:
*/

const reverseString1 = "JavaScript";

const reversedString1 = reverseString1
    .split("")
    .reverse()
    .join("");

console.log(reversedString1);
// "tpircSavaJ"

/*
For strings containing complex Unicode characters, such as
some emoji and combined characters, split("") may separate
surrogate pairs or combining marks. More advanced Unicode
handling may be needed for those cases.


========================================================
11. JOINING AND CONVERTING ARRAYS
========================================================

Important methods:

1. join()
2. toString()
3. flat()


--------------------------------------------------------
11.1 join()
--------------------------------------------------------

join() combines array elements into a string.

You can specify a separator between the elements.

Syntax:

array.join(separator);

Example:
*/

const joinFruits1 = ["Apple", "Banana", "Mango"];

console.log(joinFruits1.join());
// "Apple,Banana,Mango"

console.log(joinFruits1.join(" "));
// "Apple Banana Mango"

console.log(joinFruits1.join(" - "));
// "Apple - Banana - Mango"

console.log(joinFruits1.join(""));
// "AppleBananaMango"


/*
PRACTICAL EXAMPLE: CREATE A CSV-LIKE STRING
*/

const joinNumbers1 = [10, 20, 30, 40];

const numbersString1 = joinNumbers1.join(", ");

console.log(numbersString1);
// "10, 20, 30, 40"


/*
PRACTICAL EXAMPLE: BREADCRUMB OR PATH
*/

const breadcrumb1 = ["Home", "Products", "Electronics", "Phones"];

console.log(breadcrumb1.join(" > "));
// "Home > Products > Electronics > Phones"


/*
--------------------------------------------------------
11.2 toString()
--------------------------------------------------------

toString() converts an array into a string.

For a basic array, it generally produces a comma-separated
representation.

Example:
*/

const stringArray1 = [10, 20, 30];

console.log(stringArray1.toString());
// "10,20,30"

/*
Difference:

join() lets you choose a separator.

toString() uses the standard array string representation.


Example:
*/

const stringArray2 = ["Apple", "Banana", "Mango"];

console.log(stringArray2.join(" | "));
// "Apple | Banana | Mango"

console.log(stringArray2.toString());
// "Apple,Banana,Mango"


/*
--------------------------------------------------------
11.3 flat()
--------------------------------------------------------

flat() creates a new array by flattening nested arrays.

By default, it flattens one level.

Example:
*/

const flatArray1 = [1, 2, [3, 4], [5, 6]];

const flattenedArray1 = flatArray1.flat();

console.log(flattenedArray1);
// [1, 2, 3, 4, 5, 6]


/*
FLATTEN MULTIPLE LEVELS

Pass the depth as an argument.
*/

const flatArray2 = [1, [2, [3, [4, 5]]]];

console.log(flatArray2.flat());
// [1, 2, [3, [4, 5]]]

console.log(flatArray2.flat(2));
// [1, 2, 3, [4, 5]]

console.log(flatArray2.flat(3));
// [1, 2, 3, 4, 5]


/*
FLATTEN ALL NESTED LEVELS

Use Infinity as the depth.
*/

const flatArray3 = [1, [2, [3, [4, [5]]]]];

console.log(flatArray3.flat(Infinity));
// [1, 2, 3, 4, 5]


/*
IMPORTANT:

flat() returns a new array.

It does not modify the original array.

It flattens nested arrays, but it does not recursively
clone objects contained inside those arrays.


========================================================
END OF PART 2
========================================================

NEXT PART:

12. Spread Operator (...)
13. Array Destructuring
14. Modern Array Methods
15. Mutable vs. Non-Mutating Methods
16. Shallow Copy vs. Reference
17. Other Useful Array Methods
18. Array Methods for DSA
19. Time Complexity
20. Practice Questions
21. Learning Roadmap

========================================================
*/

/*
========================================================
12. SPREAD OPERATOR (...) WITH ARRAYS
========================================================

The spread operator (...) expands the elements of an
iterable, such as an array, into individual values.

It is commonly used for:

1. Copying arrays.
2. Combining arrays.
3. Adding elements to arrays.
4. Passing array elements as function arguments.
5. Creating shallow copies of arrays.


--------------------------------------------------------
12.1 COPYING AN ARRAY
--------------------------------------------------------

Example:
*/

const spreadNumbers1 = [10, 20, 30, 40];

const spreadCopy1 = [...spreadNumbers1];

console.log(spreadCopy1);
// [10, 20, 30, 40]

console.log(spreadCopy1 === spreadNumbers1);
// false

/*
The arrays contain the same values, but they are different
array objects.

Therefore, modifying the new array's elements does not
modify the original array when those elements are primitives.
*/

spreadCopy1.push(50);

console.log(spreadCopy1);
// [10, 20, 30, 40, 50]

console.log(spreadNumbers1);
// [10, 20, 30, 40]


/*
--------------------------------------------------------
12.2 COMBINING ARRAYS
--------------------------------------------------------

The spread operator allows you to combine multiple arrays.
*/

const spreadArray1 = [1, 2, 3];
const spreadArray2 = [4, 5, 6];

const combinedArray1 = [...spreadArray1, ...spreadArray2];

console.log(combinedArray1);
// [1, 2, 3, 4, 5, 6]


/*
You can also add elements before, between, or after arrays.
*/

const spreadArray3 = [1, 2, 3];
const spreadArray4 = [7, 8, 9];

const combinedArray2 = [
    0,
    ...spreadArray3,
    4,
    5,
    6,
    ...spreadArray4,
    10
];

console.log(combinedArray2);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*
--------------------------------------------------------
12.3 ADDING ELEMENTS WITHOUT MODIFYING THE ORIGINAL ARRAY
--------------------------------------------------------

Suppose you want to add an element to the beginning
or end of an array without changing the original array.

You can use the spread operator.
*/

const spreadNumbers2 = [20, 30, 40];

const addToBeginning1 = [10, ...spreadNumbers2];

const addToEnd1 = [...spreadNumbers2, 50];

console.log(addToBeginning1);
// [10, 20, 30, 40]

console.log(addToEnd1);
// [20, 30, 40, 50]

console.log(spreadNumbers2);
// [20, 30, 40]


/*
--------------------------------------------------------
12.4 PASSING ARRAY ELEMENTS AS FUNCTION ARGUMENTS
--------------------------------------------------------

The spread operator expands an array into individual
function arguments.
*/

const spreadNumbers3 = [10, 20, 30];

console.log(Math.max(...spreadNumbers3));
// 30

console.log(Math.min(...spreadNumbers3));
// 10

/*
Without spread:

Math.max([10, 20, 30])

This does not pass three separate numeric arguments.


--------------------------------------------------------
12.5 SPREAD OPERATOR WITH STRINGS
--------------------------------------------------------

Strings are iterable, so their characters can be expanded
into an array.
*/

const spreadString1 = "JavaScript";

const spreadLetters1 = [...spreadString1];

console.log(spreadLetters1);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


/*
--------------------------------------------------------
12.6 IMPORTANT: SPREAD CREATES A SHALLOW COPY
--------------------------------------------------------

The spread operator creates a new outer array, but nested
objects and arrays are still shared by reference.
*/

const spreadOriginal1 = [
    { name: "Aman" },
    { name: "Rahul" }
];

const spreadCopy2 = [...spreadOriginal1];

spreadCopy2[0].name = "Prashant";

console.log(spreadOriginal1[0].name);
// "Prashant"

/*
Why?

Both arrays reference the same object at index 0.

The outer arrays are different, but the nested object
is shared.

We will explore this in Section 16.


========================================================
13. ARRAY DESTRUCTURING
========================================================

Array destructuring allows you to extract array elements
into individual variables.

Instead of writing:

const first = array[0];
const second = array[1];

You can write:

const [first, second] = array;


--------------------------------------------------------
13.1 BASIC DESTRUCTURING
--------------------------------------------------------
*/

const destructureNumbers1 = [10, 20, 30];

const [firstNumber1, secondNumber1, thirdNumber1] =
    destructureNumbers1;

console.log(firstNumber1);
// 10

console.log(secondNumber1);
// 20

console.log(thirdNumber1);
// 30


/*
--------------------------------------------------------
13.2 SKIPPING ELEMENTS
--------------------------------------------------------

You can skip elements by leaving empty positions.
*/

const destructureNumbers2 = [10, 20, 30, 40];

const [firstNumber2, , thirdNumber2] = destructureNumbers2;

console.log(firstNumber2);
// 10

console.log(thirdNumber2);
// 30


/*
--------------------------------------------------------
13.3 DEFAULT VALUES
--------------------------------------------------------

If an array element is undefined, a default value can
be assigned.

Example:
*/

const destructureNumbers3 = [10];

const [numberA1, numberB1 = 20] = destructureNumbers3;

console.log(numberA1);
// 10

console.log(numberB1);
// 20

/*
The default is used when the corresponding value is undefined.

It is not used when the value is null.
*/

const destructureNumbers4 = [10, null];

const [numberA2, numberB2 = 20] = destructureNumbers4;

console.log(numberB2);
// null


/*
--------------------------------------------------------
13.4 REST ELEMENT
--------------------------------------------------------

The rest element (...) collects the remaining elements
into a new array.

IMPORTANT:

The rest element must be the last element in the
destructuring pattern.
*/

const destructureNumbers5 = [10, 20, 30, 40, 50];

const [firstNumber3, secondNumber3, ...remainingNumbers1] =
    destructureNumbers5;

console.log(firstNumber3);
// 10

console.log(secondNumber3);
// 20

console.log(remainingNumbers1);
// [30, 40, 50]


/*
--------------------------------------------------------
13.5 SWAPPING VARIABLES
--------------------------------------------------------

Destructuring makes it easy to swap two variables.
*/

let valueA1 = 10;
let valueB1 = 20;

[valueA1, valueB1] = [valueB1, valueA1];

console.log(valueA1);
// 20

console.log(valueB1);
// 10


/*
--------------------------------------------------------
13.6 DESTRUCTURING FUNCTION RESULTS
--------------------------------------------------------

A function can return an array, and you can destructure
its returned values.
*/

function getCoordinates1() {
    return [28.6139, 77.2090];
}

const [latitude1, longitude1] = getCoordinates1();

console.log(latitude1);
// 28.6139

console.log(longitude1);
// 77.209


/*
--------------------------------------------------------
13.7 NESTED ARRAY DESTRUCTURING
--------------------------------------------------------
*/

const nestedArray1 = [10, [20, 30]];

const [nestedFirst1, [nestedSecond1, nestedThird1]] =
    nestedArray1;

console.log(nestedFirst1);
// 10

console.log(nestedSecond1);
// 20

console.log(nestedThird1);
// 30


/*
========================================================
14. IMPORTANT MODERN ARRAY METHODS
========================================================

Modern JavaScript provides methods that perform common
array operations without modifying the original array.

Important methods:

1. toSorted()
2. toReversed()
3. toSpliced()
4. with()


--------------------------------------------------------
14.1 toSorted()
--------------------------------------------------------

toSorted() returns a sorted copy of an array.

Unlike sort(), it does not modify the original array.
*/

const modernNumbers1 = [50, 10, 40, 20, 30];

const modernSorted1 = modernNumbers1.toSorted(
    (a, b) => a - b
);

console.log(modernSorted1);
// [10, 20, 30, 40, 50]

console.log(modernNumbers1);
// [50, 10, 40, 20, 30]


/*
Compare:

sort()      -> Modifies the original array.
toSorted()  -> Returns a sorted copy.


--------------------------------------------------------
14.2 toReversed()
--------------------------------------------------------

toReversed() returns a reversed copy of an array.
*/

const modernNumbers2 = [10, 20, 30, 40];

const modernReversed1 = modernNumbers2.toReversed();

console.log(modernReversed1);
// [40, 30, 20, 10]

console.log(modernNumbers2);
// [10, 20, 30, 40]


/*
Compare:

reverse()      -> Modifies the original array.
toReversed()   -> Returns a reversed copy.


--------------------------------------------------------
14.3 toSpliced()
--------------------------------------------------------

toSpliced() is the non-mutating version of splice().

It returns a new array with the requested elements
removed, replaced, or inserted.

Example: Remove Elements
*/

const modernNumbers3 = [10, 20, 30, 40, 50];

const modernSpliced1 = modernNumbers3.toSpliced(1, 2);

console.log(modernSpliced1);
// [10, 40, 50]

console.log(modernNumbers3);
// [10, 20, 30, 40, 50]


/*
Example: Insert Elements
*/

const modernNumbers4 = [10, 20, 40, 50];

const modernSpliced2 = modernNumbers4.toSpliced(2, 0, 25, 30);

console.log(modernSpliced2);
// [10, 20, 25, 30, 40, 50]


/*
Example: Replace Elements
*/

const modernNumbers5 = [10, 20, 30, 40];

const modernSpliced3 = modernNumbers5.toSpliced(1, 2, 99);

console.log(modernSpliced3);
// [10, 99, 40]


/*
--------------------------------------------------------
14.4 with()
--------------------------------------------------------

with() returns a new array with the element at a specified
index replaced by a new value.

It does not modify the original array.

Example:
*/

const modernNumbers6 = [10, 20, 30, 40];

const modernUpdated1 = modernNumbers6.with(1, 99);

console.log(modernUpdated1);
// [10, 99, 30, 40]

console.log(modernNumbers6);
// [10, 20, 30, 40]


/*
Negative indexes can be used with with().
*/

const modernNumbers7 = [10, 20, 30, 40];

const modernUpdated2 = modernNumbers7.with(-1, 99);

console.log(modernUpdated2);
// [10, 20, 30, 99]


/*
IMPORTANT:

with() requires an index within the array's valid index range.
It throws a RangeError when the index is out of range.

Compare:

array[index] = value
    -> Directly modifies the original array.

array.with(index, value)
    -> Returns a new array.


--------------------------------------------------------
14.5 QUICK COMPARISON
--------------------------------------------------------

sort()
    Sorts the original array.

toSorted()
    Returns a sorted copy.

reverse()
    Reverses the original array.

toReversed()
    Returns a reversed copy.

splice()
    Inserts, removes, or replaces elements in the original array.

toSpliced()
    Returns a modified copy.

Direct assignment:
array[index] = value
    Replaces an element in the original array.

with()
    Returns a copy with an element replaced.


IMPORTANT COMPATIBILITY NOTE:

toSorted(), toReversed(), toSpliced(), and with() are
modern JavaScript methods.

Use a sufficiently recent Node.js or browser runtime
that supports these methods.


========================================================
15. MUTABLE VS. NON-MUTATING ARRAY METHODS
========================================================

A mutating method changes the original array.

A non-mutating method returns a result without changing
the original array itself.

This distinction is particularly important in React,
state management, and functional programming.


--------------------------------------------------------
15.1 MUTATING METHODS
--------------------------------------------------------

Common mutating methods:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()

These methods can modify the original array.

Example:
*/

const mutableNumbers1 = [10, 20, 30];

mutableNumbers1.push(40);

console.log(mutableNumbers1);
// [10, 20, 30, 40]

mutableNumbers1.reverse();

console.log(mutableNumbers1);
// [40, 30, 20, 10]


/*
--------------------------------------------------------
15.2 NON-MUTATING METHODS
--------------------------------------------------------

Common non-mutating methods:

map()
filter()
slice()
concat()
toSorted()
toReversed()
toSpliced()
with()
flat()
flatMap()

These methods return a result without directly modifying
the original array.

Example:
*/

const immutableNumbers1 = [10, 20, 30];

const immutableDoubled1 = immutableNumbers1.map(
    number => number * 2
);

console.log(immutableDoubled1);
// [20, 40, 60]

console.log(immutableNumbers1);
// [10, 20, 30]


/*
IMPORTANT:

Non-mutating does not automatically mean deep copying.

For example, map() may return references to existing objects.

If an array contains objects, those objects can still
be shared between the original and resulting arrays.


--------------------------------------------------------
15.3 WHY THIS MATTERS IN REACT
--------------------------------------------------------

React state should generally be updated immutably.

Incorrect approach:
*/

const reactOriginal1 = [10, 20, 30];

/*
In a React component, this would be problematic:

items.push(40);
setItems(items);

The array reference remains the same.

React may not detect the state update as expected because
the same array object is being supplied.

Correct approach:

setItems(previousItems => [...previousItems, 40]);

For removal:

setItems(previousItems =>
    previousItems.filter((_, index) => index !== 1)
);

For updating an element:

setItems(previousItems =>
    previousItems.map((item, index) =>
        index === 1 ? 99 : item
    )
);

These are examples of React state updates.
The following examples demonstrate the underlying
JavaScript operations.
*/

const reactOriginal2 = [10, 20, 30];

const reactAdded1 = [...reactOriginal2, 40];

console.log(reactAdded1);
// [10, 20, 30, 40]

const reactRemoved1 = reactOriginal2.filter(
    (_, index) => index !== 1
);

console.log(reactRemoved1);
// [10, 30]

const reactUpdated1 = reactOriginal2.map(
    (item, index) => index === 1 ? 99 : item
);

console.log(reactUpdated1);
// [10, 99, 30]

console.log(reactOriginal2);
// [10, 20, 30]


/*
--------------------------------------------------------
15.4 REACT ARRAY UPDATE PATTERNS
--------------------------------------------------------

ADD AN ELEMENT:

setItems(previousItems => [
    ...previousItems,
    newItem
]);


REMOVE AN ELEMENT BY INDEX:

setItems(previousItems =>
    previousItems.filter((_, index) => index !== targetIndex)
);


UPDATE AN ELEMENT:

setItems(previousItems =>
    previousItems.map((item, index) =>
        index === targetIndex
            ? updatedItem
            : item
    )
);


SORT WITHOUT MUTATING STATE:

setItems(previousItems =>
    previousItems.toSorted((a, b) => a - b)
);


IMPORTANT:

These patterns create new arrays, but when updating arrays
of objects, make sure you also avoid mutating the objects
that should remain unchanged.


========================================================
16. SHALLOW COPY VS. REFERENCE
========================================================

Understanding references is essential when working with arrays
that contain objects or nested arrays.


--------------------------------------------------------
16.1 ARRAY ASSIGNMENT DOES NOT CREATE A COPY
--------------------------------------------------------

Example:
*/

const referenceArray1 = [10, 20, 30];

const referenceArray2 = referenceArray1;

console.log(referenceArray1 === referenceArray2);
// true

/*
Both variables refer to the SAME array object.

Therefore, modifying the array through one variable
also affects what you observe through the other variable.
*/

referenceArray2.push(40);

console.log(referenceArray1);
// [10, 20, 30, 40]

console.log(referenceArray2);
// [10, 20, 30, 40]


/*
--------------------------------------------------------
16.2 COPYING AN ARRAY USING SPREAD
--------------------------------------------------------

The spread operator creates a new outer array.
*/

const referenceArray3 = [10, 20, 30];

const referenceArray4 = [...referenceArray3];

console.log(referenceArray3 === referenceArray4);
// false

referenceArray4.push(40);

console.log(referenceArray3);
// [10, 20, 30]

console.log(referenceArray4);
// [10, 20, 30, 40]


/*
--------------------------------------------------------
16.3 WHAT IS A SHALLOW COPY?
--------------------------------------------------------

A shallow copy duplicates only the outer array.

Nested objects and arrays remain shared by reference.

Example:
*/

const shallowOriginal1 = [
    { name: "Aman" },
    { name: "Rahul" }
];

const shallowCopy1 = [...shallowOriginal1];

console.log(shallowOriginal1 === shallowCopy1);
// false

console.log(shallowOriginal1[0] === shallowCopy1[0]);
// true

/*
The outer arrays are different.

However, the first object is shared.
*/

shallowCopy1[0].name = "Prashant";

console.log(shallowOriginal1[0].name);
// "Prashant"

/*
The original array's first object was modified because
both arrays refer to the same nested object.


--------------------------------------------------------
16.4 COPYING AN ARRAY OF OBJECTS
--------------------------------------------------------

If you need to update an object's properties without
modifying the corresponding object in the original array,
copy that object as well.
*/

const objectOriginal1 = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" }
];

const objectUpdated1 = objectOriginal1.map(user => {
    if (user.id === 1) {
        return {
            ...user,
            name: "Prashant"
        };
    }

    return user;
});

console.log(objectUpdated1);

/*
The new array is different.

The updated user object is also different.

Objects that were not updated are still shared by reference.
That is usually fine when those objects are treated as immutable.


--------------------------------------------------------
16.5 DEEP COPY
--------------------------------------------------------

A deep copy duplicates nested data rather than sharing
the same nested object references.

For supported data types, structuredClone() can create
a deep copy.

Example:
*/

const deepOriginal1 = {
    name: "Prashant",
    address: {
        city: "Delhi"
    },
    skills: ["JavaScript", "React"]
};

const deepCopy1 = structuredClone(deepOriginal1);

deepCopy1.address.city = "Gurugram";
deepCopy1.skills.push("Node.js");

console.log(deepOriginal1.address.city);
// "Delhi"

console.log(deepOriginal1.skills);
// ["JavaScript", "React"]

console.log(deepCopy1.address.city);
// "Gurugram"

console.log(deepCopy1.skills);
// ["JavaScript", "React", "Node.js"]

/*
IMPORTANT:

structuredClone() supports many common data types, but it
cannot clone every possible JavaScript value, such as functions.

For ordinary API data containing plain objects, arrays,
strings, numbers, booleans, and null, it is often useful.

Do not deep-clone everything automatically.
Choose the copying strategy appropriate to your data.


========================================================
END OF PART 3
========================================================

NEXT PART:

17. Other Useful Array Methods and Properties
18. Array Methods for DSA
19. Time Complexity
20. Practice Questions and Solutions
21. What to Learn First

========================================================
*/

/*
========================================================
17. OTHER USEFUL ARRAY METHODS AND PROPERTIES
========================================================

In addition to the commonly used methods, JavaScript provides
several other methods that are useful in everyday development
and coding interviews.

Important methods and properties:

1. concat()
2. fill()
3. Array.isArray()
4. entries()
5. keys()
6. values()
7. flat()
8. Array.from()
9. Array.of()
10. length


--------------------------------------------------------
17.1 concat()
--------------------------------------------------------

concat() combines two or more arrays and returns a new array.

It does not modify the original arrays.

Syntax:

array1.concat(array2, array3, ...);

Example:
*/

const concatArray1 = [1, 2, 3];
const concatArray2 = [4, 5, 6];

const concatenatedArray1 = concatArray1.concat(concatArray2);

console.log(concatenatedArray1);
// [1, 2, 3, 4, 5, 6]

console.log(concatArray1);
// [1, 2, 3]

console.log(concatArray2);
// [4, 5, 6]


/*
You can concatenate multiple arrays.
*/

const concatArray3 = [1, 2];
const concatArray4 = [3, 4];
const concatArray5 = [5, 6];

const concatenatedArray2 = concatArray3.concat(
    concatArray4,
    concatArray5
);

console.log(concatenatedArray2);
// [1, 2, 3, 4, 5, 6]


/*
You can also add individual values.
*/

const concatArray6 = [10, 20];

const concatenatedArray3 = concatArray6.concat(30, 40);

console.log(concatenatedArray3);
// [10, 20, 30, 40]


/*
concat() VS. SPREAD OPERATOR

Both can combine arrays.

Using concat():
*/

const concatArray7 = [1, 2];
const concatArray8 = [3, 4];

const concatResult1 = concatArray7.concat(concatArray8);

console.log(concatResult1);
// [1, 2, 3, 4]


/*
Using spread:
*/

const concatArray9 = [1, 2];
const concatArray10 = [3, 4];

const concatResult2 = [...concatArray9, ...concatArray10];

console.log(concatResult2);
// [1, 2, 3, 4]

/*
Both are valid.

The spread operator is often convenient when constructing
a new array with additional elements.


--------------------------------------------------------
17.2 fill()
--------------------------------------------------------

fill() fills part or all of an array with a specified value.

IMPORTANT:

fill() modifies the original array.

Syntax:

array.fill(value, start, end);

value:
The value to use.

start:
The index at which filling begins. Defaults to 0.

end:
The index at which filling stops. Defaults to array.length.

The end index is excluded.

Example:
*/

const fillArray1 = [1, 2, 3, 4, 5];

fillArray1.fill(0);

console.log(fillArray1);
// [0, 0, 0, 0, 0]


/*
FILL FROM A SPECIFIC INDEX
*/

const fillArray2 = [1, 2, 3, 4, 5];

fillArray2.fill(0, 2);

console.log(fillArray2);
// [1, 2, 0, 0, 0]


/*
FILL BETWEEN TWO INDEXES
*/

const fillArray3 = [1, 2, 3, 4, 5];

fillArray3.fill(0, 1, 4);

console.log(fillArray3);
// [1, 0, 0, 0, 5]

/*
Explanation:

fill(0, 1, 4)

Start at index 1.
Stop before index 4.

Indexes 1, 2, and 3 are filled with 0.


--------------------------------------------------------
IMPORTANT: fill() WITH OBJECTS
--------------------------------------------------------

Be careful when filling an array with objects.

Example:
*/

const fillArray4 = Array(3).fill({ count: 0 });

console.log(fillArray4);

/*
All three positions refer to the SAME object.

Changing one object's property affects the object observed
through every position.
*/

fillArray4[0].count = 10;

console.log(fillArray4[1].count);
// 10

console.log(fillArray4[2].count);
// 10

/*
If you need a separate object at each position, use
Array.from() with a mapping function.
*/

const fillArray5 = Array.from(
    { length: 3 },
    () => ({ count: 0 })
);

fillArray5[0].count = 10;

console.log(fillArray5[0].count);
// 10

console.log(fillArray5[1].count);
// 0

console.log(fillArray5[2].count);
// 0


/*
--------------------------------------------------------
17.3 Array.isArray()
--------------------------------------------------------

Array.isArray() checks whether a value is an array.

It returns true or false.

Example:
*/

const isArrayValue1 = [1, 2, 3];
const isArrayValue2 = { name: "Prashant" };
const isArrayValue3 = "Hello";
const isArrayValue4 = null;

console.log(Array.isArray(isArrayValue1));
// true

console.log(Array.isArray(isArrayValue2));
// false

console.log(Array.isArray(isArrayValue3));
// false

console.log(Array.isArray(isArrayValue4));
// false

/*
Why not use typeof?

Because:
*/

console.log(typeof [1, 2, 3]);
// "object"

/*
typeof returns "object" for arrays.

Therefore, use Array.isArray() when you need to verify
whether a value is an array.


--------------------------------------------------------
17.4 entries()
--------------------------------------------------------

entries() returns an iterator containing pairs of:

[index, value]

Example:
*/

const entriesArray1 = ["Apple", "Banana", "Mango"];

for (const [index, value] of entriesArray1.entries()) {
    console.log(index, value);
}

/*
Output:

0 "Apple"
1 "Banana"
2 "Mango"
*/


/*
entries() is useful when you need both the index and
the element while iterating over an array.


--------------------------------------------------------
17.5 keys()
--------------------------------------------------------

keys() returns an iterator containing the array's indexes.

Example:
*/

const keysArray1 = ["Apple", "Banana", "Mango"];

for (const index of keysArray1.keys()) {
    console.log(index);
}

/*
Output:

0
1
2
*/


/*
--------------------------------------------------------
17.6 values()
--------------------------------------------------------

values() returns an iterator containing the array's values.

Example:
*/

const valuesArray1 = ["Apple", "Banana", "Mango"];

for (const value of valuesArray1.values()) {
    console.log(value);
}

/*
Output:

Apple
Banana
Mango
*/


/*
--------------------------------------------------------
17.7 length
--------------------------------------------------------

The length property returns the number of array elements
up to the array's last index, plus one.

Example:
*/

const lengthArray1 = [10, 20, 30, 40];

console.log(lengthArray1.length);
// 4

/*
You can also modify the length property.

Reducing length removes elements from the end.
*/

const lengthArray2 = [10, 20, 30, 40, 50];

lengthArray2.length = 3;

console.log(lengthArray2);
// [10, 20, 30]


/*
Setting length to 0 removes all elements.
*/

const lengthArray3 = [10, 20, 30];

lengthArray3.length = 0;

console.log(lengthArray3);
// []


/*
IMPORTANT:

Increasing length does not necessarily create actual elements.

It can create empty slots.
*/

const lengthArray4 = [10, 20];

lengthArray4.length = 5;

console.log(lengthArray4);
// [10, 20, <3 empty items>]

console.log(lengthArray4.length);
// 5


/*
========================================================
18. ARRAY METHODS FOR DSA
========================================================

When solving Data Structures and Algorithms problems,
you should know which array method is appropriate
for a particular task.

Important methods and techniques:

1. push()
2. pop()
3. sort()
4. reverse()
5. slice()
6. splice()
7. map()
8. filter()
9. reduce()
10. includes()
11. indexOf()
12. find()
13. findIndex()
14. some()
15. every()
16. Set
17. Spread operator
18. Two-pointer technique
19. Sliding window technique
20. Prefix sums


--------------------------------------------------------
18.1 REMOVE DUPLICATES USING SET
--------------------------------------------------------

A Set stores unique values.

Converting an array into a Set removes duplicate primitive
values.

Example:
*/

const dsaArray1 = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArray1 = [...new Set(dsaArray1)];

console.log(uniqueArray1);
// [1, 2, 3, 4, 5]

/*
Explanation:

Step 1:
new Set(dsaArray1) creates a Set of unique values.

Step 2:
The spread operator converts the Set back into an array.

Important:
Set uses value equality rules appropriate to its elements.
For objects, separately created objects are not considered
equal merely because they have identical properties.


--------------------------------------------------------
18.2 FIND THE MAXIMUM AND MINIMUM
--------------------------------------------------------

For ordinary numeric arrays, Math.max() and Math.min()
can find the maximum and minimum.
*/

const dsaArray2 = [10, 5, 30, 20, 50];

console.log(Math.max(...dsaArray2));
// 50

console.log(Math.min(...dsaArray2));
// 5

/*
For very large arrays, spreading every element into a
function can exceed the runtime's argument limits.

A loop or reduce() avoids passing every element as an
individual function argument.

Example using a loop:
*/

const dsaArray3 = [10, 5, 30, 20, 50];

let maximum2 = -Infinity;
let minimum2 = Infinity;

for (const number of dsaArray3) {
    if (number > maximum2) {
        maximum2 = number;
    }

    if (number < minimum2) {
        minimum2 = number;
    }
}

console.log(maximum2);
// 50

console.log(minimum2);
// 5


/*
--------------------------------------------------------
18.3 FIND THE SECOND-LARGEST DISTINCT ELEMENT
--------------------------------------------------------

This problem frequently appears in coding interviews.

Approach:

1. Track the largest value.
2. Track the second-largest distinct value.
3. Update them while traversing the array.

Example:
*/

const dsaArray4 = [10, 20, 5, 20, 15, 30];

let largest1 = -Infinity;
let secondLargest1 = -Infinity;

for (const number of dsaArray4) {
    if (number > largest1) {
        secondLargest1 = largest1;
        largest1 = number;
    } else if (
        number < largest1 &&
        number > secondLargest1
    ) {
        secondLargest1 = number;
    }
}

console.log(largest1);
// 30

console.log(secondLargest1);
// 20

/*
This approach finds the second-largest DISTINCT value.

If the array contains fewer than two distinct numeric values,
secondLargest1 remains -Infinity. In production code, handle
that case explicitly.


Time complexity: O(n)
Space complexity: O(1)


--------------------------------------------------------
18.4 TWO-SUM USING A MAP
--------------------------------------------------------

Problem:

Given an array of numbers and a target, return the indexes
of two elements whose sum equals the target.

Example:

Array = [2, 7, 11, 15]
Target = 9

The answer is [0, 1] because 2 + 7 = 9.

Approach:

1. Traverse the array.
2. Calculate the complement: target - currentNumber.
3. Check whether the complement has already been seen.
4. If it has, return the two indexes.
5. Otherwise, store the current number and its index.

Example:
*/

function twoSum1(numbers, target) {
    const seen = new Map();

    for (let index = 0; index < numbers.length; index++) {
        const currentNumber = numbers[index];
        const complement = target - currentNumber;

        if (seen.has(complement)) {
            return [seen.get(complement), index];
        }

        seen.set(currentNumber, index);
    }

    return [];
}

console.log(twoSum1([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum1([3, 2, 4], 6));
// [1, 2]

/*
Time complexity: O(n) on average.
Space complexity: O(n).

This is generally more efficient than checking every possible
pair using two nested loops.


--------------------------------------------------------
18.5 CHECK WHETHER AN ARRAY IS SORTED
--------------------------------------------------------

An array is sorted in ascending order if each element is
less than or equal to the next element.

Example:
*/

function isSortedAscending1(numbers) {
    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] < numbers[index - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isSortedAscending1([1, 2, 3, 4, 5]));
// true

console.log(isSortedAscending1([1, 3, 2, 4, 5]));
// false

/*
Time complexity: O(n)
Space complexity: O(1)


--------------------------------------------------------
18.6 ROTATE AN ARRAY TO THE RIGHT
--------------------------------------------------------

Problem:

Rotate an array to the right by k positions.

Example:

Input:
[1, 2, 3, 4, 5, 6, 7]
k = 3

Output:
[5, 6, 7, 1, 2, 3, 4]

One simple approach uses slice() and spread.
*/

function rotateRight1(numbers, k) {
    const length = numbers.length;

    if (length === 0) {
        return [];
    }

    k = ((k % length) + length) % length;

    return [
        ...numbers.slice(length - k),
        ...numbers.slice(0, length - k)
    ];
}

console.log(rotateRight1([1, 2, 3, 4, 5, 6, 7], 3));
// [5, 6, 7, 1, 2, 3, 4]

/*
The modulo calculation also handles negative k values
by normalizing them into the range 0 through length - 1.

Time complexity: O(n)
Space complexity: O(n)


--------------------------------------------------------
18.7 FREQUENCY COUNTING
--------------------------------------------------------

Frequency counting helps solve problems involving:

- Duplicate elements
- Character frequencies
- Anagrams
- Most frequent elements
- Counting occurrences

Example:
*/

function countFrequencies1(numbers) {
    const frequency = new Map();

    for (const number of numbers) {
        frequency.set(
            number,
            (frequency.get(number) || 0) + 1
        );
    }

    return frequency;
}

const frequencies1 = countFrequencies1(
    [1, 2, 2, 3, 3, 3, 4]
);

console.log(frequencies1);

/*
The Map contains:

1 -> 1
2 -> 2
3 -> 3
4 -> 1


Time complexity: O(n) on average.
Space complexity: O(n).


--------------------------------------------------------
18.8 TWO-POINTER TECHNIQUE
--------------------------------------------------------

The two-pointer technique uses two indexes to traverse
an array, often from opposite ends or at different speeds.

It is commonly used for:

- Reversing arrays
- Finding pairs in sorted arrays
- Removing duplicates from sorted arrays
- Checking palindromes
- Partitioning arrays

Example: Reverse an Array In Place
*/

function reverseArray1(numbers) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const temporary = numbers[left];

        numbers[left] = numbers[right];
        numbers[right] = temporary;

        left++;
        right--;
    }

    return numbers;
}

console.log(reverseArray1([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

/*
Time complexity: O(n)
Auxiliary space complexity: O(1)

The algorithm modifies the input array.


--------------------------------------------------------
18.9 SLIDING WINDOW TECHNIQUE
--------------------------------------------------------

The sliding window technique is useful when a problem asks
about contiguous subarrays or substrings.

Example:

Find the maximum sum of any contiguous subarray of length k.

Input:
[2, 1, 5, 1, 3, 2]
k = 3

Contiguous windows:

[2, 1, 5] -> Sum 8
[1, 5, 1] -> Sum 7
[5, 1, 3] -> Sum 9
[1, 3, 2] -> Sum 6

Answer = 9

Example:
*/

function maxWindowSum1(numbers, k) {
    if (k <= 0 || k > numbers.length) {
        return null;
    }

    let windowSum = 0;

    for (let index = 0; index < k; index++) {
        windowSum += numbers[index];
    }

    let maximumSum = windowSum;

    for (let index = k; index < numbers.length; index++) {
        windowSum += numbers[index];
        windowSum -= numbers[index - k];

        maximumSum = Math.max(maximumSum, windowSum);
    }

    return maximumSum;
}

console.log(maxWindowSum1([2, 1, 5, 1, 3, 2], 3));
// 9

/*
Time complexity: O(n)
Space complexity: O(1)

The important idea is that we do not recalculate the
entire sum for every window.

Instead, we subtract the element leaving the window and
add the element entering the window.


========================================================
19. TIME COMPLEXITY OF ARRAY OPERATIONS
========================================================

Understanding time complexity helps you choose appropriate
operations when solving DSA problems.

Let n represent the number of elements in an array.


--------------------------------------------------------
19.1 COMMON OPERATIONS
--------------------------------------------------------

Operation                         Typical Complexity

Access by index                   O(1)
Update by index                   O(1)
Search with includes()             O(n)
Search with indexOf()              O(n)
Search with find()                 O(n)
Search with findIndex()            O(n)
push()                             Amortized O(1)
pop()                              O(1)
shift()                            O(n)
unshift()                          O(n)
splice()                           O(n) in general
slice()                            O(k) for k copied elements
map()                              O(n)
filter()                           O(n)
forEach()                          O(n)
reduce()                           O(n)
some()                             O(n) worst case
every()                            O(n) worst case
sort()                             Usually O(n log n)
reverse()                          O(n)
toReversed()                       O(n)
concat()                           Depends on total output size
flat()                             Depends on input and output size

These are typical complexity estimates, not guarantees
for every implementation or every input.


--------------------------------------------------------
19.2 WHY IS ACCESS BY INDEX O(1)?
--------------------------------------------------------

Example:
*/

const complexityArray1 = [10, 20, 30, 40, 50];

console.log(complexityArray1[3]);
// 40

/*
The runtime can directly access the value associated with
index 3.

It does not need to scan the preceding elements.


--------------------------------------------------------
19.3 WHY IS SEARCHING O(n)?
--------------------------------------------------------

Example:
*/

const complexityArray2 = [10, 20, 30, 40, 50];

console.log(complexityArray2.includes(50));
// true

/*
In the worst case, the method may need to inspect every
element before determining whether the value exists.

Therefore, searching is generally O(n).


--------------------------------------------------------
19.4 WHY IS push() AMORTIZED O(1)?
--------------------------------------------------------

Appending an element is generally efficient.

However, a dynamic array sometimes needs to allocate
additional storage and move existing elements.

Most appends are O(1), while occasional resizing operations
may take O(n).

Across many append operations, the average cost per operation
is generally O(1), which is why we say amortized O(1).


--------------------------------------------------------
19.5 WHY ARE shift() AND unshift() O(n)?
--------------------------------------------------------

Example:
*/

const complexityArray3 = [10, 20, 30, 40, 50];

complexityArray3.shift();

console.log(complexityArray3);
// [20, 30, 40, 50]

/*
Removing the first element can require the remaining
elements to move to their new indexes.

This can involve work proportional to the array's length.


========================================================
20. PRACTICE QUESTIONS
========================================================

Try solving these questions before looking at the solutions.

QUESTION 1:
Find the sum of all elements in an array.

QUESTION 2:
Find the maximum element in an array.

QUESTION 3:
Return a new array containing only even numbers.

QUESTION 4:
Return a new array containing the squares of all numbers.

QUESTION 5:
Count how many times a given number appears in an array.

QUESTION 6:
Remove duplicate primitive values from an array.

QUESTION 7:
Find the first number greater than 10.

QUESTION 8:
Check whether every element is positive.

QUESTION 9:
Reverse an array without using reverse().

QUESTION 10:
Find the second-largest distinct number.


--------------------------------------------------------
SOLUTION 1: SUM OF ALL ELEMENTS
--------------------------------------------------------
*/

function practiceSum1(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(practiceSum1([1, 2, 3, 4, 5]));
// 15


/*
--------------------------------------------------------
SOLUTION 2: FIND THE MAXIMUM
--------------------------------------------------------
*/

function practiceMaximum1(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let maximum = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] > maximum) {
            maximum = numbers[index];
        }
    }

    return maximum;
}

console.log(practiceMaximum1([10, 50, 20, 80, 30]));
// 80


/*
--------------------------------------------------------
SOLUTION 3: FILTER EVEN NUMBERS
--------------------------------------------------------
*/

function practiceEvenNumbers1(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

console.log(practiceEvenNumbers1([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]


/*
--------------------------------------------------------
SOLUTION 4: SQUARE EVERY NUMBER
--------------------------------------------------------
*/

function practiceSquares1(numbers) {
    return numbers.map(number => number * number);
}

console.log(practiceSquares1([1, 2, 3, 4, 5]));
// [1, 4, 9, 16, 25]


/*
--------------------------------------------------------
SOLUTION 5: COUNT OCCURRENCES
--------------------------------------------------------
*/

function practiceCount1(numbers, target) {
    return numbers.reduce((count, number) => {
        return count + (number === target ? 1 : 0);
    }, 0);
}

console.log(practiceCount1([1, 2, 2, 3, 2, 4], 2));
// 3


/*
--------------------------------------------------------
SOLUTION 6: REMOVE DUPLICATES
--------------------------------------------------------
*/

function practiceUnique1(numbers) {
    return [...new Set(numbers)];
}

console.log(practiceUnique1([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]


/*
--------------------------------------------------------
SOLUTION 7: FIND THE FIRST NUMBER GREATER THAN 10
--------------------------------------------------------
*/

function practiceFind1(numbers) {
    return numbers.find(number => number > 10);
}

console.log(practiceFind1([3, 7, 12, 15, 20]));
// 12


/*
--------------------------------------------------------
SOLUTION 8: CHECK WHETHER ALL NUMBERS ARE POSITIVE
--------------------------------------------------------
*/

function practicePositive1(numbers) {
    return numbers.every(number => number > 0);
}

console.log(practicePositive1([1, 2, 3, 4]));
// true

console.log(practicePositive1([1, -2, 3, 4]));
// false


/*
--------------------------------------------------------
SOLUTION 9: REVERSE AN ARRAY WITHOUT reverse()
--------------------------------------------------------
*/

function practiceReverse1(numbers) {
    const result = [];

    for (let index = numbers.length - 1; index >= 0; index--) {
        result.push(numbers[index]);
    }

    return result;
}

console.log(practiceReverse1([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

/*
This solution creates a new array.

Time complexity: O(n)
Space complexity: O(n)


--------------------------------------------------------
SOLUTION 10: SECOND-LARGEST DISTINCT NUMBER
--------------------------------------------------------
*/

function practiceSecondLargest1(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const number of numbers) {
        if (number > largest) {
            secondLargest = largest;
            largest = number;
        } else if (
            number < largest &&
            number > secondLargest
        ) {
            secondLargest = number;
        }
    }

    return secondLargest === -Infinity
        ? undefined
        : secondLargest;
}

console.log(practiceSecondLargest1([10, 20, 5, 20, 30]));
// 20

console.log(practiceSecondLargest1([10, 10, 10]));
// undefined


/*
========================================================
21. WHAT SHOULD YOU LEARN FIRST?
========================================================

If you are learning JavaScript for backend development,
React, or DSA, follow this order.


--------------------------------------------------------
LEVEL 1: ARRAY FUNDAMENTALS
--------------------------------------------------------

Learn these first:

1. Creating arrays
2. Indexing
3. length
4. Updating elements
5. push()
6. pop()
7. shift()
8. unshift()
9. includes()
10. indexOf()


--------------------------------------------------------
LEVEL 2: ESSENTIAL ARRAY METHODS
--------------------------------------------------------

Learn these thoroughly:

1. map()
2. filter()
3. reduce()
4. find()
5. findIndex()
6. forEach()
7. some()
8. every()


--------------------------------------------------------
LEVEL 3: ARRAY MANIPULATION
--------------------------------------------------------

Learn:

1. slice()
2. splice()
3. concat()
4. sort()
5. reverse()
6. Spread operator
7. Array destructuring
8. flat()
9. Set
10. Map


--------------------------------------------------------
LEVEL 4: MODERN JAVASCRIPT
--------------------------------------------------------

Learn:

1. toSorted()
2. toReversed()
3. toSpliced()
4. with()
5. Array.from()
6. Array.of()
7. entries()
8. keys()
9. values()


--------------------------------------------------------
LEVEL 5: DSA APPLICATIONS
--------------------------------------------------------

Practice using arrays to solve:

1. Two Sum
2. Remove Duplicates
3. Move Zeroes
4. Best Time to Buy and Sell Stock
5. Maximum Subarray
6. Rotate Array
7. Contains Duplicate
8. Product of Array Except Self
9. Merge Sorted Arrays
10. Three Sum


========================================================
THE FIVE MOST IMPORTANT ARRAY METHODS
========================================================

If you are starting out, focus especially on these five:

1. map()
   Transform every element and return a new array.

2. filter()
   Select elements that satisfy a condition.

3. reduce()
   Accumulate elements into a single result.

4. find()
   Return the first element satisfying a condition.

5. some() and every()
   Check whether at least one or all elements satisfy
   a condition.


========================================================
FINAL REVISION
========================================================

push()       -> Add to the end.
pop()        -> Remove from the end.
shift()      -> Remove from the beginning.
unshift()    -> Add to the beginning.

splice()     -> Modify an array by inserting, removing,
                or replacing elements.
slice()      -> Return a shallow copy of a portion.

map()        -> Transform elements.
filter()     -> Select elements.
reduce()     -> Accumulate elements.
forEach()    -> Perform an action for each element.
flatMap()    -> Map and flatten one level.

find()       -> Find the first matching element.
findIndex()  -> Find the first matching index.
findLast()   -> Find the last matching element.
includes()   -> Check whether a value exists.
indexOf()    -> Find the first matching index.

some()       -> Check whether at least one element matches.
every()      -> Check whether all elements match.

sort()       -> Sort the original array.
toSorted()   -> Return a sorted copy.
reverse()    -> Reverse the original array.
toReversed() -> Return a reversed copy.

concat()     -> Combine arrays.
join()       -> Convert array elements into a string.
flat()       -> Flatten nested arrays.

...          -> Spread iterable elements.
Set          -> Store unique values.
Array.from() -> Create an array from an iterable or
                array-like object.

========================================================
END OF JAVASCRIPT ARRAYS AND ARRAY METHODS
========================================================
*/