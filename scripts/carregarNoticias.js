function carregarNoticias(qtdNoticias = 0){

	const request = new XMLHttpRequest();

	request.onload = function(){ 

		let noticias = JSON.parse(request.response);
		let indiceJSON = 0;
			
			
		for(let i = qtdNoticias; i < (noticias.length + qtdNoticias); i++){

			let listaNoticias = document.getElementById('lista-noticias');
			let noticia = document.createElement('article');

			let dataNoticia = document.createElement('div');
			let mediaContainer = document.createElement('div');
			let tituloContainer = document.createElement('div');
			let titulo = document.createElement('h2');
			let linkNoticia = document.createElement('a');
			let conteudo = document.createElement('p');


			noticia.className = 'noticia';
			listaNoticias.appendChild(noticia);

			noticia = document.getElementsByClassName('noticia')[i];

			mediaContainer.className = 'imagem-noticia';
			noticia.appendChild(mediaContainer);

			mediaContainer = document.getElementsByClassName('imagem-noticia')[i];

			if(noticias[indiceJSON][3].match(/^img\-/)) {

				let img = document.createElement('img');
				img.src = 'http://localhost/rodrigo_amaral/noticias/media/' + noticias[indiceJSON][3];
				mediaContainer.appendChild(img);
			}
			else if(noticias[indiceJSON][3].match(/^video\-/)) {
				
				let media = document.createElement('video');
				let video = document.createElement('source');

				video.src = 'http://localhost/rodrigo_amaral/noticias/media/' + noticias[indiceJSON][3];

				media.appendChild(video);
				mediaContainer.appendChild(media);
			}
			

			tituloContainer.className = 'titulo-conteudo';
			noticia.appendChild(tituloContainer);

			tituloContainer = document.getElementsByClassName('titulo-conteudo')[i];

			tituloContainer.appendChild(titulo);

			titulo = document.getElementsByTagName('h2')[i];

			linkNoticia.className = 'link_noticia';
			linkNoticia.href = 'http://localhost/rodrigo_amaral/noticias/?noticia=' + noticias[indiceJSON][6];
			linkNoticia.innerHTML = noticias[indiceJSON][4];

			titulo.appendChild(linkNoticia);
			conteudo.innerHTML = noticias[indiceJSON][5] + '[...]';

			tituloContainer.appendChild(conteudo);

			if(document.getElementById('criarNoticias')){
				let btnApagar = document.createElement('button').innerHTML = "apagar";
				let btnEditar = document.createElement('button').innerHTML = "editar";

				console.log(btnApagar);

				noticia.appendChild(btnApagar);
				noticia.appendChild(btnEditar);

			}

			indiceJSON++;
		}
	}

	if(qtdNoticias == 0){
		request.open('GET', 'http://localhost/rodrigo_amaral/classes/Noticia.php');
	}else{
		request.open('GET', 'http://localhost/rodrigo_amaral/classes/Noticia.php?'+`noticias=${qtdNoticias}`);
	}	
	
	request.send();
}

function carregarNoticia(noticia){

	const request = new XMLHttpRequest();

	request.onload = function(){

		let noticia = JSON.parse(request.response);
		
		let article = document.createElement('article');
		let titulo = document.createElement('h1');
		let media;//pode ser vídeo ou foto por isso eu não a inicializei
		let mediaBackground = document.createElement('div');
		// let conteudo = document.createElement('p');
		let numP = noticia.conteudo.match(/\r\n\r\n/g).length;		
		let comeco = 0;//usado no for

		titulo.innerHTML = noticia.titulo;

		if(noticia.media.match(/^video\-/)) {

			const source = document.createElement('source');
			media = document.createElement('video');

			media.controls = "true";

			source.src = `http://localhost/rodrigo_amaral/noticias/media/${noticia.media}`;

			media.id = "media";
			media.appendChild(source);
		}
		else if(noticia.media.match(/^img\-/)) {
			
			media = document.createElement('img');
			media.id = "media";
			media.src = `http://localhost/rodrigo_amaral/noticias/media/${noticia.media}`;
		}
	

		mediaBackground.id = "img-background";

		mediaBackground.appendChild(media);

		article.id = "noticia";
		article.appendChild(titulo);
		article.appendChild(mediaBackground);
		

		for(let i = 0; i <= numP; i++){
			let p = document.createElement('p');
			let conteudo = noticia.conteudo;

			if(i < numP){
				let fim = conteudo.match(/\r\n\r\n/).index;
				
				console.log(`${comeco} ${fim}`);
				
				if(comeco == 0){
					p.innerHTML = conteudo.substr(comeco , fim);
				}else{
					p.innerHTML = conteudo.substr(comeco , fim-comeco);
				}


				article.appendChild(p);

				noticia.conteudo = conteudo.replace(/\r\n\r\n/, "");

				comeco = fim;
			}else{

				p.innerHTML = conteudo.substr(comeco, conteudo.length-comeco);
				article.appendChild(p);
			}

			document.querySelector("main").appendChild(article);
		}
	}

	request.open('GET', `http://localhost/rodrigo_amaral/classes/Noticia.php?noticia=${noticia}`);
	request.send();
}

document.addEventListener('DOMContentLoaded', function(){
	let noticia = 0;
	let url = window.location.search;
	let queryString = new URLSearchParams(url);

	noticia = queryString.get('noticia');

	if( ! noticia){
		carregarNoticias();
	}else{
		const estiloNoticia =  document.getElementsByTagName("link")[
			document.getElementsByTagName("link").length - 1];

		document.querySelector("main h1").remove();
		document.querySelector("#lista-noticias").remove();
		document.querySelector("#ver-mais").remove();
	    estiloNoticia.href = "../styles/noticiaUnica.css";

		carregarNoticia(noticia);
	}
});
