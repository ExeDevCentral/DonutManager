function crearTiendas(contenedorID, min, cantidadTiendas) {
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++) {

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafotienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafotienda(textoLabel, valorMin) {
    //crear las etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {
    let ventas = [];
    // Extrae los valores de cada tienda generada dinámicamente
    for (let i = 1; i <= 8; i++) {
        ventas.push(extraerNumeroDesdeElemento(`Tienda ${i}`));
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.innerHTML = `
        <p><b>Total Ventas:</b> <b>${totalVentas}</b></p>
        <p><strong>Venta Mayor:</strong> <strong style="font-size:1.1em;">${ventaMayor}</strong></p>
        <p><b>Venta Menor:</b> <b>${ventaMenor}</b></p>
    `;
}

function sumarTotal(array) {
    let total = 0;

    for(let venta of array) {
        total = total + venta;
    }

    return total;
}

function calcularMayor(array) {
    let maximo = array[0];

    for(let venta of array) {
        if (venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array) {
    let minimo = array[0];

    for(let venta of array) {
        if (venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}