window.addEventListener("load", function() {
	var gato = document.getElementById("gato");
	var boton = document.getElementById("boton");
	var cucho = gato.classList.add("cucho");
	var principal = document.getElementById("principal");
	var juego = document.getElementById("juego");
	juego.style.visibility ="hidden";

		boton.addEventListener("click", function() {
			mueveteGato();
			apareceJuego();
			principal.style.display = "none";
		});

	function mueveteGato() {
	gato.style.animationIterationCount = "1";
	};
});
