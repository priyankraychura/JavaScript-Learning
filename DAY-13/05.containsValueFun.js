function containsValue(arr, target){
    return arr.includes(target);
}

let numbers = [12, 34, 56, 67, 78, 98, 36, 96, 33];
// console.log(containsValue(numbers, 96));

function containsString(str, target){
    return str.includes(target);
}

let Name = "Priyank";
console.log(containsValue(Name, "iy"));