let posicaoFotosSobreMim = 0;

document.addEventListener('DOMContentLoaded', function(){
	let fotosSobreMim = document.getElementById('fotos-sobre-mim').getBoundingClientRect();
	posicaoFotosSobreMim = fotosSobreMim.top;
});

window.addEventListener('scroll', function(){

	let fotos = document.getElementById('fotos-sobre-mim');
	if(scrollY >= posicaoFotosSobreMim){

		if(fotos.style.opacity == '0'){
			fotos.style.marginLeft = '0';
			fotos.style.opacity = '1';
		}
	}	
})