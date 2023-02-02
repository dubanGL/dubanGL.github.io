

function cambiarCadena(mensaje,clave,Posicion) {
    
    var codigo = mensaje.slice(0,Posicion)+ clave + mensaje.slice(Posicion)

    return codigo;
}
function cambiarEstilo() {
    document.getElementById("parrafo").style.display = "none";
    document.getElementById("munheco-caja").style.display ="none";
    document.getElementById("caja-textarea-optenido").style.display = "block";
    document.getElementById("botonCopiar").style.display = "inline";
}
function encriptar(event) {

    event.preventDefault();
    var mensaje = document.getElementById("textSinEcriptar").value
    var contador    = 0;
    var codigo;
    cambiarEstilo();

    if(mensaje.length===0){
        alert("mensaje vacio")
    }
    else{

        while (contador <= mensaje.length) {
        
            if(mensaje[contador]=="a"){

                codigo = cambiarCadena(mensaje,"i",contador+1);
                mensaje = codigo
                contador = contador+1;

            }else if(mensaje[contador]=="e"){

                codigo = cambiarCadena(mensaje,"nter",contador+1);
                mensaje = codigo
                contador = contador+4;

            }else if(mensaje[contador]=="i"){

                codigo = cambiarCadena(mensaje,"mes",contador+1);
                mensaje = codigo
                contador = contador+3;

            }else if(mensaje[contador]=="o"){

                codigo = cambiarCadena(mensaje,"ber",contador+1);
                mensaje = codigo
                contador = contador+3;

            }else if(mensaje[contador]=="u"){

                codigo = cambiarCadena(mensaje,"fat",contador+1);
                mensaje = codigo
                contador = contador+3;
            }
        
         contador++;
        }

        document.getElementById("contenidoRes").textContent = mensaje;
    }
}

function copiar(event){

    event.preventDefault();
    document.getElementById("contenidoRes").select(); 
    var textR = document.getElementById("contenidoRes");

    navigator.clipboard.writeText(textR.textContent);
}

function desEncriptar(event){
    
    event.preventDefault();
    var texto = document.getElementById("textSinEcriptar").value;

    if(texto.length===0)
        alert("texto vacio");
    else{
        cambiarEstilo();
            texto = texto.replace(/ai/ig,"a")
            texto = texto.replace(/ufat/ig,"u")
            texto = texto.replace(/ober/ig,"o")
            texto = texto.replace(/enter/ig,"e")
            texto = texto.replace(/imes/ig,"i")
        
            document.getElementById("contenidoRes").textContent = texto;
    }
}

var botonEncriptar = document.getElementById('Bencriptar');
var botonCopiar    = document.getElementById('botonCopiar');
var botonDesEncriptar = document.getElementById('Bdesencriptar');

botonEncriptar.addEventListener("click",encriptar);
botonCopiar.addEventListener("click",copiar);
botonDesEncriptar.addEventListener("click",desEncriptar);
