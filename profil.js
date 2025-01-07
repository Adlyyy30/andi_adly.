// Ambil data dari Local Storage
const nama = localStorage.getItem("nama") || "Belum diatur";
const noTelepon = localStorage.getItem("no-telepon") || "Belum diatur";
const email = localStorage.getItem("email") || "Belum diatur";
const statusPekerjaan = localStorage.getItem("status-pekerjaan") || "Belum diatur";
const alamatRumah = localStorage.getItem("alamat-rumah") || "Belum diatur";

// Tampilkan data di halaman Profil
document.getElementById("nama").textContent = nama;
document.getElementById("no-telepon").textContent = noTelepon;
document.getElementById("email").textContent = email;
document.getElementById("status-pekerjaan").textContent = statusPekerjaan;
document.getElementById("alamat-rumah").textContent = alamatRumah;