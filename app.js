function encriptar(){
    let textvalue = document.getElementById("textoAEncriptar").value;

    let texencriptado = (textvalue.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat") );
    mensaje.value = texencriptado;
    document.getElementById("mensaje").setAttribute('disable','true')
}

function desencriptar(){
    console.log('desencriptar');
}

function copiarTexto(){
    let texMen = document.getElementById("msgencript").value;

    console.log(texMen);
}

