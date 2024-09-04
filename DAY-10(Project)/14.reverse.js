function reverseWords(str){
    let newStr = [];
    let word = "";

    for(let i = 0; i < str.length; i++){
        word += str[i];
        if(str[i] == " "){
            newStr.push(word);
            word = "";
        }
    }

    newStr.push(word);
    
    return newStr;
}

let word = reverseWords("Priyank Raychura Magan chaman");
let revWords = "";

for(let i = word.length - 1; i >= 0; i--){
    revWords += word[i] + " ";
}

console.log(revWords);