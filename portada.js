console.log("Hola Daniel");

var numero = 10;//entero
console.log(numero);

var numeroDecimal = 10.50; //decimal
console.log(numeroDecimal);

var cadenaTexto = "Holis mi amigo JavaScript"; //texto
console.log(cadenaTexto);

var booleano = true; //booleano
console.log(booleano);

console.log("Mi nota en la maestría es: " + numero)

var numero = 20
const miConstante = 9

console.log("Mi nueva nota es: " + numero)

var edad = 2;
/* if (edad >= 18){
    console.log("Es mayor de edad.");
}else{
    console.log("Es menor de edad");
}
 */
/* var number = 4;
if(number === 4){ //para comparar 2 o mas elementos
    console.log("SI");
}else{
    console.log("NO");
}
 */
/* var nombre = "Daniel";
var edad = 39 */;
/* 
if(nombre == "Daniel" && edad == 34){
    console.log('Verdadero');
}else{
    console.log('Falso');
} */
/* var contador = -1;
while (contador <= 10){
    console.log(contador + " ");
    contador ++;
} */
/* for(var i = 0; i <= 10; i++){
    console.log(i)
} */
/* for(var i = 10; i >= 0; i--){
    console.log(i)
} */

//Funciones sin parámetros
/* function saludar(){
    console.log("Hola Chicos.")
}

saludar();
 */
//Funciones con parámetros

/* function saludar(nombre, edad){
    console.log("Hola, mi nombre es: " + nombre + ".\n" + "Mi edad es: " + edad + " años.");
}

saludar("Maria Isabel", 34); */

/* function multiplicar(n1, n2){
    var resultado = n1 * n2;
    return resultado;
}

console.log(multiplicar(15, 9));
 */
//Arreglos o Arrays
let miArreglo = [1, 2, 3, 4, 5, 6]
/*console.log(miArreglo);
console.log(miArreglo[2]);
 */
//usando bucles
for (let i = 0; i < 6; i++){
    let mostrar = miArreglo[i];
    console.log(mostrar)
}
//Objetos
let miObjeto = {
    nombre: "Daniel",
    edad: 40,
    masculino: true
}

console.log(miObjeto);

miObjeto.profesion = "Ingeniero Informático"

console.log(miObjeto.edad)

let persona = {
    nombre: "Isabel",
    edad: 34,
    femenino: true
}

console.log(persona);

persona.profesion = "Médico Anestesióloga"

console.log(persona.nombre);

console.log("---------------0---------------")

//Arreglo con objetos
let arregloDeObjetos = [miObjeto, persona] 
console.log(arregloDeObjetos)