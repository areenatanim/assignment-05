1. var vs let vs const

var a = 1;

console.log(b); // ReferenceError 
let b = 2;

const c = 3; // Must initialize

// Block Scope
if (true) {
    var x = 1;     // Global
    let y = 2;     // Block only 
    const z = 3;   // Block only 
}
console.log(x); // 1
console.log(y); // ReferenceError 
Use: const (default) → let (if reassign) → Never var

2. Spread Operator (...)
Copies & Expands arrays/objects/iterables

javascript

Copy code
// Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5] 
const cloned = [...arr1];     // Shallow copy

// Object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}
const merged = { ...obj1, ...{ b: 99 } }; // b:99 overrides

// Function args
function sum(a, b, c) { return a + b + c; }
console.log(sum(...[1, 2, 3])); // 6 

// Rest params (opposite)
function rest(...args) { return args; }
console.log(rest(1, 2, 3)); // [1, 2, 3]
Use: Cloning, merging, function args

3. map() vs filter() vs forEach()


javascript
Copy code
const nums = [1, 2, 3, 4, 5];

// map - Transform
const doubled = nums.map(n => n * 2);     // [2, 4, 6, 8, 10]

// filter - Select
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// forEach - Loop only
nums.forEach(n => console.log(n));        // Logs each number

// Chain them!
const result = nums
    .map(n => n * 2)      // [2,4,6,8,10]
    .filter(n > 5)        // [6,8,10]
    .reduce((a,b) => a+b); // 24
Rule: Need new array? map/filter. Just loop? forEach.

4. Arrow Functions (=>)
Shorter syntax + Lexical this

javascript

Copy code
// Regular
function regular(x) {
    return x * 2;
}

// Arrow (single line)
const arrow = x => x * 2;

// With block
const add = (a, b) => {
    return a + b;
};

// Common use cases
const nums = [1, 2, 3];
nums.map(n => n * 2);           // Concise
nums.filter(n => n > 1);        // Clean
setTimeout(() => console.log('Hi'), 1000);

// this binding (BIG difference)
const obj = {
    value: 42,
    regular: function() {
        setTimeout(function() {
            console.log(this.value); // undefined 
        }, 100);
    },
    arrow: function() {
        setTimeout(() => {
            console.log(this.value); // 42 
        }, 100);
    }
};
Use: Callbacks, this binding, concise code

5. Template Literals (Backticks)
String interpolation + Multi-line

javascript

Copy code
// Old way
const name = 'Areen';
const age = 25;
const msg1 = 'Hello ' + name + ', you are ' + age;

// Template literals (Backticks)
const msg2 = `Hello ${name}, you are ${age} years old!`;
const msg3 = `Multi
line
string`;

// Expressions
const price = 99.99;
const tax = 0.1;
const total = `Total: $${(price * (1 + tax)).toFixed(2)}`;

// HTML templates
const userCard = `
    <div class="card">
        <h2>${name}</h2>
        <p>${age} years old</p>
    </div>
`;
Use: Dynamic strings, HTML, multi-line text
