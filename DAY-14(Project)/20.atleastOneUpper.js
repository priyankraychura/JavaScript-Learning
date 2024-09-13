let str = "helo";

let hasUppercase = str.split("").some((ele) => {
    return ele == ele.toUpperCase();
})

console.log(hasUppercase);