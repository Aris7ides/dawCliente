const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dia=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function ejercicio1() {
    /*Realitza un script que escriba en el document la data i hora actual.
    L'eixida haurà de tindre el format següent:
    Hui és dimarts, 28 de Febrer de 2018 i són les 14:32 hores.*/

    let fechaActual = new Date();

    alert("Hoy es " + dia[fechaActual.getDay()] + ", " + fechaActual.getDate() + " de " + meses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear() + " y son las " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + " horas");
}

function ejercicio2(){
    /*Realiza un script que pida un nombre y dos apellidos y luego diga el tiempo que se ha tardado en introducirlos el usuario*/
    let inicio=new Date().valueOf();
   
    let nomb=prompt("Introduzca un nombre");
    let ape1=prompt("Introduzca el primer apellido");
    let ape2=prompt("Introduzca el segundo apellido");
    let nomCompleto=[nomb.trim(), ape1.trim(), ape2.trim()];
    let final=new Date().valueOf();
    let demora=final-inicio;
    alert("Se ha tardado " + Math.floor(demora/60) + " segundos" +" en escribir " + nomCompleto.join(" "));
}

function ejercicio3(){
    /*Realiza un script que pida un mes y una año y luego muestre su calendario
    OCTUBRE - 2014 1 (dimecres) , 2 (dijous) , ..... , 31 (divendres) */

    let mesP=prompt("Introduzca un mes en numeros del 1 al 12");
    let anyoP=prompt("Introduzca un año en formato XXXX");
    
    let div=document.getElementById("cont");
    div.innerHTML = "<h1>" + meses[mesP-1] + " - " + anyoP + "</h1>";

    let fechaActuale;
    let i=1;
    do{
        fechaActuale=new Date(anyoP,mesP-1, i);
        div.innerHTML += fechaActuale.getDate() + " (" + dia[fechaActuale.getDay()] + ") ";
        i++;
    }while(new Date(anyoP,mesP,0).getDate() >= i); 
    //Compara el ultimo dia del mes del usuario con i, mientras i no sea mayor a el el bucle seguira
    //si el dia se deja en 0, pues contara como el ultimo dia del mes anterior, asi que mesP , 0 es igual al ultimo dia de mesP-1
}

function ejercicio4(){
    //Realiza un script que pida una fecha e indique que fecha sera en 30, 60 y 90 dias

    let div=document.getElementById("cont");

    let diauser=prompt("Indique un dia ");
    let mesuser=prompt("Indique el mes ");
    let anyouser=prompt("Indique el año ");

    let fechuser=new Date(anyouser,mesuser-1,diauser);

    div.innerHTML = fechuser.getDate() + "/ " + meses[fechuser.getMonth()] + " / " + fechuser.getFullYear() + "<br>";
    
    for(let i=1;i<=3;i++){
        diauser=parseInt(diauser)+30;
        let nextdate1=new Date(anyouser,mesuser-1,diauser);
        div.innerHTML += nextdate1.getDate() + "/ " + meses[nextdate1.getMonth()] + " / " + nextdate1.getFullYear() + "<br>";
    }
}

function ejercicio5(){
    /*Realitza un script que mostre un rellotge en pantalla amb data i hora i que s'actualitze cada segon.
    Funció setTimeout() o setInterval() .
    Ampliem l'exercici per a fer un compte arrere, havent de sol·licitar a l'usuari el nombre de segons a
    partir dels quals realitzar el compte arrere
    Nota : Es pot implementar utilitzant l'objecte Date o sense ell
    Finalment, col·locar dos botons en la pàgina web, un per a detindre el compte arrere i un altre per a
    reprendre-la */

    let segUser=prompt("Indique un numero de segundos y comenzara una cuenta atras");
        
    segUser=parseInt(segUser);//convierto los datos del usuario a int para hacer una resta 

    mostrarHora(); //llamo a la funcion que se autollamara cada segundo

    function mostrarHora(){
        let div=document.getElementById("cont");

        let text="<h3>Cuenta atras... " + segUser + "</h3>"; //muestro los segundos de la ceunta atras

        div.innerHTML = "<h1>Hora actualizada</h1>" + hora() + text; //muestro el contenido de la pagina
        
        if(segUser>0 && statuto){ //si los datos del usuario son mayores a 0 y el statuto es true llamo a la funcion cuentatras
            cuentaAtras();
        }
        
        function cuentaAtras(){
            if(segUser>0){//hago la resta
                segUser-=1;
            }else{
                segUser=0;
            }
        }
        
        function hora(){
            let fechActual=new Date();//creo la fecha actual cada segundo
            let horaActual=fechActual.getHours(); //horas, minutos, segundos
            let minActual=fechActual.getMinutes();
            let segActual=fechActual.getSeconds();
            return "<h2>La hora es "+horaActual + ":" + minActual + ":" +segActual +"</h2>";
        }
        setTimeout(mostrarHora,1000);//funcion que llama a una funcion cada segundo
    }
}
let statuto=true; //se inicializa en true
function estado(x){//funcion que se llama en el html button y es la detiene o continua la cuenta atras
    statuto=x;
}