let pasta = 0;


function carregarFotos(){
	const request = new XMLHttpRequest();

	request.onload = function(){
		
		let fotos = JSON.parse(request.response);
		let section = document.createElement('section');
		let galeria = document.getElementById('galeria');
		let query = new URLSearchParams(window.location.search);

		section.id = 'lista-fotos';
		galeria.appendChild(section);

		document.getElementById('titulo').innerHTML = `Fotos de ${query.get('pasta')}`;
		document.getElementById('tumbs').remove();
		document.getElementsByTagName('p')[0].remove();

		galeria.appendChild(section);

		for(let i=2; i<fotos.length; i++){

			let foto = document.createElement('img');

			foto.className = i - 2;//0, 1, 2;
			foto.src = `${pasta}/${fotos[i]}`;

			foto.onclick = function(){
				if( ! document.getElementById("background"))
					carregarFotoUnica(foto);
			}
	
			foto.style.width = "50vw";

			section.appendChild(foto);

		}
	}

	request.open('GET', `http://localhost/rodrigo_amaral/classes/Galeria.php/?pasta=${pasta}`);
	request.send();
}

function carregarFotoUnica(foto){

	let iconeDeFechar = document.createElement('i');
	let setaDireita = document.createElement('span');
	let setaEsquerda = document.createElement('span');
	let fundo = document.createElement('div');
	let fundoFoto = document.createElement('img');
	let iconeDeBaixar = document.createElement('i');
	const listaFotos = Array.from(document.querySelectorAll('#lista-fotos img'));

	console.log(listaFotos);

	iconeDeFechar.className = "fa-regular fa-circle-xmark";
	iconeDeBaixar.className = "fa-solid fa-download";
	iconeDeFechar.style.color = "white";
	iconeDeFechar.style.fontSize = "1.5em";
	iconeDeFechar.style.alignSelf = "flex-end";
	iconeDeFechar.style.marginRight = "10px";


	document.onkeydown = function(event){
		
		if(event.key == 'ArrowRight'){

			let posicao = parseInt(fundoFoto.className);

			if(posicao < listaFotos.length - 1){

				fundoFoto.src = listaFotos[posicao + 1].src;
				fundoFoto.className = listaFotos[posicao + 1].className;
				console.log(listaFotos);
			}
		}


		if(event.key == 'ArrowLeft'){

			let posicao = parseInt(fundoFoto.className);

			if(posicao > 0){

				fundoFoto.src = listaFotos[posicao - 1].src;
				fundoFoto.className = listaFotos[posicao - 1].className;
			}
		}
	}

	setaDireita.onclick = function(){

		let posicao = parseInt(fundoFoto.className);

		if(posicao < listaFotos.length - 1){

			fundoFoto.src = listaFotos[posicao + 1].src;
			fundoFoto.className = listaFotos[posicao + 1].className;
		}
	}

	setaEsquerda.onclick = function(){

		let posicao = parseInt(fundoFoto.className);

		if(posicao > 0){

			fundoFoto.src = listaFotos[posicao - 1].src;
			fundoFoto.className = listaFotos[posicao - 1].className;
		}
	}


	iconeDeFechar.onclick = function(){
		window.location.href = window.location.href;
	}

	iconeDeBaixar.onclick = function(){
		const foto = document.querySelector('img');
		baixarFoto(foto.src);
	}

	fundo.style.color = "white";
	fundo.id = "background";
	fundo.style.overflow = "hidden";
	fundo.style.backgroundColor = "black";
	fundo.style.height = "100vh";
	fundo.style.width = "100vw";
	fundo.style.display = 'flex';
	fundo.style.flexDirection = "column";
	fundo.style.alignItems = "center";
	// fundo.style.justifyContent = "space-evenly"


	fundoFoto.src = foto.src;
	fundoFoto.className = foto.className;

	fundoFoto.style.width = "32vw";
	// this.style.width = "100vw";
	// this.style.height = "50vh";

	setaDireita.innerHTML = '>';
	setaEsquerda.innerHTML = '<';

	fundo.appendChild(iconeDeFechar);
	fundo.appendChild(iconeDeBaixar);
	fundo.appendChild(setaDireita);
	fundo.appendChild(setaEsquerda);
	fundo.appendChild(fundoFoto);
	
	// console.log()

	document.getElementsByTagName('header')[0].remove();
	document.getElementsByTagName('main')[0].remove();
	document.getElementsByTagName('footer')[0].remove();
	document.getElementsByTagName('body')[0].appendChild(fundo);
}

function baixarFoto(foto){

	const linkFoto = document.createElement('a');
	linkFoto.href = foto; 
	linkFoto.download = foto;

	linkFoto.click();

}
function carregarGalerias(){
	const request = new XMLHttpRequest();

	request.addEventListener('load', function(){

		const galerias = JSON.parse(request.response);
		const galeria = document.getElementById('tumbs');
		
		for(let i = 0; i < galerias.length; i++){

			let linkGaleria = document.createElement('a');
			let img = document.createElement('img');
			let nomeGaleria = document.createElement('h2');
			let canvas = document.createElement('canvas');
			let ctx = canvas.getContext('2d');

			canvas.width = 1080;
			canvas.height = 1080;
			canvas.class = "tumbs";

			nomeGaleria.innerHTML = galerias[i][0];
			img.src = `${galerias[i][0]}/${galerias[i][1]}`;

			img.addEventListener('load', function(){
				ctx.drawImage(img, 0,0, 1080, 1080);
			});

			linkGaleria.appendChild(canvas);
		    linkGaleria.appendChild(nomeGaleria);

		    linkGaleria.href = `?pasta=${galerias[i][0]}`;
			galeria.appendChild(linkGaleria);
		}


	})
		
	

	request.open('GET', 'http://localhost/rodrigo_amaral/classes/Galeria.php/');
	request.send();
}


function criarGaleria(){

	const request = new XMLHttpRequest();
	let nomeGaleria = document.getElementById('nome').value;
	let fotos = document.getElementById('fotos').files;
	let tumb = fotos[0].name;

	dados = new FormData();

	dados.append('nomeGaleria', nomeGaleria);
	dados.append('tumb', tumb);

	for(let i = 0; i < fotos.length; i++){
		dados.append('fotos[]', fotos[i]);
	}
	request.onload = function(){
		document.write(request.response);
	}

	request.open('POST', 'http://localhost/rodrigo_amaral/classes/Galeria.php');
	request.send(dados);
}



document.addEventListener('DOMContentLoaded', function(){

	let querys = window.location.search;
	let query = new URLSearchParams(querys);
	pasta = query.get('pasta');
	if( ! pasta){
		carregarGalerias();
	}else{
		carregarFotos();
	}
});
document.getElementById('btn').addEventListener('click', function(){
	criarGaleria();
});
