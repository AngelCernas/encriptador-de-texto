function encriptar(){
    let textvalue = document.getElementById("textoAEncriptar").value;

    let texencriptado = (textvalue.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat") );
    mensaje.value = texencriptado;
    document.getElementById("mensaje").setAttribute('disable','true')
    textoAEncriptar.value = '';
    mensaje.style.background = "none"
}

function desencriptar(){

    let textvaluedes = document.getElementById("textoAEncriptar").value;

    let texdesencriptado = (textvaluedes.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u") );
    mensaje.value = texdesencriptado;
    document.getElementById("mensaje").setAttribute('disable','false')
    mensaje.style.background = "none"
    textoAEncriptar.value = '';

}

function copiarTexto(){
  
    let copytext = document.querySelector("msgencript");
    copytext.querySelector("butonCopy").addEventListener("click",function(){
       let input = copytext.querySelector("input.text")
       input.select();
       document.execCommand("copy");
       copytext.classList.add("active");
    });

    navigator.clipboard.writeText(texMen.textContent)
    
}
