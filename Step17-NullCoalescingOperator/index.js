// Nullish Coalescing Operator (??) : null undefined

let val;

val = 5 ?? 10;
console.log(val); // OUTPUT: 5

val = null ?? 11;
console.log(val); // OUTPUT: 11

val = undefined ?? 21;
console.log(val); // OUTPUT: 21

val = null ?? 10 ?? undefined
console.log(val); // 10

val = 20 ?? null ?? 10;
console.log(val); // 20

val = null ?? undefined ?? null;
console.log(val); // null

val = null ?? undefined ?? 7;
console.log(val); // 7

val = undefined ?? 10 ?? 20;
console.log(val); // 10

val = false ?? 10;
console.log(val); // OUTPUT: false

val = true ?? 10;
console.log(val); // OUTPUT: true

val = "" ?? 10;
console.log(val); // OUTPUT: ""

//conclusinon: yeh operator (??) kewal null and undefined par hi kaam karta hai, true, false, empty string inn sab par kaam nahin karta.

/*
The Nullish Coalescing Operator (??) returns the right-hand value only if the left-hand value is null or undefined.

~EXAMPLE:
a ?? b   returns a, if a is NOT null or undefined
        ! otherwise returns b
----------------------------------------------------------------------------------------------------------------------------
~ ⚠️ Difference from || (Logical OR)     
val = 0 || 10;      // 10 ❌
val = 0 ?? 10;      // 0 ✅

^ returns right if left is falsy (e.g., 0, "", false, null, undefined)
? returns right only if left is null or undefined
*/