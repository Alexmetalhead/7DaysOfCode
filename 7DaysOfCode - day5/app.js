let verduras = [];
let frutas = [];
let carnes = [];
let lacteos = [];
let otros =[];
let categoria ="";
let alimento ="";

let agregarProducto = "si";
while (agregarProducto != "no") {
  agregarProducto = prompt("Deseas agregar un alimento a tu lista de compras, ¿Si o no?");

  while (agregarProducto != "si" && agregarProducto != "no") {
    alert("Debes poder responder con sí o no");
    agregarProducto = prompt("Deseas agregar un alimento a tu lista de comprar, ¿Si o no?");
    }
  
    if (agregarProducto ==="no"){
    break;
    }

    alimento = prompt("Ingresa el alimento que deseas agregar a tu lista de compras");
    console.log(alimento);
    categoria = prompt("Ingresa la categoria a la que perternece el alimento:\n verduras\n frutas\n carnes\n lacteos\n Otros");
    console.log(categoria);
    if(categoria === "verduras"){
        verduras.push(alimento);
    }else if (categoria === "frutas"){
        frutas.push(alimento);
    }else if (categoria === "carnes"){
        carnes.push(alimento);
    }else if (categoria === "lacteos"){
        lacteos.push(alimento)
    }else if (categoria === "otros"){
        otros.push(alimento)}
}
alert (`Tu lista de Compras es la siguiente: \n Verduras: ${verduras}\n Frutas: ${frutas}\n Carnes: ${carnes}\n Lacteos: ${lacteos}\n Otros: ${otros}`);