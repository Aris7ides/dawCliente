//FACTORIAL 2.1 n=n*(n-1) ejemplo n=5 .... n=5*(4)
/*Exercici 2.1
El factorial d’un nombre sencer n és una operació matemàtica que consistix a multiplicar tots els
factors n x (n-1) x (n-2) x ... x 1 .
Utilitzant l’estructura for, crear un script que cacule el factorial d’un nombre sencer sol·licitat al*/

function factorial() {
    let n = window.prompt("Escriba el numero a calcular el factorial:");

    let des = n - 1;

    while (des >= 1) {
        n *= des;
        --des;
    }

    document.write(n);
}

//EJERCICIO 2.2 
/*Utilitzant l’estructura for, crear un script que ens diga si un nombre sencer sol·licitat al usuari es un
nombre primer i parell o imparell.
*/
function parImpar() {

}

//EJERCICIO 2.3 PIRAMIDE del 1 al 30
/*Realitza un script que escriba una piràmide de l'1 al 30 de la manera següent :
1
22
333
4444
55555
666666
*/

function piramide() {
    let n = 30;
    document.write(1 + "<br>");
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write("<br>");
    }
}

//EJERCICIO 2.4 PIRAMIDE INVERSA
/*Fes un script que escriba una piràmide inversa dels números de l'1 al número que indique l'usuari de
la manera següent : (suposant que indica 30)
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

function piramideInversa() {
    let n;
    do {
        n = window.prompt("Indica un numero entero");
    } while (isNaN(n));

    do {
        for (let i = 1; i <= n; i++) {
            document.write(n);
        }
        document.write("<br>");
        n--;
    } while (n >= 1);
}

//EJERCICIO 2.5 PIRAMIDE SECUENCIAL
/*Crea un script per a generar piràmide següent amb els números de l'1 al número que indique l'usuari
(no major de 50)
1
12
123
1234
12345
123456
*/

function piramideSecuen() {
    let n = prompt("Indique un numero no mayor a 50 ");
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

//EJERCICIO 2.6 MULTIPLOS
/*n script que escriba els números de l'1 al 500, que indique quals són múltiples de 4 i de 9 i que
cada 5 línies mostre una línia horitzontal. Per exemple :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

function multiplos() {
    const n=500;
    for(let i=1;i<=n;i++){
        if(i%4==0 && i%9==0){
            document.write(i+" Es multiplo de 4 y 9");
        }else if(i%4==0){
            document.write(i+" Multiplo de 4");
        }else if(i%9==0){
            document.write(i+" Multiplo de 9");
        }else{
            document.write(i);
        }
        if(i%5==0){
            document.write("<hr>");
        }else
            document.write("<br>");
    }
}

//EJERCICIO 2.7 TABLAS
/*Realitza un script que demane nombre de files i columnes i escriba una taula. Dins cada una de les
cel·les haurà d'escriure's un número consecutiu en orde descendent. Si, per exemple, la taula és de
7×5 els números aniran del 35 a l'1
*/

function tabla() {
    let rows=prompt("Escriba el numero de filas");
    let colums=prompt("Escriba el numero de columnas");

    let orden=parseInt(rows)*parseInt(colums);

    document.write(`<table style="border:1px solid black;width:25%">`);

    for(let i=1;i<=rows;i++){
        document.write(`<tr>`);
        for(let j=1;j<=colums;j++){
            document.write(
                `<td style="border:1px dashed black;text-align:center;">
                    ${orden}
                </td>`
            );
            orden--;
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}

//EJERCICIO 2.8 FIBONACCI
/*Realitza un script que mostre la sèrie de fibonacci fins a un número entre 1 i 100 comanda per teclat
*/

function fibonacci() {
    let n=prompt("Escriba el tamaño de la serie fibonacci (de 1 a 100)");
    let fibo=1;
    for(let i=0;i<n;i++){
        fibo=fibo+i;
        document.write(fibo+"&nbsp");
    }
}

//EJERCICIO 2.9 PIEDRA PAPEL O TIJERA 
function juego() {
    let usuario = prompt("Intoduzca su jugada: \n (1) PIEDRA \n (2) PAPEL \n (3) TIJERA");
    usuario = parseInt(usuario);
    let pc = Math.floor((Math.random() * (3 - 1 + 1)) + 1);

    let resulpc; let resuluser;
    switch (pc) {
        case 1:
            resulpc = "piedra";
            break;
        case 2:
            resulpc = "papel";
            break;
        case 3:
            resulpc = "tijera";
            break;
        default:
            break;
    }
    switch (usuario) {
        case 1:
            resuluser = "piedra";
            break;
        case 2:
            resuluser = "papel";
            break;
        case 3:
            resuluser = "tijera";
            break;
        default:
            break;
    }
    let msg = "\npc: " + resulpc + "\nusuario: " + resuluser;

    if (usuario == pc) {
        alert("EMPATE" + msg);
    } else if (pc == 1 && usuario == 3) {
        alert("HAS PERDIDO" + msg)
    } else if (pc == 3 && usuario == 2) {
        alert("HAS PERDIDO" + msg);
    } else if (pc == 2 && usuario == 1) {
        alert("HAS PERDIDO" + msg);
    } else {
        alert("has ganado :(" + msg);
    }
}