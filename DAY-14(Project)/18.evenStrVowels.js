let str = "banana";


let areVowels = str.split("").every((ele) => {
    return (ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u');
})

console.log(areVowels)