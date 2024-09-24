try{
    function divide(a, b){
        if(b == 0){
            throw new ZeroDivisionError("Can't divide by zero");
        } 
        return a / b;
    }
    
    console.log(divide(5, 0))
} catch(error){
    console.log(error);
}
