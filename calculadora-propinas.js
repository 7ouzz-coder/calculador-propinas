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
console.log(`Monto de la cuenta: $${montoCuenta.toFixed(2)}`);
console.log(`El monto de la propina es: $${montoPropina.toFixed(2)}`);
console.log(`El total a pagar es: $${totalAPagar.toFixed(2)}`);