// A partir de la solució del exercici 5.6 :
// a) En els camps que només accepten números, no permetre introduir cap caràcter diferent. S’ha de
// capturar l’esdeveniment onkeypress i evitar el seu comportament per defecte en cas que no s’haja
// introduït un número (veure exercici 1)

//no permitir introducir caracteres que no sean numeros en los elementos correspondientes
//dni codigo postal telefono de contacto

let dni=oForm1.elements["dni"];
let telefono=oForm1.elements["telefono"];
let codigopostal=oForm1.elements["codigopostal"];


//los keyCode de los numeros van desde el 48 al 57

function prevenir(evento){
    if(evento.keyCode<48 || evento.keyCode>57){
        evento.preventDefault();
    }
}

dni.addEventListener("keypress", prevenir);
telefono.addEventListener("keypress", prevenir);
codigopostal.addEventListener("keypress", prevenir);