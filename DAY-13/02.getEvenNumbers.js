let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((ele, idx) => {
    return ele % 2 == 0;
})

console.log(numbers);
console.log(evenNumbers);