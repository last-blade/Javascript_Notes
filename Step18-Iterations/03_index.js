const codingLang = ["Javascript", "C++", "Java", "Python", "C"];

const values = codingLang.forEach((item) => {
    console.log(item);
    return item;
});

console.log(values); // OUTPUT: undefined; because for-each loop kabhi return nahin karta hai kuch bhi, isliye undefined hai. isko solve karne ke liye hum 'filter' kaa use karte hain

//----------------------------------------------------------------------------------------------------------------------------------
/*
The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not 
pass the callbackFn test are not included in the new array.
*/
const arr = [1,2,3,4,5,6,7,8,9,10]
const arrValues = arr.filter((item) => {
    return item < 5; // OUTPUT: [ 1, 2, 3, 4 ]
})

console.log(arrValues);

const codingLanguages = codingLang.filter((item) => {
    return item; // OUTPUT: [ 'Javascript', 'C++', 'Java', 'Python', 'C' ]
});

console.log(codingLanguages);

//---------------------------------------------------------------------------------------------------------------------------------------

const books = [
    {
      "name": "To Kill a Mockingbird",
      "genre": "Fiction",
      "year": 1960
    },
    {
      "name": "1984",
      "genre": "Dystopian",
      "year": 1949
    },
    {
      "name": "The Great Gatsby",
      "genre": "Classic",
      "year": 1925
    },
    {
      "name": "The Hobbit",
      "genre": "Fantasy",
      "year": 1937
    },
    {
      "name": "Pride and Prejudice",
      "genre": "Romance",
      "year": 1813
    },
    {
      "name": "Me Before You",
      "genre": "Romance",
      "year": 2012
    },
    {
      "name": "The Notebook",
      "genre": "Romance",
      "year": 1996
    },
    {
      "name": "Outlander",
      "genre": "Romance",
      "year": 1991
    },
    {
      "name": "The Time Traveler's Wife",
      "genre": "Romance",
      "year": 2003
    }
]
  
const romanceBooks = books.filter((item) => {
    return item.genre === "Romance";
});

console.log(romanceBooks);
/*
OUTPUT:
    [
        { name: 'Pride and Prejudice', genre: 'Romance', year: 1813 },
        { name: 'Me Before You', genre: 'Romance', year: 2012 },
        { name: 'The Notebook', genre: 'Romance', year: 1996 },
        { name: 'Outlander', genre: 'Romance', year: 1991 },
        { name: "The Time Traveler's Wife", genre: 'Romance', year: 2003 }
    ]   
*/

const romanceBooksAfter2000 = books.filter((item) => {
    return item.genre === "Romance" && item.year >= 2000;
});

console.log(romanceBooksAfter2000);
/*
OUTPUT: 
    [
        { name: 'Me Before You', genre: 'Romance', year: 2012 },
        { name: "The Time Traveler's Wife", genre: 'Romance', year: 2003 }
    ]
*/  