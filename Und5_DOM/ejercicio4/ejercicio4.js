/**
 * Dado el html realizar los siguientes cambios:
 *• Todos los enlaces deben cambiarse por un protocolo más seguro:
 *https://
 *• Los párrafos cuyo class="importante" se modifica por class="resaltado" y
 *el resto de párrafos se les añade class="normal"
 *• Los enlaces cuyo class="importante", se les añade el atributo "name"
 *con un valor autogenerado que sea igual a importante+i, donde i
 *empieza en 0.
*/

let protocoloA=document.getElementsByTagName("a");

for(let i=0;i<protocoloA.length;i++){
    protocoloA.item(i).setAttribute("href",protocoloA.item(i).getAttribute("href").replace("http://","https://"));
}

let parrafos=document.getElementsByTagName("p");

for(let parrafo of parrafos){
    if(parrafo.className==="importante"){
        parrafo.className="resaltado";
    }else{
        parrafo.className="normal";
    }
}

let enlacesImportante=document.querySelectorAll("a.importante");

for(let i=0;i<enlacesImportante.length;i++){
    const attri=document.createAttribute("name");
    attri.value=`importante${i}`;
    enlacesImportante.item(i).setAttributeNode(attri);
}

