let acumuladorCliques = 0;

const botatoDireita = document.getElementById('direita');
const botatoEsquerda = document.getElementById('esquerda');
const carrossel = document.getElementsByClassName('imagens')[0];

if(window.screen <= 1024){

	botatoDireita.onclick = function(){

		acumuladorCliques += 100;

		if(acumuladorCliques == 400){ acumuladorCliques = 0;}

		carrossel.style.transform = `translateX(-${acumuladorCliques}vw)`;
	}

	botatoEsquerda.onclick = function(){

		if(acumuladorCliques != 0){

			acumuladorCliques -= 100;
			carrossel.style.transform = `translateX(-${acumuladorCliques}vw)`;
		}
	}
}

botatoDireita.onclick = function(){

	if(acumuladorCliques == 0){

		acumuladorCliques += 55;
		carrossel.style.transform = `translateX(-${acumuladorCliques}vw)`;

	}else{
		acumuladorCliques = 0;
		carrossel.style.transform = `translateX(${acumuladorCliques}vw)`;
	}
	
}

botatoEsquerda.onclick = function(){
	acumuladorCliques = 0;
	carrossel.style.transform = `translateX(${acumuladorCliques}vw)`;
}