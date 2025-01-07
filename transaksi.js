document.querySelector('.form-transaksi').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah refresh halaman

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const jenis = document.getElementById('jenis').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const jumlah = document.getElementById('jumlah').value;
    const tanggal = new Date().toLocaleDateString(); // Tanggal transaksi

    // Buat objek transaksi
    const transaksi = {
        nama,
        jenis,
        deskripsi,
        jumlah,
        tanggal,
    };

    // Ambil data transaksi yang sudah ada di Local Storage
    const transaksiList = JSON.parse(localStorage.getItem('transaksiList')) || [];

    // Tambahkan transaksi baru ke array
    transaksiList.push(transaksi);

    // Simpan kembali ke Local Storage
    localStorage.setItem('transaksiList', JSON.stringify(transaksiList));

    // Tampilkan pesan sukses
    alert('Transaksi berhasil disimpan!');

    // Reset form setelah submit
    this.reset();
});