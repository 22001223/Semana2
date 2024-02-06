// EJERCICIO 1
function calcularExponente() {
    let base      = parseInt(document.getElementById('base').value);
    let exponente = parseInt(document.getElementById('exponente').value);
    let resultado = document.getElementById('resultado-1');
    
    if(isNaN(base) || isNaN(exponente)) {
        alert('Debes ingresar base y exponente en el ejercicio 1.');
    } else {
        let resultadoOperacion = Math.pow(base, exponente);
        resultado.innerHTML = `El resultado es: ${resultadoOperacion}`;
    }

}

// EJERCICIO 2
function calcularGrados() {
    let centigrados = parseInt(document.getElementById('centigrados').value);
    let resultado = document.getElementById('resultado-2');

    if(isNaN(centigrados)) {
        alert('Debes ingresar los grados centigrados en el ejercicio 2.');
    } else {
        let resultadoOperacion = (centigrados * 1.8) + 32;
        resultado.innerHTML = `El resultado es: ${resultadoOperacion}`;
    }
}

// EJERCICIO 3
let nombres = [];
function agregarNombre() {
    let nombre  = document.getElementById('nombre').value;
    let listado = document.getElementById('nombres');
    let htmlData = '';

    if(nombre !== '') nombres = [...nombres, nombre];
    nombres.forEach(n => htmlData += `<li>${n}</li>`);
    listado.innerHTML = htmlData;
    document.getElementById('nombre').value = '';
}

function filtrarNombres() {
    let numero  = parseInt(document.getElementById('numero-letras').value);
    let filtrados = document.getElementById('nombres-filtrados');
    let htmlData = '';

    if(isNaN(numero)) {
        alert('Debes ingresar el numero de letras en el ejercicio 3.');
    } else {
        nombres.forEach(n => {
            if(n.length >= numero) htmlData += `<li>${n}</li>`;
        });
        filtrados.innerHTML = htmlData;
    }
}

// EJERCICIO 4
let personas = [
    {nombre: 'Juan',  fecha: new Date('09/08/1999').toLocaleDateString('es-GT'), edad: 24},
    {nombre: 'Ana',   fecha: new Date('07/04/2005').toLocaleDateString('es-GT'), edad: 18},
    {nombre: 'Marta', fecha: new Date('07/04/2005').toLocaleDateString('es-GT'), edad: 18},
    {nombre: 'Maria', fecha: new Date('11/19/1994').toLocaleDateString('es-GT'), edad: 29},
    {nombre: 'Gorge', fecha: new Date('03/13/2007').toLocaleDateString('es-GT'), edad: 16},
    {nombre: 'Josue', fecha: new Date('03/13/2007').toLocaleDateString('es-GT'), edad: 16},
    {nombre: 'Luis',  fecha: new Date('06/26/2001').toLocaleDateString('es-GT'), edad: 22},
]

function mostrarEdades() {
    let input = document.getElementById('fecha').value;
    let listado = document.getElementById('personas');
    if(input === '') {
        alert('Debes ingresar la fecha en el ejercicio 4.');
    } else {
        let dateData = input.split('-'); 
        let a = parseInt(dateData[0]);
        let m = parseInt(dateData[1] -1);
        let d = parseInt(dateData[2]);
        let fecha = new Date(a, m, d).toLocaleDateString('es-GT');
        let htmlData = '';
        
        personas.forEach(persona => {
            if(persona.fecha === fecha) {
                htmlData += `<li>${persona.nombre} nacio el ${persona.fecha}</li>`
            }
        });
        listado.innerHTML = htmlData;
    }
}

// EJERCICIO 5
function calcularPalabras() {
    let hilera = document.getElementById('hilera').value.trim();
    let resultado = document.getElementById('resultado-5');
    
    if(hilera === '') {
        alert('Debes ingresar una hilera en el ejercicio 5.');
    } else {
        let result = hilera.split(' ').length;
        resultado.innerHTML = `El total de palabras es: ${result}`;
    }
}

// EJERCICIO 6
let numeros = [];
function agregarNumero() {
    let numero  = parseInt(document.getElementById('numero').value);
    let listado = document.getElementById('numeros');
    let htmlData = '';

    if(isNaN(numero)) {
        alert('Debes ingresar un numero en el ejercicio 6.');
    } else {
        numeros = [...numeros, numero];
        numeros.forEach(n => htmlData += `<li>${n}</li>`);
    }
    listado.innerHTML = htmlData;
}

function calcularPromedio() {
    let resultado = document.getElementById('resultado-6');
    if(numeros.length === 0) {
        alert('Debes ingresar al menos un numero en el ejercicio 6.');
    } else {
        let suma = numeros.reduce( (sum, num) => sum += num);
        let nums = numeros.length;
        let result = suma / nums;
        resultado.innerHTML = `El promedio de los numeros ingresados es: ${result}`;
    }
}

// EJERCICIO 7
function cambiarColor() {
    let cuadro = document.getElementById("cuadro-color");
    let color  = document.getElementById('color').value;
    cuadro.style.backgroundColor = color;
}
