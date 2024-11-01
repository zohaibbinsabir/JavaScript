let firstname = "zohaib";
let lastname = 'siddique';
let marks = 98;

function fullname(firstname, lastname)
{
    return `${firstname} ${lastname}`
}

let line = `Hey ${fullname(firstname,lastname)}! Your 'Marks' are "${marks}".`;
console.log(line);

console.log("---------")
console.log("Its second name is template literals")