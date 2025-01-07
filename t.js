
const formSimpan = document.getElementById("form-simpan");
const formPinjam = document.getElementById("form-pinjam");
const daftarTransaksiBody = document.getElementById("daftar-transaksi-body");

formSimpan.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama-simpan").value;
    const jenis = document.getElementById("jenis-simpan").value;
    const jumlah = document.getElementById("jumlah-simpan").value;
    const tanggal = document.getElementById("tanggal-simpan").value;

    tambahTransaksi(nama, "Simpan - " + jenis, jumlah, tanggal, "-", "Berhasil");

    alert("Simpanan berhasil ditambahkan!");
    formSimpan.reset();
});


formPinjam.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama-pinjam").value;
    const jumlah = document.getElementById("jumlah-pinjam").value;
    const tanggal = document.getElementById("tanggal-pinjam").value;
    const lama = parseInt(document.getElementById("lama-pinjam").value);

    const jatuhTempo = new Date(tanggal);