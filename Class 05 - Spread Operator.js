// calling function before declartion
sum("one",5,4,3,2,1);

// sum function with Rest Operator
function sum(name,...args)
{
    console.log(name);
    console.log(args);
}

// calling function after declaration
sum("two",1,2,3,4,5);

// calling function to test Spread Operator
var arr = [1,2,3,4,5];
sum("three",arr);
sum("four",...arr);
sum("five",[...arr]);

// Copy array without Spread operator
var arr1 = [1,2,3,4,5];
console.log(arr1);
var arr2 = arr1;
arr1.push(6);
console.log(arr1);
console.log(arr2);

//copy array with spread operator
var arr3 = [...arr1];
console.log(arr3);
arr1.push(7);
arr3.push(10);
console.log(arr1);
console.log(arr3);

// Concatinating (Merging) Arrays without Spread Operator
var arr4 = [8,9,10];
var arr5 = arr1.concat(arr4);
console.log(arr1);
console.log(arr4);
console.log(arr5);

// Concatinating Arrays with Spread Operator
var arr6 = [...arr1,...arr4];
console.log(arr6);
console.log([...arr4,...arr1]);
console.log([0,arr1,arr4,11]);
console.log([0,...arr1,...arr4,11]);

// Merging Objects
var obj1 = {
    name : "zohaib",
    age : "22"
};

var obj2 = {
    fathername : "sabir"
};

var obj3 = {...obj1,...obj2};
console.log(obj3);