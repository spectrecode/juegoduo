window.addEventListener("load", function() {
	var gato = document.getElementById("gato");
	var boton = document.getElementById("boton");
	var cucho = gato.classList.add("cucho");
	var principal = document.getElementById("principal");

		boton.addEventListener("click", function() {
			mueveteGato();
			principal.style.display="none";
	});
	function mueveteGato() {
	gato.style.animationIterationCount = "1";
	};


});