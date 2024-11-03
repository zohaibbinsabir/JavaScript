// Object with property name = variable name and value of property = value of variable
let firstname = "zohaib";
let obj = {
    firstname
};
console.log(obj);

// more explaining
let lastname = "sabir"
let obj1 = {
    firstname : firstname,
    lastname
}
console.log(obj1);

// using variable value as property name of the object
let value = "prop";
let obj2 = {
    [value] : "Property"
}
console.log(obj2);
console.log(obj2.prop);

// we also can use expressions
let obj3 = {
    [value + "erty"] : "Value"
}
console.log(obj3);

// functions in object
let obj4 = {
    sum : function(a,b){
        return a+b;
    },
    difference(a,b){
        return a-b;
    },
    "multiplty numbers"(a,b){
        return a*b;
    }
}
console.log(obj4.sum(2,1));
console.log(obj4["difference"](2,1));
console.log(obj4['multiplty numbers'](2,1))

// returning objects
let course = "CS";
function student(fname, lname, course)
{
    let fullname = `${fname} ${lname}`;
    return {fullname,course};
}
let stu1 = student(firstname,lastname,course);
console.log(stu1);
console.log(stu1.fullname);
console.log(stu1.course);
console.log([stu1.course]);