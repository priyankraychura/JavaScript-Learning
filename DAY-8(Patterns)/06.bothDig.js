// * * * * *
// *     * *
// *   *   *
// * *     *
// * * * * *

let n = 10;
for(let i = 0; i < n; i++){
    let str = "";
    for(let j = n - 1; j >= 0; j--){
        if(i == 0 || i == n - 1 || j == 0 || j == n - 1 || i == j || i + j == n - 1){
            str += "* ";
        } else{
            str += "  ";
        }
    }
    console.log(str)
}

