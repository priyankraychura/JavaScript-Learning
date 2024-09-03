function findFactorial(num){
    if(num <= 1){
        return 1;
    } else{
        let fact = 1;

        while(num != 1){
            fact = fact * num;
            num--;
        }

        return fact;
    }
}

console.log(findFactorial(5));