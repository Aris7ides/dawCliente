class Animal {
    constructor(nombre, especie, npatas) { //npatas ++++
        this.nombre = nombre;
        this.especie = especie;
        this.npatas = npatas;
        this.cola = true;
    }

    get getNombre() {
        return this.nombre;
    }

    get getEspecie() {
        return this.especie;
    }

    get getNpatas() {
        return this.npatas;
    }

    get getCola() {
        return this.cola ? "Si" : "No";
    }

    set setNombre(str) {
        this.nombre = str;
    }

    set setEspecie(str) {
        this.especie = str;
    }

    set setNpatas(inte) {
        this.npatas = inte;
    }

    set setCola(bool) {
        this.cola = bool;
    }
}

class Vaca extends Animal {
    constructor(nombre, capLitros) {
        super(nombre, "Vaca", 4);
        this.capLitros = capLitros;
        this.litrosObt = 0;
    }
    get getLitrosOpt() {
        return this.litrosObt;
    }

    get getCapLitros() {
        return this.capLitros;
    }

    set setCapLitros(num) {
        this.capLitros = num;
    }

    set setLitrosOpt(num) {
        this.litrosObt += num;
        this.capLitros -= num;
    }

    ordenya(){
        if(this.getCapLitros>0){
            this.setLitrosOpt=1;
        }else{
            alert(`Ya la vaca ${this.getNombre} no se puede ordeñar más`)
        }
        main();
    }

    mostrarVaca(){
        return `<table id="vac">
            <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Nª patas</th>
                <th>Cola</th>
                <th>Capacidad de leche (L)</th>
                <th>Leche obtenida (L)</th>
            </tr>
            <tr>
                <td>${this.getNombre}</td>
                <td>${this.getEspecie}</td>
                <td>${this.getNpatas}</td>
                <td>${this.getCola}</td>
                <td>${this.getCapLitros}</td>
                <td>${this.getLitrosOpt}</td>
            </tr>    
        </table>`
    }
}

class Tigre extends Animal {
    constructor(nombre, numVictimas) {
        super(nombre, "Tigre", 4);
        this.numVictimas = numVictimas;
        this.nuevasVictimas=0;
    }

    get getNumVictimas() {
        return this.numVictimas;
    }

    set setNumVictimas(num) {
        this.numVictimas = num;
    }

    matar(){
        if(this.nuevasVictimas<10){
            this.setNumVictimas=this.getNumVictimas + 1;
            this.nuevasVictimas++;
        }else{
            alert(`Ya el tigre ${this.getNombre} ha matado ${this.nuevasVictimas} hoy, esta cansado.`)
        }
        main();
    }

    mostrarTigre(){
        return `<table id="tig">
            <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Nª patas</th>
                <th>Cola</th>
                <th>Nª de victimas</th>
                <th></th>
            </tr>
            <tr>
                <td>${this.getNombre}</td>
                <td>${this.getEspecie}</td>
                <td>${this.getNpatas}</td>
                <td>${this.getCola}</td>
                <td>${this.numVictimas}</td>
            </tr>    
        </table>`
    }
}

let arrAnimals = [
    new Vaca("Mariposa", 25),
    new Vaca("Terne", 16),
    new Tigre("Ronni", 4),
    new Tigre("Tonny", 9)
];

function mostrarGenerarAnimales() {
    let txt="";
    let btn="<br>";
    for(let anim of arrAnimals){
        if(anim.getEspecie === "Vaca"){
            txt += anim.mostrarVaca();
        }else{
            txt += anim.mostrarTigre();
        }
    }

    btn +=`
        <button id="vac" onclick="arrAnimals[0].ordenya()">Ordeñar Mariposa</button>
        <button id="vac" onclick="arrAnimals[1].ordenya()">Ordeñar Terne</button>
        <button id="tig" onclick="arrAnimals[2].matar()">Ronni mata</button>
        <button id="tig" onclick="arrAnimals[3].matar()">Tonny mata</button>` ;

    return txt + btn;
}

function main() {
    let div = document.getElementById("anim");
    div.innerHTML = mostrarGenerarAnimales(); 
}
