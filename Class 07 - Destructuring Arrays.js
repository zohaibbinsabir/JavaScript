// Before
let user = ["zohaib",21,"Lahore"];
let fname = user[0];
let age = user[1];
let city = user[2];
console.log(fname);

// in es6 version
let [a,b,c] = user;
console.log(a);

let user1 = [...user,];
let [d,e,f,g] = user1;
let [h,i] = user1;
let [j,k,l,m,n,o] = user1;

console.log(g);
console.log(i);
console.log(o);

// setting default value
let usr = ["zohaib",,"lahore"];
let [nm, ag = 20, ct] = usr;
console.log(ag);

// Working with nested arrays
let person = ["zoha",21,"lhr",["M","20000"]];
let [pname,page,pcity,[pgender,psalary]] = person;
console.log(pgender);

// Rest Operator
let [uname, ...args] = person;
console.log(args);

// use with functions
function detail([name, age = 20, city]){
    console.log(age);
}
detail(["zohaib",,"Lhr"]);

// returning
function returned(){
    return ["Zohaib",21,"LHR"];
}
let [rname,rage,rcity] = returned();
console.log(rage);