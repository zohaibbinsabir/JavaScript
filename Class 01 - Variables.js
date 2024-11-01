// 3 Types of Variables in JavaScript

/*
1. var
    a) Global or function scope (not block-scoped)
    b) Can be re-declared
    c) Can be re-assigned
    d) Hoisted with `undefined` as initial value

2. let
    a) Block scope
    b) Cannot be re-declared in the same scope
    c) Can be re-assigned
    d) Hoisted but not initialized (throws an error if accessed before declaration)

3. const
    a) Block scope
    b) Cannot be re-declared
    c) Cannot be re-assigned
    d) Must be initialized at the time of declaration
*/

// Practice
var num1;
if (true)
{
    var num1 = 1;
}
console.log("Value of var variable: " + num1);
console.log("----------");

if (true)
{
    let num2 = 5;
    console.log("Value of let variable inside the block: : " + num2);
}
// console.log("Value of let variable outside the block: " + num2); -> will give you error
console.log("----------");

const num3 = 2;
if (true)
    console.log("Value of const variable: " + num3);