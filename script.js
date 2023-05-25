function EncripteElTexto() {
    var elTextoAEncriptar = document.getElementById("txtEncriptar").value;
    let validar = new RegExp("^([a-z\\s]*)$");
    if (validar.test(elTextoAEncriptar)) {
        var elTextoEncriptado = elTextoAEncriptar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        var txtEncriptado = document.getElementById("txtEncriptado")
        txtEncriptado.style.display = "block"
        document.getElementById("txtEncriptado").value = elTextoEncriptado;
        var imagen = document.getElementById("imagenMsgNoEncontrado")
        imagen.style.display = "none"
    } else {
        document.getElementById("txtEncriptar").value = ""
        alert(" Por favor: Ingrese solo minusculas, sin acento ")
    }
}
function DesencripteElTexto() {
    var elTextoADesencriptar = document.getElementById("txtEncriptado").value;
    var elTextoDesencriptado = elTextoADesencriptar.replace(/ai/g, "a").replace(/ufat/g, "u").replace(/ober/g, "o").replace(/imes/g, "i").replace(/enter/g, "e");
    document.getElementById("txtEncriptado").value = elTextoDesencriptado;
}

function CopieElTexto(str) {
    document.getElementById("txtEncriptado").select();
    document.execCommand("copy");
};
