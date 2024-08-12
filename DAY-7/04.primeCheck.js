let num = 31;
let i = 1;
let count = 0;

while(i <= num){
    if(num % i == 0){
        count++;
    }
    i++;
}

if(count == 2){
    console.log(`${num} is a prime number`)
} else{
    console.log(`${num} is NOT a prime number`)
}