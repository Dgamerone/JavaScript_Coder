// Simunaldor Informativo referente a una casa de cambio Básica

// Variables Díarias
let tasaBolivares = 0.027;
let tasaCompra_dolar = 285;
let tasaVenta_dolar = 295;

// Menú
let opcion = parseInt(prompt(
    "Selecciones una opción: \n 1 - Tasa de Cambio Bolivares\n 2 - Precio de Compra Dolar\n 3 - Precio de Venta Dolar\n 4 - Calculadora de Pesos AR a Bolivares VEN\n 5 - Salir"));
while (opcion != 5){
    switch (opcion){
        case 1:
            alert("La tasa del día es: " + tasaBolivares + " Bolivares por cada peso Argentino.");
        break;
        case 2:
            alert("Compramos sus dolares en: " + tasaCompra_dolar + " pesos Argentinos por dolar.");
        break;
        case 3:
            alert("Vendemos dolares en: " + tasaVenta_dolar + " pesos por cada dolar.");
        break;
        case 4:
            let calculadorTasa_bolivares = parseInt(prompt(" Ingrese la cantidad de pesos a cambiar."));
            if (calculadorTasa_bolivares >0){
                alert("El monto ingresado equivale a: " + tasaBolivares * calculadorTasa_bolivares + " Bolivares.");
            }   
            else {
                alert("Ingrese un número valido");
            }
        case 5:
            alert("Muchas Gracias por su Visita")
        break;         
    }
    opcion = parseInt(prompt(
        "Selecciones una opción: \n 1 - Tasa de Cambio\n 2 - Precio de Compra Dolar\n 3 - Precio de Venta Dolar\n 4 - Calculadora de Pesos AR a Bolivares VEN\n 5 - Salir"));

}

