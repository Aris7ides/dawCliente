/*
Crear un documento html que muestre una imagen y dos botones (Anterior y
Siguiente) que pulsando los botones nos permitan recorer la colección de
imagenes.
*/

let arrDados=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
let img=document.getElementById("dados");
let imgInicial=Math.floor(Math.random()*6);
img.setAttribute("src",arrDados[imgInicial]);

function next(){
    if(imgInicial>=arrDados.length-1){
        imgInicial=0;
    }else{
        imgInicial++;
    }
    img.setAttribute("src",arrDados[imgInicial]);
}

function previus(){
    if(imgInicial<=0){
        imgInicial=arrDados.length-1;
    }else{
        imgInicial--;
    }
    img.setAttribute("src",arrDados[imgInicial]);
}