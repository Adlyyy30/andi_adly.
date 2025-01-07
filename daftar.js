
const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    
    if (password !== confirmPassword) {
        alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
        return;
    }

    
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    
    alert("Anda berhasil daftar!");


    window.location.href = "login.html";
});