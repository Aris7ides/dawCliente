// A partir de la pàgina web proporcionada i utilitzant els observadors DOM nivell 0 i
// DOM nivell 2
// 1) Quan es faça clic sobre un enllaç, s’oculte el paràgraf de davant i es canvie el text
// per “Mostrar el contingut”
// 2) Quan es torne a fer clic sobre l’enllaç, ha de apareixer el pàragraf de nou.
// Nota : Fer-ho amb una única funció observadora per a tots els paràgrafs.
// Nota : Per a ocultar o mostrar continguts podeu utilitzar la propietat CSS display
// (display : none i display : block)


let aEnlaces = document.body.getElementsByTagName('a');
for (let i = 0; i < aEnlaces.length; i++) {
    aEnlaces[i].addEventListener("click", ocultar);
}


function ocultar() {
    alert("algo");
}