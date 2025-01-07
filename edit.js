// Ambil elemen form edit profil
const editProfilForm = document.getElementById("edit-profil-form");

// Tambahkan event listener untuk submit form
editProfilForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input
    const nama = document.getElementById("nama").value;
    const noTelepon = document.getElementById("no-telepon").value;
    const email = document.getElementById("email").value;
    const statusPekerjaan = document.getElementById("status-pekerjaan").value;
    const alamatRumah = document.getElementById("alamat-rumah").value;

    // Simpan data ke Local Storage
    localStorage.setItem("nama", nama);
    localStorage.setItem("no-telepon", noTelepon);
    localStorage.setItem("email", email);
    localStorage.setItem("status-pekerjaan", statusPekerjaan);
    localStorage.setItem("alamat-rumah", alamatRumah);

    // Tampilkan pesan sukses
    alert("Profil berhasil diperbarui!");

    // Redirect ke halaman Profil
    window.location.href = "profil.html";
});