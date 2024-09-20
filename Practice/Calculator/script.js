const input = document.querySelector(".form-control");
const buttons = document.querySelectorAll("button");
let enteredInput = "";
let result = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        let btnValue = button.innerText;
        if(btnValue == "C"){
            input.value = "0.00";
            enteredInput = "";
            result = "0";
        }else if(btnValue == "+/-"){
            if(enteredInput <= 0){
                input.value = Math.abs(enteredInput);
                enteredInput = input.value;
            } else{
                input.value = -(Math.abs(enteredInput));
                enteredInput = input.value;
            }
        }else if(btnValue == "<"){
            let temp = enteredInput.split("");
            temp.pop();
            enteredInput = temp.join("");
            input.value = enteredInput;
        } else if(btnValue == "="){
            result = eval(enteredInput);
            input.value = result;
            enteredInput = result;
        } else{
            enteredInput += btnValue;
            input.value = enteredInput;
        }
    })
})


