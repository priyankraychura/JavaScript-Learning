function isPrime(num){
    let count = 0;

    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            count++;
        }
    }

    if(count == 2){
        return true;
    } else{
        return false;
    }
}

function generatePrimeNumbers(num){
    let primeNumbers = [];
    let count = 0, i = 1;
    
    // for(let i = 1; i <= num; i++){
    //     if((isPrime(i))){
    //         primeNumbers += i;
    //         count++;
    //     }
    // }

    while(count != num){
        if((isPrime(i))){
            primeNumbers[primeNumbers.length] = i;
            count++;
        }
        i++;
    }

    return primeNumbers;
}

console.log(generatePrimeNumbers(10))

