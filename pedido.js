var precioTallarines = 2500;
var precioFettuccine = 2800;
var precioRavioles = 3500;
var precioNoquis = 2200;
var precioLasagna = 3800;

function calcularPedido(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;

    if(nombre == "" || apellido == "" || telefono == "" || direccion == "" || ciudad == ""){
        alert("Por favor completa todos tus datos personales.");
        return;
    }

    var pasta1 = document.getElementById("pasta1").value;
    var cantidad1 = parseFloat(document.getElementById("cantidad1").value);

    var pasta2 = document.getElementById("pasta2").value;
    var cantidad2 = parseFloat(document.getElementById("cantidad2").value);

    var pasta3 = document.getElementById("pasta3").value;
    var cantidad3 = parseFloat(document.getElementById("cantidad3").value);

    var envio = document.getElementById("envio").value;

    if(cantidad1 == 0 && cantidad2 == 0 && cantidad3 == 0){
        alert("Tenes que pedir al menos 1 kg de alguna pasta.");
        return;
    }

    var subtotal1 = 0;
    if(pasta1 == "tallarines"){subtotal1 = precioTallarines * cantidad1; }
    if(pasta1 == "fettuccine"){subtotal1 = precioFettuccine * cantidad1; }
    if(pasta1 == "ravioles"){subtotal1 = precioRavioles * cantidad1; }
    if(pasta1 == "noquis"){subtotal1 = precioNoquis * cantidad1; }
    if(pasta1 == "lasagna"){subtotal1 = precioLasagna * cantidad1; }

    var subtotal2 = 0;
    if(pasta2 == "tallarines"){subtotal2 = precioTallarines * cantidad2; }
    if(pasta2 == "fettuccine"){subtotal2 = precioFettuccine * cantidad2; }
    if(pasta2 == "ravioles"){subtotal2 = precioRavioles * cantidad2; }
    if(pasta2 == "noquis"){subtotal2 = precioNoquis * cantidad2; }
    if(pasta2 == "lasagna"){subtotal2 = precioLasagna * cantidad2; }

    var subtotal3 = 0;
    if(pasta3 == "tallarines"){subtotal3 = precioTallarines * cantidad3; }
    if(pasta3 == "fettuccine"){subtotal3 = precioFettuccine * cantidad3; }
    if(pasta3 == "ravioles"){subtotal3 = precioRavioles * cantidad3; }
    if(pasta3 == "noquis"){subtotal3 = precioNoquis * cantidad3; }
    if(pasta3 == "lasagna"){subtotal3 = precioLasagna * cantidad3; }

    var costoEnvio = 0;
    var textoEnvio = "";
    if(envio == "domicilio"){
        costoEnvio = 1500;
        textoEnvio = "Envio a domicilio: $1500";
    }
    if(envio == "local"){
        textoEnvio = "Retiro en el local: Sin costo";
    }

    var total = subtotal1 + subtotal2 + subtotal3 + costoEnvio;

    var detalle = "";
    if(cantidad1 > 0){ detalle = detalle + pasta1 + " x " + cantidad1 + " kg = $" + subtotal1 + "<br>"; }
    if(cantidad2 > 0){ detalle = detalle + pasta2 + " x " + cantidad2 + " kg = $" + subtotal2 + "<br>"; }
    if(cantidad3 > 0){ detalle = detalle + pasta3 + " x " + cantidad3 + " kg = $" + subtotal3; }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("res-nombre").textContent = nombre + " " + apellido;
    document.getElementById("res-direccion").textContent = direccion + ", " + ciudad;
    document.getElementById("res-telefono").textContent = telefono;
    document.getElementById("res-detalle").innerHTML = detalle;
    document.getElementById("res-envio").textContent = textoEnvio;
    document.getElementById("res-total").textContent = "TOTAL A PAGAR: $" + total;
}

function limpiarFormulario(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("cantidad1").value = "0";
    document.getElementById("cantidad2").value = "0";
    document.getElementById("cantidad3").value = "0";
    document.getElementById("resultado").style.display = "none";
    alert("Formulario limpiado.");
}
