function generateQRCode() {
    var qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: document.getElementById('text').value
    });
}
