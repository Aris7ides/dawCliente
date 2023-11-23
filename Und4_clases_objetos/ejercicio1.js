/*Definir la estructura de una pseudoclase cuyos objetos almacenan una factura.
También será necesario crear las pseudoclases Elemento y Cliente
Las facturas están formadas por la información de la propia empresa que no cambia (nombre de
la empresa, dirección, teléfono, NIF) , la información del cliente (similar a la de la empresa) , una lista
de elementos (cada uno de los cuales dispone de descripción, precio, cantidad) y otra información básica
de la factura (importe total, tipos de iva, forma de pago) .
Una vez definidas las propiedades del objeto, añadir un método que calcule el importe total de la
factura y actualice el valor de la propiedad correspondiente.
Por último, añadir otro método que muestre por pantalla el importe total de la factura.*/

let div =document.getElementById("fact");

// Pseudoclase Elemento
class Elemento {
    constructor(descripcion, precio, cantidad) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Pseudoclase Cliente
class Cliente {
    constructor(nombre, direccion, telefono, NIF) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.NIF = NIF;
    }
}

// Pseudoclase Factura
class Factura {
    constructor(cliente, elementos, tipoIVA, formaPago) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.tipoIVA = tipoIVA;
        this.formaPago = formaPago;
        this.importeTotal = 0;  
    }
    
    empresa={
        nomEmpresa : "Vinotinto FVF.",
        direccionEmpresa : "Calle san benito 69",
        tlfEmpresa:"611258369",
        nifEmpresa: "159357K"
    };

    calcularImporteTotal() {
        let total = 0;
        for (let elemento of this.elementos) {
            total += elemento.precio * elemento.cantidad;
        }
        let totalIva=(this.tipoIVA*total)/100; 
        this.importeTotal = total+totalIva;
    }

    mostrarImporteTotal(){
        return `<table style="width:250px">
            <tr><td></td><td></td><td></td><td><hr></td></tr>
            <tr>
                <th>Total a pagar</th>
                <td>IVA=>${this.tipoIVA}%</td>
                <td>=></td>
                <th>${this.importeTotal}</th>
            </tr>
        </table>`;
    }

    mostrarEmpresa(){
        return `<p><strong>Empresa</strong><br>Nombre: ${this.empresa.nomEmpresa}<br> Direccion: ${this.empresa.direccionEmpresa} <br> Telefono : ${this.empresa.tlfEmpresa} <br> NIF: ${this.empresa.nifEmpresa} </p>`;
    }
}

function mostrarCliente(cliente){
    return `<p><strong>Cliente</strong> <br>Nombre: ${cliente.nombre} <br> Direccion: ${cliente.direccion} <br> Teléfono: ${cliente.telefono} <br> NIF: ${cliente.NIF}</p> `;
}

function mostrarElementos(arrayElemntos){
    let texto=`<table style="width:250px">
    <caption><strong><i>Productos</i></strong></caption>
    <tr>
        <th>Elemento</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
    </tr>
    `;
    for(let producto of arrayElemntos){
        texto +=`
        <tr>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.cantidad*producto.precio}</td>
        </tr>`
    }
    texto+=`</table>`;
    return texto;
}

function anyadir(){
    let des=prompt("Descripcion");
    let pre=prompt("precio");
    let cant=prompt("cantidad");

    arrElemento.push(new Elemento(des,pre,cant));
    div.innerHTML = mostrarTodo();
}

let cliente1=new Cliente("Salomon Rondón", "Calle cordoba 99", 699852147, "147369G");
let elemento1=new Elemento("Balón", 10, 2);
let elemento2=new Elemento("Camiseta",12,1);
let arrElemento=[elemento1,elemento2];
let factura1=new Factura(cliente1,arrElemento,10,"cash");

function mostrarTodo(){
    factura1.calcularImporteTotal();
    return factura1.mostrarEmpresa() + mostrarCliente(cliente1) + mostrarElementos(arrElemento) + factura1.mostrarImporteTotal();
}

div.innerHTML = mostrarTodo();