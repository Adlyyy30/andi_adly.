document.getElementById("transaction-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("method").value;

    if (name && amount && method) {
        const resultText = Transaksi berhasil!\nNama: ${name}\nJumlah: Rp ${amount}\nMetode: ${method};
        document.getElementById("transaction-result").innerHTML = <p>${resultText}</p>;
    } else {
        document.getElementById("transaction-result").innerHTML = <p>Silakan lengkapi semua form.</p>;
    }
});