let num = [2, 4, 6, 8];

let areAllEven = num.every((ele) => {
    return ele % 2 == 0;
})

console.log(areAllEven);