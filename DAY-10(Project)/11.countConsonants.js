function countVowels(str){
    let consonants = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u'){
            consonants++;
        }
    }

    return consonants;
}

console.log(countVowels("hello"));