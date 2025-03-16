
// enviar altura del body a pagina contenedora
// evento: se vuelve a enviar cada vez que cambia
$(document).ready(function (){

	// enviar altura (responsive)
	function enviarAltura() {
		const altura = document.body.scrollHeight;
		window.parent.postMessage({ altura }, "*");
	}
	enviarAltura();
	window.addEventListener("resize", enviarAltura);

   // enviar lista de URLs
	const imagenes = [];
	$('.img-fluid').each(function(){
		imagenes.push($(this).attr('src'));
	});
	window.parent.postMessage({rutasdeimagenes: imagenes }, "*");

	// click en cualquier imagen y se muestra el lightbox
	$('.img-fluid').on('click', function(){
		const src = $(this).attr('src');
		// indice (dentro del array) de la imagen clickeada 
		const indice = imagenes.indexOf(src);
		window.parent.postMessage({ posiciondeimagen: indice }, "*");
	});
});



