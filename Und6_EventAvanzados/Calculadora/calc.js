//Funciones 
// pulsada() => Introduce en la pantalla la tecla pulsada
// modificacion() => Ressalta la C, el punto, la pantalla 
// resetGeneral() => Vuelve al estado inicial 
// marcaDeNumeros() => Resalta todos los numeros
// marcaDeOperadores() => Resalta los operadores

// clases => numero, operador, punto, igual , limpiar (C) , pantalla

// id => marcaNumeros, marcaOperadores

// div => class partteSuperior teclas ------ id calculadora, modificado, contenedor

let pant= document.getElementsByClassName("pantalla")[0];
//le agrego un node al div de pantalla
let contPant = document.createElement("p");
contPant.style.margin="0px";
pant.append(contPant);

function pulsada(str){
    let nums=/[0-9]$/;
    let opr=/[+\-*/]/;
    if(nums.test(str)){//si son numeros
        contPant.textContent+=str;
    }else if(opr.test(str)){//si son operadores
        if(opr.test(contPant.textContent)){ //si el textcontent ya tiene un operador llama a la funcion iguala y sigue operando
            iguala();
            contPant.textContent+=str;
        }else{
            contPant.textContent+=str;
        }
    }else if(str==="."){//si es el punto
        if(contPant.textContent==="" || !nums.test(contPant.textContent) || /\d[.]\d*$/.test(contPant.textContent)){//si esta vacia la pantalla o si termina en un operador no se podra escribir el numero
            return;
        }else{
            contPant.textContent+=str;
        }
    }else if(str==="C"){//si es la C de limpiar
        contPant.textContent="";
    }else{//si es el igual
        iguala();
    }

    function iguala(){
        let arr=contPant.textContent.split(opr);
        let simb=opr.exec(contPant.textContent)[0];
        let ttt;
        switch (simb){
            case "-": ttt= parseFloat(arr[0]) - parseFloat(arr[1]); break;
            case "+": ttt= parseFloat(arr[0]) + parseFloat(arr[1]); break;
            case "*": ttt= parseFloat(arr[0]) * parseFloat(arr[1]); break;
            case "/": ttt= parseFloat(arr[0]) / parseFloat(arr[1]); break;
            default : ttt="Error";
        }
        contPant.textContent=ttt;
    }
}

let c=document.getElementsByClassName("limpiar")[0];
let dot=document.getElementsByClassName("punto")[0];

function modificacion(str){
    if(str==="la_C"){
        c.style.color="white";
        c.style.backgroundColor="red";
    }else if(str==="punto"){
        dot.style.color="white";
        dot.style.backgroundColor="purple";
    }else{
        pant.style.color="white";
        pant.style.backgroundColor="blue";
    }
}

let numeros=document.getElementsByClassName("numero");

function marcaDeNumeros(){
    for(let item of numeros){
        item.style.backgroundColor="black";
        item.style.color="white";
    }
}

let operadores=document.getElementsByClassName("operador");

let igual=document.getElementsByClassName("igual")[0];
let igualColorInicial=igual.style.color;
let igualBackColorInicial=igual.style.backgroundColor;

function marcaDeOperadores(){
    for(let item of operadores){
        item.style.backgroundColor="yellow";
        item.style.color="red";
    }
    igual.style.backgroundColor="yellow";
    igual.style.color="red";
}

function resetGeneral(){
    window.location.reload();
}