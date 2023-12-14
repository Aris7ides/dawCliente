// A partir de la solució del exercici 5.6 :
// a) Cada vegada que un element rep el focus es resalte amb color de fons verd i bords de 2px negre
// b) Cada vegada que un element perd el focus es torne el fons a blanc, bords de 1px i gris
// c) Per defecte el campo Nombre tindrà asignat el focus
// d) Al enviar les dades tots els elements que no hagen superat la validació tindràn el color de fons
// roig, bords de 2px i negra
// e) Els missatges d’error eixiran en el div davant del formulari

let oForm1=document.forms[0];

//a => en focus background verde y border 2px black
for(let i=0;i<oForm1.elements.length;i++){
    oForm1.elements[i].addEventListener("focus",function (){
        this.style.backgroundColor="green";
        this.style.border="3px solid black";
    })
}

//b => pierde focus background blanco y border 1 px gris

for(let i=0;i<oForm1.elements.length;i++){
    oForm1.elements[i].addEventListener("blur",function (){
        this.style.backgroundColor="white";
        this.style.border="1px solid gray";
    })
}

// c => autofocus a nombre
/*
document.addEventListener("load",function (){
    oForm1.elements[0].autofocus="true";
});
*/

//d => elemntos no completados background rojo border 2px negra

oForm1.addEventListener("submit",function (){
    for(let i=0;i<oForm1.elements.length;i++){
        if(oForm1.elements[i].value===""){
            oForm1.elements[i].style.backgroundColor="red";
            oForm1.elements[i].style.border="2px solid black";
        }
    }
});

//e => Els missatges d’error eixiran en el div davant del formulari