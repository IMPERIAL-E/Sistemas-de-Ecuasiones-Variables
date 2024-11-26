function resolverCuadratica() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminante = b ** 2 - 4 * a * c;
    let resultado;

    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado = `Las soluciones son x1 = ${x1.toFixed(2)} y x2 = ${x2.toFixed(2)}`;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        resultado = `La solución es x = ${x.toFixed(2)}`;
    } else {
        resultado = "No tiene soluciones reales";
    }

    document.getElementById("resultadoCuadratica").innerText = resultado;
}

function resolverSistema2() {
    const a1 = parseFloat(document.getElementById("a1").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const c1 = parseFloat(document.getElementById("c1").value);
    const a2 = parseFloat(document.getElementById("a2").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const c2 = parseFloat(document.getElementById("c2").value);

    const determinante = a1 * b2 - b1 * a2;
    let resultado;

    if (determinante !== 0) {
        const x = (c1 * b2 - b1 * c2) / determinante;
        const y = (a1 * c2 - c1 * a2) / determinante;
        resultado = `Las soluciones son x = ${x.toFixed(2)} y = ${y.toFixed(2)}`;
    } else {
        resultado = "El sistema no tiene solución única";
    }

    document.getElementById("resultadoSistema2").innerText = resultado;
}

function resolverSistema3() {
    // Obtener los valores de entrada
    const a3 = parseFloat(document.getElementById("a3").value);
    const b3 = parseFloat(document.getElementById("b3").value);
    const c3 = parseFloat(document.getElementById("c3").value);
    const d3 = parseFloat(document.getElementById("d3").value);
    const a4 = parseFloat(document.getElementById("a4").value);
    const b4 = parseFloat(document.getElementById("b4").value);
    const c4 = parseFloat(document.getElementById("c4").value);
    const d4 = parseFloat(document.getElementById("d4").value);
    const a5 = parseFloat(document.getElementById("a5").value);
    const b5 = parseFloat(document.getElementById("b5").value);
    const c5 = parseFloat(document.getElementById("c5").value);
    const d5 = parseFloat(document.getElementById("d5").value);

    // Verificar si algún campo es NaN
    if ([a3, b3, c3, d3, a4, b4, c4, d4, a5, b5, c5, d5].some(isNaN)) {
        document.getElementById("resultadoSistema3").innerText =
            "Por favor, completa todos los campos con números válidos.";
        return;
    }

    // Resolver usando la regla de Cramer
    const determinante = 
        a3 * (b4 * c5 - c4 * b5) - 
        b3 * (a4 * c5 - c4 * a5) + 
        c3 * (a4 * b5 - b4 * a5);

    let resultado;
    if (determinante !== 0) {
        const dx = 
            d3 * (b4 * c5 - c4 * b5) - 
            b3 * (d4 * c5 - c4 * d5) + 
            c3 * (d4 * b5 - b4 * d5);

        const dy = 
            a3 * (d4 * c5 - c4 * d5) - 
            d3 * (a4 * c5 - c4 * a5) + 
            c3 * (a4 * d5 - d4 * a5);

        const dz = 
            a3 * (b4 * d5 - d4 * b5) - 
            b3 * (a4 * d5 - d4 * a5) + 
            d3 * (a4 * b5 - b4 * a5);

        const x = dx / determinante;
        const y = dy / determinante;
        const z = dz / determinante;

        resultado = `Las soluciones son: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
    } else {
        resultado = "El sistema no tiene solución o tiene infinitas soluciones.";
    }

    document.getElementById("resultadoSistema3").innerText = resultado;
}

