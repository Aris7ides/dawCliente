// A partir de la solució del exercici 5.6 :
// a) Cada vegada que un element modifique el seu contingut (esdeveniment change) haurà de validar
// només aquest element sense enviar el formulari. En cas que la validació no siga correcta haurà de
// tornar-li el focus no deixant eixir.
// b) Com podeu comprobar l’opció a) no és gens pràctic, hauria sigut millor si la validació s’haguera
// fet al eixir de l’element independentment de si hem modificat el contingut del camp. Es tracta de fer
// una segona solució de l’exercici para aquest cas

//a => comprobar validacion de elemento al cambiar (change) si no es valido no dejar salir del focus

let edad = oForm1.elements["edad"];

function noClick(evento){
    edad.focus();
}

edad.addEventListener("change", function (){
    if(!checkEdad()){
        window.addEventListener("click", noClick);
    }else{
        window.removeEventListener("click",noClick);
    }
});



//b => comprobar elemento al salir de el (blur)

edad.addEventListener("blur", function (){
    if(!checkEdad()){
        window.addEventListener("click", noClick);
    }else{
        window.removeEventListener("click",noClick);
    }
});