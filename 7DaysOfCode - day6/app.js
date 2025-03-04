window.addEventListener("DOMContentLoaded", (event) => { 

let verduras = [];
let frutas = [];
let carnes = [];
let lacteos = [];
let otros = [];
let categoria = "";
let alimento = "";

let agregarProducto = "si";
while (agregarProducto != "no") {
  
    if (verduras.length === 0 && frutas.length === 0 && carnes.length === 0 && lacteos.length === 0 && otros.length === 0) {
        agregarProducto = prompt("¿Deseas agregar un alimento a tu lista de compras? (Sí o No)");
    } else {
        agregarProducto = prompt("¿Deseas agregar un alimento a tu lista de compras? (Sí o No) o ¿Eliminar?");
    }
    
    while (agregarProducto != "si" && agregarProducto != "no" && agregarProducto != "eliminar") {
        alert("Debes responder con 'si' o 'no'");
        agregarProducto = prompt("¿Deseas agregar un alimento a tu lista de compras? (Sí o No)");
    }
  
    if (agregarProducto === "no") {
        break;
    }

    if (agregarProducto === "si") {
        alimento = prompt("Ingresa el alimento que deseas agregar a tu lista de compras");
        console.log(alimento);
        categoria = prompt("Ingresa la categoría a la que pertenece el alimento:\n Verduras\n Frutas\n Carnes\n Lácteos\n Otros").toLowerCase();
        console.log(categoria);
    
        if (categoria === "verduras") {
            verduras.push(alimento);
        } else if (categoria === "frutas") {
            frutas.push(alimento);
        } else if (categoria === "carnes") {
            carnes.push(alimento);
        } else if (categoria === "lacteos") {
            lacteos.push(alimento);
        } else if (categoria === "otros") {
            otros.push(alimento);
        }
    
    } else if (agregarProducto === "eliminar") {
        if (verduras.length === 0 && frutas.length === 0 && carnes.length === 0 && lacteos.length === 0 && otros.length === 0) {
            alert("No hay alimentos para eliminar");   
        } else {  
            let eliminar = prompt(`¿Qué alimento deseas eliminar de tu lista de compras? \n Verduras: ${verduras}\n Frutas: ${frutas}\n Carnes: ${carnes}\n Lácteos: ${lacteos}\n Otros: ${otros}`);
            
            if (verduras.includes(eliminar)) {
                verduras.splice(verduras.indexOf(eliminar), 1);
                alert(`Se ha eliminado ${eliminar} de tu lista de compras`);
            } else if (frutas.includes(eliminar)) {
                frutas.splice(frutas.indexOf(eliminar), 1);
                alert(`Se ha eliminado ${eliminar} de tu lista de compras`);
            } else if (carnes.includes(eliminar)) {
                carnes.splice(carnes.indexOf(eliminar), 1);
                alert(`Se ha eliminado ${eliminar} de tu lista de compras`);
            } else if (lacteos.includes(eliminar)) {
                lacteos.splice(lacteos.indexOf(eliminar), 1);
                alert(`Se ha eliminado ${eliminar} de tu lista de compras`);     
            } else if (otros.includes(eliminar)) {
                otros.splice(otros.indexOf(eliminar), 1);
                alert(`Se ha eliminado ${eliminar} de tu lista de compras`);                           
            } else {
                alert("El alimento no está en la lista.");
            }
        }
    }
}

alert(`Tu lista de compras es la siguiente: \n Verduras: ${verduras}\n Frutas: ${frutas}\n Carnes: ${carnes}\n Lácteos: ${lacteos}\n Otros: ${otros}`);

});
