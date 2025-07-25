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
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for (let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        // Tailwind classes for neutral, mayor, menor
        item.children[1].className = "bg-white border border-gray-300 rounded px-2 py-1";

        if(valorVenta === ventaMayor) {
            item.children[1].className = "bg-green-200 border border-green-400 rounded px-2 py-1";
        }

        if(valorVenta === ventaMenor) {
            item.children[1].className = "bg-orange-200 border border-orange-400 rounded px-2 py-1";
        }
    }

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