function encriptar(){
    let textvalue = document.getElementById("textoAEncriptar").value;

    let texencriptado = (textvalue.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat") );
    mensaje.value = texencriptado;
    document.getElementById("mensaje").setAttribute('disable','true')
}


function desencriptar(){

    let textvaluedes = document.getElementById("textoAEncriptar").value;

    let texdesencriptado = (textvaluedes.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u") );
    mensaje.value = texdesencriptado;
    document.getElementById("mensaje").setAttribute('disable','false')
}

function copiarTexto(){
    let texMen = document.getElementById("msgencript").value;
    document.getElementById("butonCopy").setAttribute('disable','true')

    
    console.log(texMen);
}
