function countDigits(num){
    let count = 0;
    while(num){
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

console.log(countDigits(1256));