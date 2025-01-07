// Ambil data transaksi dari Local Storage
const transaksiList = JSON.parse(localStorage.getItem('transaksiList')) || [];

// Referensi ke tabel
const tbody = document.querySelector('.table-riwayat tbody');

// Tampilkan data di tabel
transaksiList.forEach((transaksi, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${transaksi.nama}</td>
        <td>${transaksi.jenis}</td>
        <td>${transaksi.deskripsi}</td>
        <td>${transaksi.jumlah}</td>
        <td>${transaksi.tanggal}</td>
    `;

    tbody.appendChild(row);
});