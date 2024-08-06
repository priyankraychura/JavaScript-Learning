function swap(){
    let num1 = Number(document.getElementById("val1").value);
    let num2 = Number(document.getElementById("val2").value);

    let temp = num1;
    num1 = num2;
    num2 = temp;

    document.getElementById("swapped").innerText = `Value 1: ${num1} and value 2: ${num2}`;
}

function reminder(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 % num2;

    console.log(num1, num2, result)

    document.getElementById("reminder").innerText = `Value 1: ${num1} and value 2: ${num2} reminder is ${result}`;
}

function sumSquare(){
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let num3 = Number(document.getElementById("n3").value);

    let result = (num1 * num1) + (num2 * num2) + (num3 * num3);

    document.getElementById("sumSquare").innerText = `The result is: ${result}`;
}

function leapYear(){
    let year = Number(document.getElementById("year").value);
    let isLeapYear = false;

    if(year % 4 == 0){
        isLeapYear = true;
    }

    console.log(isLeapYear);

    if(isLeapYear){
        document.getElementById("isLeap").innerText = `Year ${year} is a leap year.`;
    } else{
        document.getElementById("isLeap").innerText = `Year ${year} is a NOT a leap year.`;
    }
}