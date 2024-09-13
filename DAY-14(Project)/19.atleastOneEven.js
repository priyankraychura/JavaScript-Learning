let num = [1, 3, 5, 7];

let hasEven = num.some((ele) => {
    return ele % 2 == 0;
})

console.log(hasEven);