// Calcular propina
function calcularPropina(montoCuenta, porcentajeDePropina){
    const propina = montoCuenta * (porcentajeDePropina/100);
    return propina;
}

// Leer datos ingresados por el usuario
const montoCuentaInput= prompt("Ingresa el monto de la cuenta");
const porcentajedePropinaInput= prompt("Ingresa el porcentaje de la propina");

// Convertir entradas a números
const montoCuenta = parseFloat(montoCuentaInput);
const porcentajedePropina = parseFloat(porcentajedePropinaInput);

// Calcular propina
const montoPropina = calcularPropina(montoCuenta, porcentajedePropina);

// Mostrar resultado
const totalAPagar = montoCuenta + montoPropina;

// Elementos del DOM
const montoCuentaElement = document.getElementById('monto-cuenta');
const montoPropinaElement = document.getElementById('monto-propina');
const totalAPagarElement = document.getElementById('total-a-pagar');

// insertar resultados en el HTML
montoCuentaElement.innerHTML = `El monto de la cuenta es: $${montoCuenta}`;
montoPropinaElement.innerHTML = `El monto de la propina es: $${montoPropina}`;
totalAPagarElement.innerHTML = `El total a pagar es: $${totalAPagar}`;

// Mostrar en consola en el formato solicitado
console.log("--- Resumen de la Cuenta ---");
console.log(`Monto de la cuenta: $${montoCuenta}`);
console.log(`Propina (%${porcentajedePropina}): $${montoPropina}`);
console.log(`Total a pagar: $${totalAPagar}`);