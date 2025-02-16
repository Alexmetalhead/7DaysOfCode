const area = prompt("¿Quieres seguir en el área de 'front-end' o 'back-end'? Escribe el nombre del área:");
console.log(area);
let tipolenguaje = "";
if (area === "front-end") {
    tipolenguaje = prompt("¿Quieres aprender react o vue?");
} else if (area === "back-end") {
    tipolenguaje = prompt("¿Quieres aprender C o java?");
} else {
    alert("¡No ingresaste un área válida!");
}
const fullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (fullstack == 1) {
    alert(`¡Sigue especializándote en ${tipolenguaje} para dominar el área de ${area}!`);
} else if (fullstack == 2) {
    alert(`¡Es hora de comenzar a aprender otros lenguajes además de ${tipolenguaje} si quieres convertirte en Fullstack!`);
} else {
    alert("¡No ingresaste un valor válido!");
}
let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo, de lo contrario Pulsa enter para salir");
while (mensaje === "ok") {
    let tecnologia = prompt("¿Cuál?:");
    alert(`¡${tecnologia} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo, de lo contrario Pulsa enter para salir");
}
alert("Finalizaste El Test")