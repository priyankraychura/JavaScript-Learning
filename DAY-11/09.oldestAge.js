let age = [25, 85, 12, 36, 96, 45, 22];
let oldest = 0;

for(let i = 0; i < age.length; i++){
    if(age[i] > oldest){
        oldest = age[i];
    }
}

console.log("Oldest age in an array is: " + oldest);
