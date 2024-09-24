const users = [];

let form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let obj = {
        username, 
        email,
        password
    }

    users.push(obj);
    console.log(users)
    console.log("abc")
});

