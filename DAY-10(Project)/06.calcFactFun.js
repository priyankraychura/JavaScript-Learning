function calculateFactorial(num){
    if(num <= 0){
        return 1;
    }

    let fact = 1;
    while(num){
        fact = fact * num;
        num--;
    }

    return fact;
}

console.log(calculateFactorial(6));