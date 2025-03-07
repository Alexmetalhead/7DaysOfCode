function calcular(operacion) {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let resultado;

    if (valor1 === "" || valor2 === "") {
        alert("Por favor, ingresa ambos valores.");
        return;
    }

    valor1 = Number(valor1);
    valor2 = Number(valor2);

    switch (operacion) {
        case 'suma':
            resultado = valor1 + valor2;
            break;
        case 'resta':
            resultado = valor1 - valor2;
            break;
        case 'multiplicación':
            resultado = valor1 * valor2;
            break;
        case 'división':
            if (valor2 === 0) {
                resultado = "Error: No se puede dividir por 0";
            } else {
                resultado = valor1 / valor2;
            }
            break;
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}