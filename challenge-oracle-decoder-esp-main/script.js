
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function bttEncriptar(){
    event.preventDefault();
    var text=document.querySelector("#input-texto").value;
    var encritar=text.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/o/gi,'ober').replace(/u/gi,'ufat').replace(/a/gi,'ai');
    document.getElementById("msg").value=encritar;
    
}

function bttDesencripar(){
    event.preventDefault();
    var msg=document.querySelector("#input-texto").value;
    var desencripatar=msg.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.getElementById("msg").value=desencripatar;
}

function bttCopiar(){
    const mensaje = document.getElementById("msg");
    mensaje.select();
    document.execCommand('Copy');
}

