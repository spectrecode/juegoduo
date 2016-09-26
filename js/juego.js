function empezar(e){
	e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("Data", e.target.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 0, 0);
    return true;                
}
function enter(e){
    return true;
}
function over(e){
	var esarrastrable = e.dataTransfer.getData("Data");
	var id = e.target.getAttribute('id');
	if (id == 'destino1') 
        return false;
	if ((id == 'destino2') && esarrastrable == 'arrastrable3') 
        return false;
	else 
        if (id == 'destino3' && (esarrastrable == 'arrastrable1' || esarrastrable =='arrastrable2')) 
            return false;
		else 
            return false;			
}
function drop(e){
    var esarrastrable = e.dataTransfer.getData("Data");
	e.target.appendChild(document.getElementById(esarrastrable));
	e.stopPropagation();
        return false;
}
function end(e){
    e.dataTransfer.clearData("Data");
    return true;
}			
//cronometro
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
    control = setInterval(cronometro,10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
}
function parar () {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}
function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}
function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML = horas;
    }
}
