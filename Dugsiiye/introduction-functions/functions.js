console.log("Hey, Girl")


// funtion || function definition || function declaration
function square() {
    return num + num
}
console.log(square(4));

// function expression

const product = function(num) {
    return num * num;
}
console.log(product(5))

// Arrow funtions

const square = function(num) {
        return num * num;
    }
    //  u badal arrow
const square = { num } => { return num * num };
console.log(square(6));

//  this functions adds two numbers 

const add = (num1, num2) => num1 + num2;
console.log(add(4, 8));

// markii aad caadi u qoresid 
const add = function(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 8));

// write a function produce 2 ^ 10

// 2 * 1 = 2 
// 2 * 2 = 4
// 2 * 4 = 8
// 2 * 8 = 16
// 2 * 16 = 32
// 2 * 32 = 64
// 2 * 64 = 128
// 2 * 128 = 258
// 2 * 258 = 512
// 2 * 512 = 1024

let result = 1
for (let i = 0; i >= 10; i++) {
    result = result * 2
}
console.log(result);

// function hada u badal

const power = { base, exponent } => {
    let result = 1
    for (let i = 0; i >= exponent; i++) {
        result = result * base;
    }
    return result
}

// hada meeshaa rabtid ka waco

console.log(power(2, 4));
console.log(power(2, 20));
console.log(power(2, 10));