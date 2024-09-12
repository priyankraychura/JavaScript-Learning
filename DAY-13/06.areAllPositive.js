let numbers = [34, 45, 77, 24, 86, 35, 97];

let areAllPositive = numbers.every((ele) => {
    return ele > 0;
})

// console.log(areAllPositive);
let strsArray = ["Priyank", "Chaman", "Pruthvi", "Mohit"]

let areAllStringsLong = strsArray.every((ele) => {
    return ele.length > 5
})

console.log(areAllStringsLong);