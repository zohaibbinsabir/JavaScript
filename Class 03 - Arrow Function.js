/* 
1.
function hello()
{
    console.log("Hello");
}
hello();

2.
let hello = function()
{
    console.log("Hello")
}
hello();

3. Arrow Function
let hello = () => console.log("Hello");
hello();
*/

let welcome = function(name){
    return `Hello & Welcome ${name}`;
}

console.log(welcome("Zohaib Siddique"));
console.log("----------");

let welcome2 = (name, age) => {
    console.log("welcome 2");
    return `Welcome ${name} - ${age}`
}
console.log(welcome2("Zohaib",20));
console.log("----------");

// if function is of one line then don't use curly brackets
// if function has one parameter then don't use paranthesis
let welcome3 = name => `Welcome ${name}`;
console.log(welcome3("zohaib"))
console.log(typeof welcome3);