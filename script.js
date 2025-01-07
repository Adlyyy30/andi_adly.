document.getElementById('formTransaksi').addEventListener('submit', function(e) {
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    if (!nama || !jumlah) {
        alert('Semua input harus diisi!');
        e.preventDefault();
    }
});