/*Crear un documento html que muestre una imagen y un botón (Cambia
imagen) que pulsando el botón cambie de imagen de manera aleatoria. */

let newImg=['img13.jpeg', 'img11.jpeg', 'img12.jpeg', 'img14.jpeg'];
console.log(newImg);
function changeImg(){
    let numR=Math.floor(Math.random()*newImg.length);
    document.getElementsByTagName('img')[0].setAttribute('src',newImg[numR]);
    console.log(numR);
}