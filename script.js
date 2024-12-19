function calcularCorriente(){
    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }

    voltajeT = parseFloat(voltajeT);  //Sobrescribo los valores que tomo del html y los cambio de fomato (convierte el texto a números con parseFloat)
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Mostrar el resultado
    document.getElementById("corriente").innerText = corriente.toFixed(2);
}

function calcularVoltaje1(){
    //Obtener valores de los inputs
    var masa = document.getElementById("masa").value;
    var k = document.getElementById("k").value;
    var b = document.getElementById("b").value;

    //Verificar que los valores sean válidos
    if(masa === "" || k === "" || b === ""){
        alert("Por favor ingresa la masa, la constante de rigidez y la constante de amortiguamiento.");
        return;
    }

    masa = parseFloat(masa);  //Sobrescribo los valores que tomo del html y los cambio de fomato (convierte el texto a números con parseFloat)
    k = parseFloat(k);
    b = parseFloat(b);

    //Calcular la frecuencia angular amortiguada (w = sqrt((k/m)-(b/2m)^2)
    var factorRig = k/masa;
    var factorAmort = Math.pow(b/(2*masa),2);
    var frecuenciaAngAm = Math.sqrt(factorRig-factorAmort);

    
    //Mostrar el resultado
    document.getElementById("frecuenciaAngAm").innerText = frecuenciaAngAm.toFixed(2);
}

function tipoAmort(){
    //Obtener valores de los inputs
    var masa = document.getElementById("masa").value;
    var k = document.getElementById("k").value;
    var b = document.getElementById("b").value;

    //Verificar que los valores sean válidos
    if(masa === "" || k === "" || b === ""){
        alert("Por favor ingresa la masa, la constante de rigidez y la constante de amortiguamiento.");
        return;
    }

    masa = parseFloat(masa);  //Sobrescribo los valores que tomo del html y los cambio de fomato (convierte el texto a números con parseFloat)
    k = parseFloat(k);
    b = parseFloat(b);

    //Calcular factores de rigidez y amortiguamiento
    var factorRig = k/masa;
    var factorAmort = Math.pow(b/(2*masa),2);
    
    //Indicar tipo de amortiguamiento del sistema
    var tipoAmort = "";
    if (factorRig < factorAmort) {
        tipoAmort = "El sistema es sobreamortiguado.";
    } else if (factorRig > factorAmort) {
        tipoAmort = "El sistema es subamortiguado.";
    } else {
        tipoAmort = "El sistema tiene amortiguamiento crítico.";
    }

    // Mostrar el tipo de amortiguamiento
    document.getElementById("tipoAmort").innerText = tipoAmort;
}