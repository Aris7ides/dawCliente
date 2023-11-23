/**Realizar una página que muestre dos campos de texto (uno para filas y otro
para columnas) y un botón que al presionarlo genere una tabla con las
dimensiones (filas y columnas) definidas en los input anteriores y un botón.
Cada una de las deberá contener un select con todas las imágenes que se
puedan mostrar.
Cuando se pulse el último botón creado la tabla cargará en las celdas las
imágenes de las select. */

let rw=document.getElementById('row');
let cl=document.getElementById('column');
let tb=document.getElementById('table');

let txt=`<select name="" id="">`
for(let i=0;i<16;i++){
    if(i===0){
        txt+=`<option value="blanco">imagen${i}</option>`;
        continue;
    }
    txt+=`<option value="${i}">imagen${i}</option>`;
    
}
txt+=`</select>`;

function template(){
    let rwValue=rw.value;
    let clValue=cl.value;

    let elTable=document.createElement("table");
    for(let i=0;i<rwValue;i++){
        let r=elTable.insertRow();
        for(let j=0;j<clValue;j++){
            let c=r.insertCell();
            c.id=j+i+"importante";
            c.innerHTML=txt;
        }
    }
    tb.appendChild(elTable);
}

function createTable() {
    let rows = document.querySelectorAll('table tr');
    
    rows.forEach(function(row) {
        let selects = row.querySelectorAll('select');
        selects.forEach(function(select) {
            let imgNode = document.createElement('img');
            imgNode.src = select.value + ".gif";

            let parent = select.parentNode;
            parent.replaceChild(imgNode, select);
        });
    });
}