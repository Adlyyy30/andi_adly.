// Tangkap form login
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Ambil nilai input login
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validasi login sederhana
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            // Simpan status login
            localStorage.setItem("isLoggedIn", "true");
            alert("Login berhasil!");

            // Redirect ke halaman Beranda
            window.location.href = "index.html";
        } else {
            alert("Email atau kata sandi salah!");
        }
    });

    // Isi otomatis email dari Local Storage jika ada
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
        document.getElementById("email").value = storedEmail;
    }
}

// Tangkap elemen tombol login/logout
const authLink = document.getElementById("auth-link");
if (authLink) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

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