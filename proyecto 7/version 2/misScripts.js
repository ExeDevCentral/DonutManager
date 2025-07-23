function extraerNumeroDesdeElemento(elemento) {
    const miElemento = document.getElementById(elemento);
    const miTexto = miElemento.value;
    const miNumero = Number(miTexto);
    return isNaN(miNumero) ? 0 : miNumero;
}

function calcular() {
    const ventas = [
        extraerNumeroDesdeElemento("ventasTienda1"),
        extraerNumeroDesdeElemento("ventasTienda2"),
        extraerNumeroDesdeElemento("ventasTienda3"),
        extraerNumeroDesdeElemento("ventasTienda4"),
        extraerNumeroDesdeElemento("ventasTienda5"),
        extraerNumeroDesdeElemento("ventasTienda6")
    ];

    const elementoSalida = document.getElementById("parrafoSalida");

    if (ventas.some(v => v === 0)) {
        elementoSalida.textContent = "⚠️ Por favor ingresa todas las ventas (usa 0 si no hubo ventas).";
        elementoSalida.style.color = "#d9534f";
        return;
    }

    const totalVentas = sumarTotal(ventas);
    const ventaMayor = calcularMayor(ventas);
    const ventaMenor = calcularMenor(ventas);

    elementoSalida.innerHTML = `
        <p>🛒 <b>Total Ventas:</b> ${totalVentas}</p>
        <p>🔝 <strong style="font-size:1.2em;">Mayor:</strong> <strong style="font-size:1.2em;">${ventaMayor}</strong></p>
        <p>🔻 <b>Menor:</b> <b>${ventaMenor}</b></p>
    `;
    elementoSalida.style.color = "#2d7a2d";
}

function sumarTotal(array) {
    return array.reduce((total, venta) => total + venta, 0);
}

function calcularMayor(array) {
    return Math.max(...array);
}

function calcularMenor(array) {
    return Math.min(...array);
}