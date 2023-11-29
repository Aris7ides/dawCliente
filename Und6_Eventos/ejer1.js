// A partir de la pàgina web proporcionada i utilitzant els observadors DOM nivell 0 i
// DOM nivell 2
// 1) Quan es faça clic sobre un enllaç, s’oculte el paràgraf de davant i es canvie el text
// per “Mostrar el contingut”
// 2) Quan es torne a fer clic sobre l’enllaç, ha de apareixer el pàragraf de nou.
// Nota : Fer-ho amb una única funció observadora per a tots els paràgrafs.
// Nota : Per a ocultar o mostrar continguts podeu utilitzar la propietat CSS display
// (display : none i display : block)


let aEnlaces = document.body.querySelectorAll('a');
aEnlaces.forEach(enlace => {
    enlace.addEventListener("click",hideShow);
});

function hideShow(evento) {
    evento.preventDefault();
    let parrafo=evento.target.previousElementSibling;
    if(parrafo.style.display==="none"){
        parrafo.style.display='block';
    }else{
        parrafo.style.display="none";
    }

    if(evento.target.textContent==="Mostrar Contenido"){
        evento.target.textContent="Ocultar Contenido";
    }else{
        evento.target.textContent="Mostrar Contenido";
    }
}