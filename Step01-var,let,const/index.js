const accountId = 14332;
let accountEmail = "prashant@google.com"
var accountPassword = "12345"
let accountCity = "Delhi";
let name;

// accountId = 123; not allowed to change the value of 'const' type

console.table([accountCity, accountId, accountPassword, accountEmail, name]);

/*
OUTPUT:
┌─────────┬───────────────────────┐
│ (index) │ Values                │
├─────────┼───────────────────────┤
│ 0       │ 'Delhi'               │
│ 1       │ 14332                 │
│ 2       │ '12345'               │
│ 3       │ 'prashant@google.com' │
│ 4       │ undefined             │
└─────────┴───────────────────────┘

"name" is undefined because the variable is declared but initialize nahin kiya kisi value se.
*/