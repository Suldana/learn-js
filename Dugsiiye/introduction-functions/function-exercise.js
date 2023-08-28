// write a function that returns Area of Circle??

const area = (radius) => {
    let pi = 3.14;
    return pi * radius ** 2;
}
console.log(area(5));

// // write a function that returns Area of Triangle??

const area = (base, height) => {
    return (base * height) / 2;
};

console.log(area(3, 5));


// write a function that returns 3 ^ 5

// 3 * 1 = 3
// 3 * 3 = 9
// 3 * 9 = 29
// 3 * 29 = 87
// 3 * 87 = 261

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

console.log(power(3, 5));