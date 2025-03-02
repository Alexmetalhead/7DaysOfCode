window.addEventListener("DOMContentLoaded", (event) => {
const valorEspesifico = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(valorEspesifico);

  let intentos ="";
  let acertado = false; // Variable para verificar si el usuario acertó

  for(let cuenta = 0; cuenta < 3; cuenta++) {
    // Se ejecuta 3 veces, entre los numeros 0 y 10 
    intentos = prompt("adivina el número de 1 al 10 en el que tu amigo o amiga estaba pensando");
    
      
      if (intentos == valorEspesifico){
        alert(`" MUY bien acertaste el Numero, este era: ${valorEspesifico}"`);
        acertado = true; // Marca como acertado
        break;// Termina el juego si acierta
        
        } else {
        alert("¡Incorrecto! Intenta de nuevo."); 
      }
     
  }
  
if (!acertado) {
    alert(`"¡Lo siento! No acertaste. El número correcto era: ${valorEspesifico}"`);
}
}) 
