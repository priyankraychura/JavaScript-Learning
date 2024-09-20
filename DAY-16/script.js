
function calc(a, b){
    if(b == 0){
        throw new Error("ZeroDivisonError!")
    } else{
        console.log(a/b);
    }
}

calc(6, 10);
calc(10, 0);