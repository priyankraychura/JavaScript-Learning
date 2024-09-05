let scores = [12, 25, 36, 85, 88, 96, 25, 11];
let total = 0;


for(let i = 0; i < scores.length; i++){
    total += scores[i];
}

let avg = total/(scores.length);

console.log("Average of score is: " + avg);