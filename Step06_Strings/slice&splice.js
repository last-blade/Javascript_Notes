// ==================================================
// JAVASCRIPT slice() METHOD
// ==================================================

/*

1. WHAT IS slice()?

The slice() method extracts a portion of an array or string
without modifying the original.

Syntax:
array.slice(start, end);

Parameters:
start -> Index where extraction begins (included).
end   -> Index where extraction stops (excluded).

Important:
- Start index is included.
- End index is excluded.
- slice() does not modify the original array.
*/

// ==================================================
// 2. slice() WITH ARRAYS
// ==================================================

let numbers1 = [10, 20, 30, 40, 50];

let result1 = numbers1.slice(1, 4);

console.log(result1);

// Output: [20, 30, 40]

/*
Explanation:

Index:   0   1   2   3   4
Value:  10  20  30  40  50

slice(1, 4) starts at index 1 and stops before index 4.

Therefore, the result is [20, 30, 40].
*/

// ==================================================
// 3. USING ONLY THE START INDEX
// ==================================================

let fruits1 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits1.slice(2));

// Output: ["Mango", "Orange"]

/*
Explanation:

If the end index is omitted, slice() extracts elements
from the start index to the end of the array.
*/

// ==================================================
// 4. USING NEGATIVE INDEXES
// ==================================================

let numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2.slice(-2));

// Output: [40, 50]

/*
Negative indexes count backward from the end.

```
-1 -> 50
-2 -> 40
-3 -> 30
```

*/

// Example with two negative indexes:

let numbers3 = [10, 20, 30, 40, 50];

console.log(numbers3.slice(-4, -1));

// Output: [20, 30, 40]

/*
Explanation:

slice(-4, -1) starts at the fourth element from the end
and stops before the last element.
*/

// ==================================================
// 5. slice() WITH STRINGS
// ==================================================

let text1 = "JavaScript";

console.log(text1.slice(0, 4));

// Output: "Java"

let text2 = "Hello World";

console.log(text2.slice(6));

// Output: "World"

/*
The same rules apply to strings:

```
- Start index is included.
- End index is excluded.
```

*/

// ==================================================
// 6. DOES slice() MODIFY THE ORIGINAL ARRAY?
// ==================================================

let numbers4 = [10, 20, 30, 40, 50];

let result2 = numbers4.slice(1, 3);

console.log(result2);
// Output: [20, 30]

console.log(numbers4);
// Output: [10, 20, 30, 40, 50]

/*
Explanation:

slice() does not modify the original array.
It returns a new array containing the selected elements.

NOTE:
slice() creates a shallow copy. If an array contains objects
or nested arrays, those elements are still shared by reference.
*/

// ==================================================
// 7. slice() WITHOUT ARGUMENTS
// ==================================================

let numbers5 = [10, 20, 30];

let result3 = numbers5.slice();

console.log(result3);

// Output: [10, 20, 30]

/*
Calling slice() without arguments creates a shallow copy
of the array.

The new array is a different array, but object elements
inside it are not deeply copied.
*/

// ==================================================
// 8. DIFFERENCE BETWEEN slice() AND splice()
// ==================================================

/*
slice():
- Extracts elements from an array.
- Does not modify the original array.
- Returns the extracted elements.

splice():
- Can add, remove, or replace elements.
- Modifies the original array.
- Returns the elements that were removed.
*/

// Example of slice():

let numbers6 = [10, 20, 30, 40, 50];

console.log(numbers6.slice(1, 3));
// Output: [20, 30]

console.log(numbers6);
// Output: [10, 20, 30, 40, 50]

// Example of splice():

let numbers7 = [10, 20, 30, 40, 50];

console.log(numbers7.splice(1, 2));
// Output: [20, 30]

console.log(numbers7);
// Output: [10, 40, 50]

/*
Explanation:

slice(1, 3):
Extracts elements at indexes 1 and 2.
The original array remains unchanged.

splice(1, 2):
Removes 2 elements starting at index 1.
The original array is modified.
*/

// ==================================================
// 9. PRACTICE EXAMPLE
// ==================================================

let arr1 = [5, 10, 15, 20, 25, 30];

console.log(arr1.slice(2, 5));
// Output: [15, 20, 25]

console.log(arr1.slice(3));
// Output: [20, 25, 30]

console.log(arr1.slice(-3));
// Output: [20, 25, 30]

console.log(arr1.slice(0, 2));
// Output: [5, 10]

// ==================================================
// 10. IMPORTANT POINTS TO REMEMBER
// ==================================================

/*

1. Array indexes start from 0.

2. slice(start, end) includes the start index but excludes
   the end index.

3. Negative indexes count backward from the end.

4. If the end index is omitted, extraction continues
   to the end of the array or string.

5. Calling slice() without arguments creates a shallow copy.

6. slice() does not modify the original array.

7. slice() works with both arrays and strings.

8. splice() modifies the original array, whereas slice()
   does not.

INTERVIEW TIP:

If asked whether slice() modifies the original array,
the answer is NO.

It returns a new array containing the selected elements,
leaving the original array unchanged.
*/
