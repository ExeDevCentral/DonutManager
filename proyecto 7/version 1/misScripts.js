function extraerNumeroDesdeElemento(elemento) {
    const miElemento = document.getElementById(elemento);
    const miTexto = miElemento.value;
    const miNumero = Number(miTexto);
    return isNaN(miNumero) ? 0 : miNumero;
}

function calcular() {
    const ventas = [];
    for (let i = 1; i <= 6; i++) {
        ventas.push(extraerNumeroDesdeElemento(`ventasTienda${i}`));
    }

    const totalVentas = ventas.reduce((acc, val) => acc + val, 0);

    const elementoSalida = document.getElementById("parrafoSalida");
    if (ventas.some(v => v === 0)) {
        elementoSalida.textContent = "Por favor ingresa todas las ventas (usa 0 si no hubo ventas).";
        elementoSalida.style.color = "#d9534f";
    } else {
        elementoSalida.textContent = `🛒 Total Ventas: ${totalVentas}`;
        elementoSalida.style.color = "#2d7a2d";
    }
}