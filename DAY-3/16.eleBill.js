let unit = 435;
surcharge = 0.2;
let totalBill;

if(unit <= 50){
    totalBill = unit * 0.5;
} else if(unit > 50 && unit <= 150){
    totalBill = (50 * 0.5) + (unit - 50) * 0.75;
} else if(unit > 150 && unit <= 250){
    totalBill = (50 * 0.5) + 100 * 0.75 + (unit - 150) * 1.2;
} else{
    totalBill = (50 * 0.5) + 100 * 0.75 + 100 * 1.2 + (unit - 250) * 1.5;
}

let finalBill = (totalBill * surcharge) + totalBill
console.log(finalBill.toFixed(2));