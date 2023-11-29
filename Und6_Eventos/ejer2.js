let titulo = document.createElement("h1");
let div = document.getElementById("info");
let texto=document.createElement("p");
div.appendChild(titulo);
div.appendChild(texto);

function muestraInformacion(elEvento) {
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;

    titulo.textContent = "Ratón";
    let text="Has pulsado el ratón en la posición: x=" + coordenadaX + ", y=" + coordenadaY;
    
    texto.textContent=text;
    div.style.backgroundColor="#FFFFCC";
}
document.addEventListener("click",muestraInformacion);

function muestraInfoTeclado(elEvento){
    var evento = elEvento || window.event;
    titulo.textContent="Teclado";


    let txt=`Has pulsado la tecla: Codigo[${evento.keyCode}] Caracter[${evento.key}]`;
    texto.textContent=txt;
    div.style.backgroundColor="#CCE6FF ";
}

document.addEventListener("keypress",muestraInfoTeclado);

document.addEventListener("mousemove",()=>{div.style.backgroundColor="#FFFFFF";});