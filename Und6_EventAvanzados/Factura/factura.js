let bttns=document.getElementsByTagName('button');

const bttnProducto=bttns.item(0); //añadir producto
const bttnCesta=bttns.item(1); //añadir a la cesta
const bttnBorrar=bttns.item(2); // borrar cesta

let arrProductos=[]; //array de productos añadidos

class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

/*Fent click en la icona de la imatge de la pàgina podrem inserir nous articles
(Descripció i preu) que es carregaran en el desplegable */

let select=document.getElementsByTagName("select")[0];
let pos=0;

function anyadirProducto(evento){
    let pd2=document.getElementById("producto2").value;
    let pr2=document.getElementById("precio2").value;
    
    if(pd2==="" || pr2===""){
        alert("No se ha añadido el producto. Rellena todos los campos");
    }else{
        let producto=new Producto(pd2,pr2);
        arrProductos.push(producto);
        
        let option=document.createElement("option");
        option.value=pos; //le doy de value un numero que servira de referencia en el array de productos
        pos++;
        option.textContent=producto.nombre;
        select.append(option);
        alert("producto añadido: " + producto.nombre);
    }
}

bttnProducto.addEventListener("click",anyadirProducto);

/* Quan seleccionem una opció del desplegable s'ompliran les caixes de text
permetent la seua modificació, afegint una quantitat distinta */

let cpPrecio=document.getElementById("precio");
let cpUnidades=document.getElementById("unidades");
let cpImporte=document.getElementById("importe");

select.addEventListener("change",function (){
    cpPrecio.value=arrProductos[select.value].precio; 
    cpUnidades.value=1;
    cpImporte.value=cpPrecio.value*cpUnidades.value;
});

cpUnidades.addEventListener("change",function (){
    cpImporte.value=cpPrecio.value*this.value;
});

/*Quan fem click a Afegir a la cistella s'afegirà una fila que contindrà les dades
que hàgem posat en les caixes de text */

let tb=document.getElementsByTagName("tbody")[0];


bttnCesta.addEventListener("click",function(){
    let row=tb.insertRow();
    
    let ics=document.createElement("span");
    ics.className="ics";
    ics.textContent="X";
    ics.style.color="black";
    ics.style.backgroundColor="red";
    ics.style.cursor="pointer";
    
    for(let i=0;i<5;i++){
        let cell=row.insertCell();
        switch(i){
            case 0: cell.textContent=arrProductos[select.value].nombre;break;
            case 1: cell.textContent=arrProductos[select.value].precio;break;
            case 2: cell.textContent=cpUnidades.value;break;
            case 3: cell.textContent=cpImporte.value;cell.className="imp";break;
            case 4: cell.append(ics);break;
        }
    }

    actualizaImporte();

    ics.addEventListener("click",function(){
        let rowPadre=this.parentElement.parentElement;
        tb.removeChild(rowPadre);
        actualizaImporte();
    });
});

/*A més a més s'afegirà una icona amb una ics per a eliminar eixa fila de la
factura i es calcularà l'import total de la factura */

let tf=document.getElementsByTagName("tfoot")[0];
let importeTotal=tf.children[0].children[3];

//todos los de td añadidos de la tabla tienen una clase imp

function actualizaImporte(){
    let calc=document.getElementsByClassName("imp");

    let suma=0;
    for(let i=0;i<calc.length;i++){
        suma+=parseFloat(calc[i].textContent);
    }

    importeTotal.textContent=suma;
}


/*El botó Esborrar cistella ens eliminarà totes les files inserides */

bttnBorrar.addEventListener("click", function (){
    while(tb.firstElementChild){
        tb.removeChild(tb.firstChild);
    }

    importeTotal.textContent="0.00";
});

