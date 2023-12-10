// A partir de la pàgina web proporcionada :
// 1. Quan es mou el ratolí en qualsevol punt de la finestra, s’ha de mostrar la posició
// del punter respecte al nevagador i respecte de la pàgina en el div info:

// 2. Al polsar qualsevol tecla, el missatge mostrat s’ha de canviar i indicar debe
// cambiar para indicar el caràcter i el codi ASCII

// 3. Quan es faça clic, el color de fons del div ha de canviar a groc ( #FFFFCC ) i quan
// es polsa una tecla el color de fons ha de ser blau ( #CCE6FF ). Quan tornem a moure
// el ratolí, el color de fons torna a ser blanc.


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