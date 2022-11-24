class Edificio {
    constructor(calle, numero, codigopostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigopostal;
        this.plantas = new Array();
        // Imprimimos el mensaje por defecto cada vez que se crea un objeto Edificio.
        //show.innerHTML = ("<br/>- Construido nuevo edificio en calle: " + calle + ", nº: " + numero + ", CP: " + codigopostal);
    }
    // Métodos
    agregarPlantasYPuertas(numplantas, puertas) {
        var totalplantas = this.plantas.length;
        if (totalplantas <= 0)
            var inicio = 0;
        else
            var inicio = totalplantas - 1;
        for (let i = inicio; i < totalplantas + numplantas; i++) {
            this.plantas[i] = new Array(puertas);
            for (let j = 0; j < puertas; j++)
                this.plantas[i][j] = "";     // Propietario de esa puerta en blanco.
        }
    };
    modificarNumero(numero) {
        this.numero = numero;
    };
    modificarCalle(calle) {
        this.calle = calle;
    };
    modificarCodigoPostal(codigo) {
        this.codigoPostal = codigo;
    };
    imprimeCalle() {
        return this.calle;
    };
    imprimeNumero() {
        return this.numero;
    };
    imprimeCodigoPostal() {
        return this.codigoPostal;
    };
    agregarPropietario(nombre, planta, puerta, show) {
        this.plantas[planta - 1][puerta - 1] = nombre;
        show.innerHTML = ("<br/>- " + nombre + " es ahora el propietario de la puerta " + puerta + " de la planta " + planta);
    };
    imprimePlantas(show) {
        // Imprimirá las plantas y nombres de propietarios de cada puerta de un edificio.
        document.write("<h2>Listado de propietarios del edificio calle " + this.calle + " número " + this.numero + "</h2>");
        for (let i = 0; i < this.plantas.length; i++)
            for (let j = 0; j < this.plantas[i].length; j++)
                show.innerHTML = ("Propietario del piso " + (j + 1) + " de la planta " + (i + 1) + ": " + this.plantas[i][j] + "<br/>");
    };
}

function addEdificio() {
    var calle = document.getElementById("calle").value;
    var num = document.getElementById("num").value;
    var cp = document.getElementById("cp").value;

    return new Edificio(calle, num, cp)
}

function asignarPlantas(edificio) {

    var puertas = document.getElementById("adPuertas").value;
    var plantas = document.getElementById("adPlantas").value;

    edificio.agregarPlantasYPuertas(plantas, puertas);

    return edificio;

}

function cambioSelectEdificio(arEdificios, select) {
    var option = document.createElement("option");
    option.value = arEdificios.length - 1;
    option.text = arEdificios[arEdificios.length - 1].calle + ", " + arEdificios[arEdificios.length - 1].numero;
    select.appendChild(option);
}

function establecerDatos(edificio) {
    document.getElementById("modcalle").value = edificio.calle;
    document.getElementById("modnum").value = edificio.numero;
    document.getElementById("modcp").value = edificio.codigoPostal;
    document.getElementById("modadPuertas").value = edificio.plantas.length;
    document.getElementById("modadPlantas").value = edificio.plantas[edificio.plantas.length - 1].length;
}

function main() {
    var output = document.getElementById("output");
    var arEdificios = [];
    var select = document.getElementById("edificio");
    output.innerHTML = "<h1>TRABAJANDO CON OBJETOS EN JAVASCRIPT</h1>";
    output.innerHTML = ("Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:");

    document.getElementById("add").addEventListener("click", evt => {
        arEdificios.push(addEdificio());
        arEdificios[arEdificios.length - 1] = asignarPlantas(arEdificios[arEdificios.length - 1]);
        cambioSelectEdificio(arEdificios, select);
    })

    select.addEventListener("change", evt => {
        console.log(select.value);
        establecerDatos(arEdificios[select.value]);
    })

    document.getElementById('mod').addEventListener("click", evt => {
        console.log(select.value)
    })



}

main()

/*
var edificioA = new Edificio("Garcia Prieto", "58", 15706);
var edificioB = new Edificio("Camino Caneiro", "29", 32004);
var edificioC = new Edificio("San Clemente", "s/n", 15705);

output.innerHTML = ("<br/><br/>El código postal del edificio A es: " + edificioA.imprimeCodigoPostal());
output.innerHTML = ("<br/>La calle del edificio C es: " + edificioC.imprimeCalle());
output.innerHTML = ("<br/>El edificio B está situado en la calle " + edificioB.imprimeCalle() + " número " + edificioB.imprimeNumero());
output.innerHTML = ("<br/><br/>Agregamos 2 plantas y 3 puertas por planta al edificio A...");

edificioA.agregarPlantasYPuertas(2, 3);
output.innerHTML = ("<br/>Agregamos 4 propietarios al edificio A...");
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1, output);
edificioA.agregarPropietario("Luisa Martinez", 1, 2, output);
edificioA.agregarPropietario("Marta Castellón", 1, 3, output);
edificioA.agregarPropietario("Antonio Pereira", 2, 2, output);
edificioA.imprimePlantas(output);
output.innerHTML = ("<br/><br/>Agregamos 1 planta más al edificio A...");
edificioA.agregarPlantasYPuertas(1, 2);
output.innerHTML = ("<br/>Agregamos 1 propietario más al edificio A planta 3, puerta 2...");
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
edificioA.imprimePlantas(output);*/