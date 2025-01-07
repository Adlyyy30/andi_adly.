
const loginForm = document.getElementById("login-form");


if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        if (email && password) {
            
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email); 

            
            alert("Login berhasil!");

            
            window.location.href = "index.html";
        } else {
            alert("Mohon isi email dan kata sandi.");
        }
    });
}


const authLink = document.getElementById("auth-link");


const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


if (authLink) {
    if (isLoggedIn) {
        authLink.textContent = "Logout";
        authLink.href = "#";
        authLink.addEventListener("click", function () {
            
            localStorage.setItem("isLoggedIn", "false");
            alert("Anda telah logout.");
            authLink.textContent = "Login";
            authLink.href = "login.html";
        });
    } else {
        
        authLink.textContent = "Login";
        authLink.href = "login.html";
    }
}