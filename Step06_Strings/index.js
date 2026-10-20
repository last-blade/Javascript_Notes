// ============================================================
// JAVASCRIPT STRING METHODS
// ============================================================

/*
WHAT ARE STRING METHODS?

String methods are built-in JavaScript methods used to
manipulate, search, extract, and modify string data.

IMPORTANT:
Strings in JavaScript are immutable.
This means string methods do not modify the original string.
Instead, methods that transform strings return a new string.
*/

// ============================================================
// 1. length
// ============================================================

/*
PURPOSE:
Returns the number of UTF-16 code units in a string.

SYNTAX:
string.length
*/

let str1 = "JavaScript";

console.log(str1.length);

// Output: 10

/*
NOTE:
length is a property, not a method.
Therefore, we use str1.length, not str1.length().
*/

// ============================================================
// 2. toUpperCase()
// ============================================================

/*
PURPOSE:
Converts all lowercase letters to uppercase.
*/

let str2 = "hello world";

console.log(str2.toUpperCase());

// Output: "HELLO WORLD"

// ============================================================
// 3. toLowerCase()
// ============================================================

/*
PURPOSE:
Converts all uppercase letters to lowercase.
*/

let str3 = "HELLO WORLD";

console.log(str3.toLowerCase());

// Output: "hello world"

// ============================================================
// 4. trim()
// ============================================================

/*
PURPOSE:
Removes whitespace from the beginning and end of a string.
It does not remove spaces between words.
*/

let str4 = "   Hello World   ";

console.log(str4.trim());

// Output: "Hello World"

// ============================================================
// 5. trimStart()
// ============================================================

/*
PURPOSE:
Removes whitespace from the beginning of a string.
*/

let str5 = "   Hello World   ";

console.log(str5.trimStart());

// Output: "Hello World   "

// ============================================================
// 6. trimEnd()
// ============================================================

/*
PURPOSE:
Removes whitespace from the end of a string.
*/

let str6 = "   Hello World   ";

console.log(str6.trimEnd());

// Output: "   Hello World"

// ============================================================
// 7. includes()
// ============================================================

/*
PURPOSE:
Checks whether a string contains a particular substring.

RETURNS:
true or false.
*/

let str7 = "JavaScript is awesome";

console.log(str7.includes("JavaScript"));

// Output: true

console.log(str7.includes("Python"));

// Output: false

/*
NOTE:
includes() is case-sensitive.
*/

// ============================================================
// 8. indexOf()
// ============================================================

/*
PURPOSE:
Returns the index of the first occurrence of a substring.

If the substring is not found, it returns -1.
*/

let str8 = "Hello World";

console.log(str8.indexOf("o"));

// Output: 4

console.log(str8.indexOf("World"));

// Output: 6

console.log(str8.indexOf("Java"));

// Output: -1

// ============================================================
// 9. lastIndexOf()
// ============================================================

/*
PURPOSE:
Returns the index of the last occurrence of a substring.
*/

let str9 = "hello hello";

console.log(str9.lastIndexOf("hello"));

// Output: 6

console.log(str9.lastIndexOf("l"));

// Output: 9

// ============================================================
// 10. replace()
// ============================================================

/*
PURPOSE:
Replaces the first matching occurrence of a substring
with another string.

IMPORTANT:
When a string search value is provided, replace() replaces
only the first occurrence.
*/

let str10 = "I like Java. Java is popular.";

console.log(str10.replace("Java", "JavaScript"));

// Output: "I like JavaScript. Java is popular."

// ============================================================
// 11. replaceAll()
// ============================================================

/*
PURPOSE:
Replaces all occurrences of a substring.
*/

let str11 = "Java is fun. Java is powerful.";

console.log(str11.replaceAll("Java", "JavaScript"));

// Output: "JavaScript is fun. JavaScript is powerful."

// ============================================================
// 12. split()
// ============================================================

/*
PURPOSE:
Splits a string into an array using a separator.
*/

let str12 = "apple,banana,mango";

console.log(str12.split(","));

// Output: ["apple", "banana", "mango"]

// Example: Split a string into individual characters.

let str13 = "Hello";

console.log(str13.split(""));

// Output: ["H", "e", "l", "l", "o"]

/*
IMPORTANT:
split("") splits by UTF-16 code units, so it may not correctly
preserve certain Unicode characters such as some emoji.
For Unicode-aware character iteration, Array.from() can help.
*/

// ============================================================
// 13. concat()
// ============================================================

/*
PURPOSE:
Combines two or more strings.
*/

let str14 = "Hello";
let str15 = "World";

console.log(str14.concat(" ", str15));

// Output: "Hello World"

/*
NOTE:
You can also combine strings using the + operator
or template literals.
*/

// ============================================================
// 14. startsWith()
// ============================================================

/*
PURPOSE:
Checks whether a string starts with a specified substring.
*/

let str16 = "JavaScript";

console.log(str16.startsWith("Java"));

// Output: true

console.log(str16.startsWith("Script"));

// Output: false

// ============================================================
// 15. endsWith()
// ============================================================

/*
PURPOSE:
Checks whether a string ends with a specified substring.
*/

let str17 = "app.js";

console.log(str17.endsWith(".js"));

// Output: true

console.log(str17.endsWith(".html"));

// Output: false

// ============================================================
// 16. charAt()
// ============================================================

/*
PURPOSE:
Returns the character at a specified index.
*/

let str18 = "Hello";

console.log(str18.charAt(0));

// Output: "H"

console.log(str18.charAt(1));

// Output: "e"

/*
NOTE:
If the index is outside the valid range, charAt()
returns an empty string.
*/

// ============================================================
// 17. at()
// ============================================================

/*
PURPOSE:
Returns the character at a specified index.
It also supports negative indexes.
*/

let str19 = "JavaScript";

console.log(str19.at(0));

// Output: "J"

console.log(str19.at(-1));

// Output: "t"

console.log(str19.at(-2));

// Output: "p"

/*
NOTE:
Negative indexes count backward from the end.
*/

// ============================================================
// 18. repeat()
// ============================================================

/*
PURPOSE:
Repeats a string a specified number of times.
*/

let str20 = "Hi ";

console.log(str20.repeat(3));

// Output: "Hi Hi Hi "

/*
NOTE:
The repetition count must be non-negative.
A negative count throws a RangeError.
*/

// ============================================================
// 19. padStart()
// ============================================================

/*
PURPOSE:
Adds characters to the beginning of a string until
the specified target length is reached.
*/

let str21 = "5";

console.log(str21.padStart(3, "0"));

// Output: "005"

// ============================================================
// 20. padEnd()
// ============================================================

/*
PURPOSE:
Adds characters to the end of a string until
the specified target length is reached.
*/

let str22 = "5";

console.log(str22.padEnd(3, "0"));

// Output: "500"

// ============================================================
// 21. substring()
// ============================================================

/*
PURPOSE:
Extracts characters between two indexes.

SYNTAX:
string.substring(start, end)

IMPORTANT:

* Start index is included.
* End index is excluded.
* Negative arguments are treated as 0.
  */

let str23 = "JavaScript";

console.log(str23.substring(0, 4));

// Output: "Java"

console.log(str23.substring(4));

// Output: "Script"

// ============================================================
// 22. search()
// ============================================================

/*
PURPOSE:
Searches a string using a regular expression.

RETURNS:
The index of the first match, or -1 if no match is found.
*/

let str24 = "JavaScript is awesome";

console.log(str24.search(/is/));

// Output: 11

console.log(str24.search(/Python/));

// Output: -1

// ============================================================
// 23. match()
// ============================================================

/*
PURPOSE:
Matches a string against a regular expression.
*/

let str25 = "The price is 100 dollars";

console.log(str25.match(/\d+/));

// Output: ["100"]

/*
NOTE:
Without the global flag, match() returns information
about the first match.

With the global flag, it returns an array of all matches.
*/

let str26 = "10 apples and 20 oranges";

console.log(str26.match(/\d+/g));

// Output: ["10", "20"]

// ============================================================
// 24. matchAll()
// ============================================================

/*
PURPOSE:
Returns an iterator containing all regular-expression matches
and their associated details.

A global regular expression is required.
*/

let str27 = "cat bat rat";

let matches = str27.matchAll(/at/g);

console.log(Array.from(matches, match => match[0]));

// Output: ["at", "at", "at"]

// ============================================================
// 25. localeCompare()
// ============================================================

/*
PURPOSE:
Compares two strings according to locale-sensitive
sorting rules.

RETURNS:
A negative number if the string comes before the other.
Zero if they are equivalent for the comparison.
A positive number if the string comes after the other.
*/

console.log("apple".localeCompare("banana") < 0);

// Output: true

/*
NOTE:
The exact numeric return value can vary.
Use the sign of the result rather than expecting -1 or 1.
*/

// ============================================================
// 26. String()
// ============================================================

/*
PURPOSE:
Converts a value into a string.
*/

console.log(String(123));

// Output: "123"

console.log(String(true));

// Output: "true"

console.log(String(null));

// Output: "null"

// ============================================================
// 27. PRACTICAL EXAMPLE
// ============================================================

/*
TASK:
Clean a username and convert it to lowercase.
*/

let username = "   JOHN_DOE   ";

let cleanUsername = username.trim().toLowerCase();

console.log(cleanUsername);

// Output: "john_doe"

// ============================================================
// 28. IMPORTANT DIFFERENCES
// ============================================================

/*

1. indexOf() vs includes()

indexOf() returns an index or -1.
includes() returns true or false.
*/

let example1 = "JavaScript";

console.log(example1.indexOf("Script"));
// Output: 4

console.log(example1.includes("Script"));
// Output: true

/*
2. replace() vs replaceAll()

replace() with a string search value replaces the first match.
replaceAll() replaces all matches.
*/

let example2 = "apple apple";

console.log(example2.replace("apple", "orange"));
// Output: "orange apple"

console.log(example2.replaceAll("apple", "orange"));
// Output: "orange orange"

/*
3. substring() vs charAt() vs at()

substring() extracts a portion of a string.
charAt() returns a character at a non-negative index.
at() returns a character and supports negative indexes.
*/

let example3 = "Hello";

console.log(example3.substring(1, 4));
// Output: "ell"

console.log(example3.charAt(0));
// Output: "H"

console.log(example3.at(-1));
// Output: "o"

// ============================================================
// 29. IMPORTANT POINTS TO REMEMBER
// ============================================================

/*

1. Strings in JavaScript are immutable.

2. String methods do not modify the original string.
   They return a new string or another result.

3. length is a property, not a method.

4. includes() returns true or false.

5. indexOf() returns an index or -1.

6. split() converts a string into an array.

7. trim() removes whitespace from both ends.

8. toUpperCase() converts text to uppercase.

9. toLowerCase() converts text to lowercase.

10. replace() and replaceAll() are used to replace text.

11. at() supports negative indexes.

12. Most string searches are case-sensitive.

13. String indexes count UTF-16 code units, not necessarily
    user-perceived characters.

INTERVIEW TIP:

Be comfortable with these methods:
length, toUpperCase(), toLowerCase(), trim(),
includes(), indexOf(), replace(), split(),
substring(), at(), startsWith(), and endsWith().
*/

// ============================================================
// END OF JAVASCRIPT STRING METHODS NOTES
// ============================================================
