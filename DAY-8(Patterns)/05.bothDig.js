// * * * * *
// *     * *
// *   *   *
// * *     *
// * * * * *

let n = 5;
for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < n; j++){
        if(i == 0 || i == n - 1 || j == 0 || j == n - 1 || i == j || (i == 2 && j == 2) || (i == 4 && j == 0) || (i == 0 && j == 4) ||(i == 1 && j == 3) || (i == 3 && j == 1)){
            str += "* ";
        } else{
            str += "  ";
        }
    }
    console.log(str)
}