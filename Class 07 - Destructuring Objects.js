// variables name should be same as of properties
let user = {
    fname : "zohaib",
    age : 21,
    city : "lhr"
};

let {fname,age,city} = user;
console.log(age);

// Alise naming
let {fname:f,age:a,city:c} = user;
console.log(f);

let {fname:fn, city:ct} = user;
console.log(ct);