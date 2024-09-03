function double(num){
    return num * 2;
}

function square(num){
    return num * num;
}

function doubleSquare(num){
    return square(double(num));
}

console.log(doubleSquare(3));