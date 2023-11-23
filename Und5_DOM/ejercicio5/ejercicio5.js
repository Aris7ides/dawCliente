/**Realizar una página en la que se muestren 3 cuadros, donde los dos primeros
se rellenarán con dos números aleatoriamente al pulsar a un botón. El tercer
cuadro mostrará el número mayor de estos dos al pulsar otro botón. */

let num1=document.getElementById("pri");
let num2=document.getElementById("seg");
let mayor=document.getElementById("ter");

function genera(){
    /*let nh1=document.createElement("h1");
    let txt1=document.createTextNode(Math.floor(Math.random()*100)+1);
    num1.appendChild(nh1.appendChild(txt1));
    */
    num1.innerHTML="<h1>"+Math.floor(Math.random()*10)+1+"</h1>";
    /*
    let nh2=document.createElement("h1");
    let txt2=document.createTextNode(Math.floor(Math.random()*100)+1);
    num2.appendChild(nh2.appendChild(txt2));
    */
    num2.innerHTML="<h1>"+Math.floor(Math.random()*10)+1+"</h1>";
}

function compara(){
    let txt="";
    if(num1.children.item(0).textContent>num2.children.item(0).textContent){
        txt=num1.children.item(0).textContent + " Es mayor";
    }else if(num1.children.item(0).textContent<num2.children.item(0).textContent){
        txt=num2.children.item(0).textContent + " Es mayor";
    }else{
        txt="Son iguales";
    }
    mayor.innerHTML=`<h1>${txt}</h1>`;
}