// visualizador (lightbox) de imagenes con jquery
$(document).ready(function(){

	let indiceActual = 0;
	let imagenes = [];

	window.addEventListener("message", (event) => {
		if (event.data.altura) {
			$("#iframe-galeria").css("height", event.data.altura + "px");
		}
		else if (event.data.rutasdeimagenes) {
		 	imagenes = event.data.rutasdeimagenes;
		}
		else if (event.data.posiciondeimagen) {
			mostrarLightbox(event.data.posiciondeimagen);
		}
	});

	// muestra el lightbox con la imagen correspondiente
	function mostrarLightbox(indice){
		indiceActual = indice;
		$('#lightbox-img').attr('src', imagenes[indiceActual]);
		$('#lightbox').fadeIn();
	}

	// cierra el lightbox al hacer click en la x
	$('#close').on('click', function(){
		$('#lightbox').fadeOut();
	});

	// cambiar a la imagen anterior
	$('#prev').on('click', function(){
		// ajusta del índice (circular)
		indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
		$('#lightbox-img').fadeOut(function(){
			$(this).attr('src', imagenes[indiceActual]).fadeIn();
		});
	});

	// cambiar a la imagen siguiente
	$('#next').on('click', function(){
		// ajusta del índice (circular)
		indiceActual = (indiceActual + 1) % imagenes.length;
		$('#lightbox-img').fadeOut(function(){
			$(this).attr('src', imagenes[indiceActual]).fadeIn();
		});
	});
});

