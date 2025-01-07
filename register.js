document.getElementById("register-form").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (username === "") {
        alert("Username harus diisi.");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Email tidak valid.");
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak sama.");
        event.preventDefault();
    }
});