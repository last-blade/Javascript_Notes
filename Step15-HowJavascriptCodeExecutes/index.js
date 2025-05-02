/*
An execution context is an environment where JavaScript code is evaluated and executed.

When your code runs, JS creates something called the Global Execution Context (GEC) first — and then adds Function Execution Contexts on top of it when you call functions.

Now let’s look at the 3 phases:

!⚙️ 1. Global Execution Context (GEC)
This is the very first execution context created when your script starts.
~ let a = 10;
~ function greet() {
~  console.log("Hello");
~ }
~ greet();
* Here, the GEC is created for the whole file. It contains two sub-phases:


!🧩 2. Memory Phase (a.k.a Creation Phase)
^ In this phase:

^ JS scans the entire code before running it

^ It allocates memory (but doesn't execute anything yet)

^ It sets up:
| Variable Type   | What JS does                                             |
| --------------- | -------------------------------------------------------- |
| `var`           | Allocated with value `undefined`                         |
| `let` / `const` | Allocated in **Temporal Dead Zone** (TDZ), uninitialized |
| `function`      | Entire function stored in memory                         |

* Example
~console.log(a); // undefined
~var a = 5;

~function greet() {
~  console.log("Hi");
~}
➡️ Memory Phase:
a → undefined
greet → entire function stored

!🚀 3. Execution Phase

In this phase:

^ JS starts executing code line-by-line
^ It assigns actual values to variables
^ It runs any function calls
^ For the above code:

~ console.log(a); // logs undefined ✅
~ a = 5;          // now a becomes 5
~ greet();        // runs the greet function

* 🔄 Function Execution Context
* When a function is called:
* 
* A new execution context is created for that function
* 
* It goes through its own memory and execution phase
* 
* When done, it’s popped off the call stack

!🔥Summary
^| Phase                        | What Happens                                                      |
| ---------------------------- | ----------------------------------------------------------------- |
~| **Global Execution Context** | Created for the entire script                                     |
~| **Memory / Creation Phase**  | Variables/functions are allocated in memory (but not executed)    |
~| **Execution Phase**          | Code is executed line-by-line, values assigned, functions invoked |

*/