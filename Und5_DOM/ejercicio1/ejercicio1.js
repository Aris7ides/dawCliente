/*Ejercicio 1
Dado el html mostrar los siguientes datos:
• Numero de enlaces de la página.
• Dirección del penúltimo enlace
• Numero de enlaces que apuntan a http://prueba
• Numero de enlaces del tercer párrafo */

//Numero de enlaces de la página.
console.log('Numero de enlaces de la página');
const enlaces=document.querySelectorAll('a');
console.log(enlaces.length);

//Dirección del penúltimo enlace
console.log('Dirección del penúltimo enlace');
let penultimo=enlaces[enlaces.length-2].getAttribute("href");
console.log(penultimo);

//Numero de enlaces que apuntan a http://prueba
console.log('Numero de enlaces que apuntan a http://prueba');
let cont=0;
const condi='http://prueba';
for(let i=0;i<enlaces.length;i++){
    let prueba=enlaces.item(i);
    if(prueba.getAttribute('href')==condi){
        cont++;
    }
}
console.log(cont);

//Numero de enlaces del tercer párrafo
console.log('Numero de enlaces del tercer párrafo');
const lastp=document.body.getElementsByTagName('p')[2];
console.log(lastp.getElementsByTagName('a').length);