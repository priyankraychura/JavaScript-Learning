function reverseWords(str){
    let word1 = "";
    let word2 = "";
    let temp;

    for(let i = 0; i < str.length; i++){
        word1 += str[i];
        if(str[i] == " "){
            temp = word1;
            word1 = word2;
            word2 = temp;
        }
    }
    
    return `${word1} ${word2}`;
}

console.log(reverseWords("Priyank Raychura"));