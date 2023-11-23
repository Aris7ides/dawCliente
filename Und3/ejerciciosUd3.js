/*Crear un array que emmagatzeme el nom dels dotze mesos de l’any, Recórrer l’array i mostrar per
pantalla els dotze noms*/

function ejercicio1() {
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const div = document.getElementById("cont");

  for (let i = 0; i < meses.length; i++) {
    div.innerHTML += meses[i] + "<br>";
  }
}

/*A partir del següent array que es proporciona : var valors = [true, 5, false,"hola", "adeu", 2];
1) Obtindre l’element de texte major.
2) Utilitzant els valors booleans obtindre true i false com a resultat
3) Obtindre el resultat de les cinc operacions matemàtiques (suma, resta, multiplicació, divisió i
mòdul) amb els dos valors numèrics
*/

function ejercicio2() {
  var valors = [true, 5, false, "hola", "adeu", 2];
  const div = document.getElementById("cont");

  let textoMayor = "";
  let n1, n2;

  for (i = 0; i < valors.length; i++) {
    if (typeof valors[i] === "string") {
      div.innerHTML += "<br>Tipo String: \"" + valors[i] + "\" Posicion: " + i;
      if (valors[i].length > textoMayor.length)
        textoMayor = valors[i];
      else if (valors[i].length = textoMayor.length)
        textoMayor += " " + valors[i];
    }
    else if (typeof valors[i] === "boolean")
      div.innerHTML += "<br>Tipo Boolean: " + valors[i] + " Posicion: " + i;
    else if (typeof valors[i] === "number") {
      div.innerHTML += "<br>Tipo Number: " + valors[i] + " Posicion: " + i;
      if (n1 == null)
        n1 = valors[i];
      else
        n2 = valors[i];
    }
  }

  let suma = "<br>Suma=" + (n1 + n2);
  let resta = "<br>Resta=" + (n1 - n2);
  let mult = "<br>Multiplicacion=" + (n1 * n2);
  let divs = "<br>Division=" + (n1 / n2);
  let mod = "<br>Modulo=" + (n1 % n2);
  div.innerHTML += "<br>Elemento de texto mayor: " + textoMayor;
  div.innerHTML += suma + resta + mult + divs + mod;
}

/*El càlcul de la lletra del DNI es fa obtenint el mòdul del número del DNI entre 23 i accedint al valor
d’aquesta posició en aquest array :
['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
Utilitzant la funció prompt() demanar a l’usuari que introduïsca el DNI amb la lletra inclosa.
S’ha d’obtindre el nombre i la lletra del DNI proporcionat per l’usuari i comprovar que és correcte
S’ha de comprovar també que el DNI introduït per l’usuari sembla un DNI correcte. */

function ejercicio3() {
  const dniCompleto = prompt("Escriba su dni con la letra: ");
  const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

  // Comprobar que el DNI tiene un formato válido
  const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
  if (!dniRegex.test(dniCompleto)) {
    alert("El formato del DNI es incorrecto.");
    return;
  }

  //el metodo slice devuelve una parte de la cadena inidicandole el inicio y el final
  const dniNumero = dniCompleto.slice(0, 8);
  const dniResto = dniNumero % 23;
  const letraCalculada = letrasDNI[dniResto];

  alert(`La letra del DNI ${dniNumero}${letraCalculada}`);
}


/*Definir una funció que mostre informació sobre una cadena de text que es passa com a argument.
La funció ha de comprovar si està formada només per lletres majúscules, minúscules o per lletres
majúscules i minúscules*/

function ejercicio4() {
  let cadena = prompt("Escriba una cadena de texto: ");
  if (/^[A-Z]+$/.test(cadena)) {
    alert("La cadena está formada solo por letras mayúsculas.");
  } else if (/^[a-z]+$/.test(cadena)) {
    alert("La cadena está formada solo por letras minúsculas.");
  } else if (/^[a-zA-Z]+$/.test(cadena)) {
    alert("La cadena está formada por letras mayúsculas y minúsculas.");
  } else {
    alert("La cadena no cumple ningún criterio.");
  }
}

/*Definir una funció que mostre informació sobre una cadena de text que es passa com a argument.
La funció ha de comprovar si la cadena de text és un palíndrom ( Paraula o frase que és igual llegida
d'esquerra a dreta que de dreta a esquerra )
Exemple : "La ruta nos aporto otro paso natural".*/

function ejercicio5() {
  let cadena = prompt("Escriba una cadena de texto: ");

  const sinEspacios = cadena.toLowerCase().replace(/ /g, '');
  const alReves = sinEspacios.split('').reverse().join('');
  if (sinEspacios === alReves)
    alert("La cadena es un palíndromo.");
  else
    alert("La cadena no es un palíndromo.");

}

/*Realitza una pàgina web que cada 10 segons sol.licite el número d’un DNI fins que
s’escriga “-1” (setTimeOut – setInterval)
Els DNIs introduïts s’han d’emmagatzemar en un array
Finalment se han de mostrar tots els DNIs introduïts amb la lletra calculada
Si s’introduïx un número de DNI incorrecte, s’ha de mostrar un missatge i acabar.*/

function ejercicio6() {
  const dnisArray = [];
  function solicitarDNI() {
    const dni = prompt("Introduce un número de DNI o escribe -1 para terminar");
    if (dni === "-1") {
      mostrarDNIsConLetras();
      return;
    }

    if (validarDNI(dni)) {
      dnisArray.push(dni);
    } else {
      alert("Número de DNI incorrecto.");
    }

    setTimeout(solicitarDNI, 10000); // Llamar a la función cada 10 segundos
  }

  function validarDNI(dni) {
    const dniRegex = /^[0-9]{8}$/;
    return dniRegex.test(dni);
  }

  function mostrarDNIsConLetras() {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let mensaje = "DNIs introducidos con letras calculadas:\n";

    for (const dni of dnisArray) {
      const dniNumero = dni;
      const dniResto = dniNumero % 23;
      const letraCalculada = letrasDNI[dniResto];
      mensaje += `${dniNumero}${letraCalculada}\n`;
    }

    alert(mensaje);
  }

  solicitarDNI();
}

/*Realitza un script que imprimisca 14 resultats aleatoris d'una quiniela 1 X 2.*/

function ejercicio7() {
  const resultados = ['1', 'X', '2'];
  const quiniela = [];

  for (let i = 0; i < 14; i++) {
    const resultadoAleatorio = resultados[Math.floor(Math.random() * resultados.length)];
    quiniela.push(resultadoAleatorio);
  }

  console.log("Quiniela generada:", quiniela.join(' '));

}

/*Realitza el script anterior però amb la probabilitat que isca l'1 siga del 60%, la de la X del 30% i la del 2 del
10%*/

function ejercicio8() {
  const quiniela = [];
  const probabilidades = ['1', '1', '1', '1', '1', '1', 'X', 'X', 'X', '2'];

  for (let i = 0; i < 14; i++) {
    const resultadoAleatorio = probabilidades[Math.floor(Math.random() * probabilidades.length)];
    quiniela.push(resultadoAleatorio);
  }

  console.log("Quiniela generada con probabilidades:", quiniela.join(' '));
}

/*Crea una funció que torne el número PI amb dos decimals. Utilitza la variable PI que ja existix en javascript*/

function ejercicio9() {
  const div = document.getElementById("cont");
  const piConDosDecimales = parseFloat(Math.PI.toFixed(2));
  div.innerHTML = `Numero pi= ${piConDosDecimales}`;
}

/*Crea una funció que genere 100 números aleatoris entre 1 i 1000 que no es repetisquen i després mostra'ls
per pantalla de forma ordenada*/

function ejercicio10() {
  const numerosAleatorios = [];
  const div = document.getElementById("cont");

  while (numerosAleatorios.length < 100) {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    if (!numerosAleatorios.includes(numeroAleatorio)) {
      numerosAleatorios.push(numeroAleatorio);
    }
  }

  numerosAleatorios.sort((a, b) => a - b); 
  div.innerHTML = numerosAleatorios.join("<br>");
  /*se utiliza una función de flecha que compara dos valores "a" y "b". Si el resultado de la comparación es negativo,
   significa que "a" es menor que "b" y, por lo tanto, "a" debe estar antes que "b" en el array ordenado.
   Si el resultado de la comparación es positivo, significa que "a" es mayor que "b" y, por lo tanto, "b" debe estar antes que "a" en el array ordenado. 
  Si el resultado de la comparación es cero, significa que "a" y "b" son iguales y su orden en el array no importa.  */
}
