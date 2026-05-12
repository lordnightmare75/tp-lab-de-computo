function enviarEncuesta(){

    var nombre = document.getElementById("nombre").value;

    if(nombre == ""){
        alert("Por favor ingresa tu nombre.");
        return;
    }

    var conociste = document.getElementById("conociste").value;
    var pasta = document.getElementById("pasta").value;
    var calificacion = document.getElementById("calificacion").value;

    var volveriaSeleccionado = document.querySelector('input[name="volveria"]:checked');

    if(volveriaSeleccionado == null){
        alert("Por favor indica si volverias a pedir.");
        return;
    }

    var volveria = volveriaSeleccionado.value;

    var textoConociste = "";
    if(conociste == "amigo"){    textoConociste = "Por un amigo o familiar"; }
    if(conociste == "redes"){    textoConociste = "Por redes sociales"; }
    if(conociste == "calle"){    textoConociste = "Pasando por el local"; }
    if(conociste == "internet"){ textoConociste = "Buscando en internet"; }

    var textoPasta = "";
    if(pasta == "tallarines"){ textoPasta = "Tallarines"; }
    if(pasta == "fettuccine"){ textoPasta = "Fettuccine"; }
    if(pasta == "ravioles"){   textoPasta = "Ravioles"; }
    if(pasta == "noquis"){     textoPasta = "Noquis"; }
    if(pasta == "lasana"){     textoPasta = "Lasana"; }

    var textoCalificacion = "";
    if(calificacion == "excelente"){ textoCalificacion = "Excelente"; }
    if(calificacion == "bueno"){     textoCalificacion = "Bueno"; }
    if(calificacion == "regular"){   textoCalificacion = "Regular"; }
    if(calificacion == "malo"){      textoCalificacion = "Malo"; }

    var textoVolveria = "";
    if(volveria == "si"){ textoVolveria = "Si"; }
    if(volveria == "no"){ textoVolveria = "No"; }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("res-nombre").textContent = nombre;
    document.getElementById("res-conociste").textContent = textoConociste;
    document.getElementById("res-pasta").textContent = textoPasta;
    document.getElementById("res-calificacion").textContent = textoCalificacion;
    document.getElementById("res-volveria").textContent = textoVolveria;
}

function limpiarEncuesta(){
    document.getElementById("nombre").value = "";
    document.getElementById("conociste").value = "amigo";
    document.getElementById("pasta").value = "tallarines";
    document.getElementById("calificacion").value = "excelente";

    var radios = document.querySelectorAll('input[name="volveria"]');
    radios[0].checked = false;
    radios[1].checked = false;

    document.getElementById("resultado").style.display = "none";
    alert("Formulario limpiado.");
}
