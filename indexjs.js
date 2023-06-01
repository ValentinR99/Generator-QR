const contenedorQR = document.getElementById("contenedorQR");
const formulario =  document.getElementById("formulario"); ;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value)
});

const QR = new QRCode(contenedorQR);