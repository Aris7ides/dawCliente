function ejercicio1(){
    /*Realiza un script de demande un texto lo devuelva en mayascula */
    let texto=prompt("Escriba un texto y de transformara a mayuscula:");
    document.getElementById("cont").innerHTML=texto.toUpperCase();
}

function ejercicio2(){
    //Realiza un script que demande una cadena de texto y la muestre con el signo - entre cada caracter "h-o-l-a- -g-..."
    //sin usar replace
    let texto=prompt("Escriba una cadena:");
    let charArray=[];
    for(let i=0;i<texto.length;i++){
        charArray[i]=texto.charAt(i);
        console.log(charArray[i]);
    }
    document.getElementById("cont").innerHTML=charArray.join('-');

    //con replace:
    //let resultado = cadena.replace(/(.)/g, "$1-");

}

function ejercicio3(){
    //Realiza un script que cuente el numero de vocales que tiene un texto
    let texto=prompt("Escriba un texto:");
    let vocales=['a','e','i','o','u','A','E','I','O','U'];
    let contador=0;
    for(let i=0;i<texto.length;i++){
        if(vocales.includes(texto.charAt(i))){
            contador+=1;
        }
    }
    document.getElementById("cont").innerHTML="El texto:<br> " + texto + "<br>Tiene " + contador + " vocal/es";
}

function ejercicio4(){
    /*Demanem una cadena de text que sabem que pot contindre parèntesi. Realitza un script que extraga la cadena
    que es troba entre els parèntesis.
    Exemple: Si escribimoe el text Hola (que) tal es mostrarà que.
    Si no hi ha el signe ( mostrarà una cadena buida i si hi ha el signe ( pero no el signe ) mostrarà des del primer
    parèntesi fins al final.*/
    let texto=prompt("Escriba un texto:");
    let substr="";
    let parentA=["("];
    let posA=-1;
    let parentC=[")"];
    let posC=-1;
    for(let i=0;i<texto.length;i++){
        if(parentA.includes(texto.charAt(i))){
            posA=i+1;
        }
        if(parentC.includes(texto.charAt(i))){
            posC=i;
        }
    }
    if(posA!=-1 && posC!=-1){           //es decir que tiene un parentesis, ya que se ha modificado la posicion
        substr=texto.slice(posA,posC);
    }else if(posA!=-1 && posC==-1){
        substr=texto.slice(posA);
    }else{
        substr="(vacia)";
    }
    document.getElementById("cont").innerHTML="El texto:<br> " + texto + "<br>Frase: " + substr;

}

function ejercicio5(){
    /*Realitza un script que mostre la posició de la primera vocal d'un text introduït per teclat però utilitzant el
    mètode includes.*/
    let texto=prompt("Escriba un texto:");
    let vocales=['a','e','i','o','u','A','E','I','O','U'];
    let contador=0;
    let posicion;
    let voc="";
    for(let i=0;i<texto.length;i++){
        if(vocales.includes(texto.charAt(i)) && contador===0){
            posicion=i+1;
            contador+=1;
            voc=texto.charAt(i);
        }
    }
    if(contador>0){
        document.getElementById("cont").innerHTML="El texto:<br> " + texto + "<br>Tiene una vocal en la posicion " + posicion + " y es: " + voc;

    }else{
        document.getElementById("cont").innerHTML="El texto:<br> " + texto + "<br>No tiene vocal";

    }

}
