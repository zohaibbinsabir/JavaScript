/* 
    
*/
function sum(num1,num2)
{
    console.log(num1+num2);
}
sum(20,30);
sum(20,30,40);
sum(20,30,40,50);

function sum2()
{
    let sum = 0;
    for (let i in arguments)
        sum += arguments[i];
    return sum;
}

console.log(sum2(1,2,3,4,5,10));


function result(name, ...numbers)
{
    let sum = 0;
    for (let i in numbers)
        sum += numbers[i];
    console.log(`${name} - ${sum}`);
}

result("zohaib",1,2,3,4,5);