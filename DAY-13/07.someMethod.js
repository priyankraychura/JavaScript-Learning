let numbers = [11, 31, 44, 83, 67, 33];

let hasAnyEvenNumber = numbers.some((ele) => {
    return ele % 2 == 0;
})

console.log(hasAnyEvenNumber);