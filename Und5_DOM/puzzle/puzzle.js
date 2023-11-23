/*let div=document.getElementById("content");

let arrSolution=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

let arr=fillTable(); //inicializacion de un array ya barajado

//Creacion e inicializacion de tabla
function createTable(){

    //creacion del nodo tabla
    let table=document.createElement("table");
    table.id="tabla1";

    //variable que va a ser utilizada para recorrer ela array
    let num_id=0;

    //bucle que inserta filas y columnas con imagenes en la tabla
    for(let i=0;i<4;i++){
        let fila=table.insertRow();
        for(let j=0;j<4;j++){
            let celda=fila.insertCell();
            celda.id=arr[num_id];
            celda.appendChild(document.createElement("img")).setAttribute("src",`imgn/${arr[num_id]}.gif`);
            num_id++;
        }
    }
    //append del nodo table
    div.appendChild(table);
}

//Metodo de Fisher-Yate, desordena (baraja) un array y lo devuelve
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//funcion que crea un array, lo baraja y lo devuelve
function fillTable(){
    let arr=[];
    for(let i=0;i<16;i++){
        arr.push(i);
    }
    return shuffle(arr);
}

function comparaArray(){
    let cont=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arrSolution[i]){
            cont++;
        }else{
            continue;
        }
    }
    if(cont===16){
        console.log("son iguales, ya esta solucionado");
        //return true;
    }else{
        console.log("algo falla");
    }
}

let bttnSolution=document.createElement("button");
bttnSolution.onclick=Solution;
div.appendChild(bttnSolution).appendChild(document.createTextNode("Solucionar"));

function Solution(){
    arr=arrSolution;
    let tableRemove=document.getElementById("tabla1");
    div.removeChild(tableRemove);
    createTable();
}

window.onload=createTable;
*/

let div = document.getElementById("content");

        let arrSolution = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
        let arr = fillTable(); //inicialización de un array ya barajado

        // Creación e inicialización de la tabla
        function createTable(){
            // Creación del nodo tabla
            let table = document.createElement("table");
            table.id = "tabla1";

            // Variable que va a ser utilizada para recorrer el array
            let num_id = 0;

            // Bucle que inserta filas y columnas con imágenes en la tabla
            for(let i = 0; i < 4; i++){
                let fila = table.insertRow();
                for(let j = 0; j < 4; j++){
                    let celda = fila.insertCell();
                    celda.id = arr[num_id];
                    celda.appendChild(document.createElement("img")).setAttribute("src",`imgn/${arr[num_id]}.gif`);
                    celda.onclick = function() {
                        handleCellClick(this);
                    };
                    num_id++;
                }
            }
            // Append del nodo table
            div.appendChild(table);
        }

        // Método de Fisher-Yates, desordena (baraja) un array y lo devuelve
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Función que crea un array, lo baraja y lo devuelve
        function fillTable(){
            let arr = [];
            for(let i = 0; i < 16; i++){
                arr.push(i);
            }
            return shuffle(arr);
        }

        // Función para manejar el clic en una celda
        function handleCellClick(clickedCell) {
            let cellValue = parseInt(clickedCell.id, 10);

            // Verificar si la celda clicada es la imagen en blanco (valor 0)
            if (cellValue === 0) {
                // No se puede hacer intercambio con la imagen en blanco
                return;
            }

            // Encontrar la posición de la celda clicada en el array
            let clickedIndex = arr.indexOf(cellValue);
            // Encontrar la posición de la imagen en blanco en el array
            let blankIndex = arr.indexOf(0);

            // Verificar si las celdas están adyacentes (en la misma fila o columna)
            if (areAdjacent(clickedIndex, blankIndex)) {
                // Intercambiar los valores en el array
                [arr[clickedIndex], arr[blankIndex]] = [arr[blankIndex], arr[clickedIndex]];

                // Actualizar la tabla
                updateTable();
                
                // Verificar si el puzzle está resuelto
                comparaArray();
            }
        }

        // Verifica si dos celdas están adyacentes (en la misma fila o columna)
        function areAdjacent(index1, index2) {
            let row1 = Math.floor(index1 / 4);
            let col1 = index1 % 4;
            let row2 = Math.floor(index2 / 4);
            let col2 = index2 % 4;

            return (row1 === row2 && Math.abs(col1 - col2) === 1) || (col1 === col2 && Math.abs(row1 - row2) === 1);
        }

        // Actualiza la tabla después de un intercambio
        function updateTable() {
            let table = document.getElementById("tabla1");

            for (let i = 0; i < table.rows.length; i++) {
                for (let j = 0; j < table.rows[i].cells.length; j++) {
                    let cell = table.rows[i].cells[j];
                    let cellValue = arr[i * 4 + j];
                    cell.id = cellValue;
                    cell.getElementsByTagName("img")[0].src = `imgn/${cellValue}.gif`;
                }
            }
        }

        let bttnSolution = document.createElement("button");
        bttnSolution.onclick = Solution;
        div.appendChild(bttnSolution).appendChild(document.createTextNode("Solucionar"));

        function Solution() {
            arr = arrSolution;
            updateTable();
        }

        function comparaArray(){
            let cont=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]===arrSolution[i]){
                    cont++;
                }else{
                    continue;
                }
            }
            if(cont===16){
                console.log("son iguales, ya esta solucionado");
                //return true;
            }
        }

        window.onload = createTable;
