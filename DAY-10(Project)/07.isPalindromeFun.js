function isPalindrome(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }

    if(str === revStr){
        return true;
    } else{
        return false;
    }
}

console.log(isPalindrome("nayan"));