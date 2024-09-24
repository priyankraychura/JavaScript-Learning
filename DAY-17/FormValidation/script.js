const signupDiv = document.getElementById("signupDiv");
const loginDiv = document.getElementById("loginDiv");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const users = [];

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("user-email").value;
    let pass = document.getElementById("user-pass").value;

    let result = users.filter((user) => {
        return user.email == email && user.password == pass;
    });

    if(result.length){
        Swal.fire({
            title: "Loggin Successful!",
            text: `Welcome, ${result[0].username}`,
            icon: "success"
        });
    } else{
        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: "Incorrect Usrname or Password",
            footer: '<a href="#">Forgot Password?</a>'
        });
    }

    
    loginForm.reset();
})

signupForm.addEventListener("submit", (e) => {
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

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You're registered successfully!",
        showConfirmButton: false,
        timer: 1500
    });

    signupForm.reset();
});

document.getElementById("goToLogin").addEventListener("click", () => {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
});
document.getElementById("goToRegister").addEventListener("click", () => {
    loginDiv.style.display = "none";
    signupDiv.style.display = "block";
});

