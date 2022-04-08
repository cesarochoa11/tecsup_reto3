
// Algoritmo de RETO 3
    //Valores Globales
    var cantToner=0;
    var cantCabezal=0;
    var cantTinta=0;

function operacion3(){
    var N=+document.getElementById("N.").value;
    var seleccion=+document.getElementById("select1").value;
    switch(seleccion){
        case 1:
            cantToner+=N;
            break;
        case 2:
            cantCabezal+=N;
            break;
        case 3:
            cantTinta+=N;
            break;
        default:
    }
    document.getElementById("cantToner").innerHTML=cantToner;
    document.getElementById("cantCabezal").innerHTML=cantCabezal;
    document.getElementById("cantTinta").innerHTML=cantTinta;