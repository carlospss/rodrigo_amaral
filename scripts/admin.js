function criarNoticia(){

	const request = new XMLHttpRequest();
	let dados = new FormData();
	let media = document.getElementById('media');

	let arq = media.files[0];

	dados.append('titulo', document.getElementById('titulo').value);
	dados.append('conteudo', document.getElementById('conteudo').value);
	dados.append('media', arq);

	request.onload = function(){
		document.write(request.response);
	}

	request.open("POST", "http://localhost/rodrigo_amaral/classes/Admin.php");
	request.send(dados);
}
function mostrarFormularioCriarNoticia(){

	const background = document.createElement('div');
	const iconeFechar = document.createElement('i');
	const form = document.createElement('div');
	const inputTitulo = document.createElement('input');
	const inputMedia = document.createElement('input');
	const inputConteudo = document.createElement('textarea');
	const btn = document.createElement('button');

	background.id = "criarNoticia";
	iconeFechar.className = "fa-solid fa-xmark";
	form.id = "form";

	inputTitulo.id = "titulo";

	inputMedia.id = "media";
	inputMedia.type = "file";

	inputConteudo.id = "conteudo";

	btn.innerHTML = "Adicionar";
	btn.id = "criar-noticia-btn";
	btn.onclick = function(){
		criarNoticia();
	}

	form.appendChild(inputTitulo);
	form.appendChild(inputMedia);
	form.appendChild(inputConteudo);
	form.appendChild(btn);

	background.appendChild(iconeFechar);
	background.appendChild(form);

	document.querySelector('body').appendChild(background);
}


function excluirNoticia(noticia){

	const request = new XMLHttpRequest();

	request.onload = function(){
		document.write(request.response);
	}

	request.open("POST", "http://localhost/rodrigo_amaral/classes/Noticia.php");
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(`noticia=${noticia}`);
}

function modoExclusaoDeNoticias(){
	console.log(document.getElementsByTagName('script')[
		document.getElementsByTagName('script').length - 1]);
	// <section id="lista-noticias">
			
	// 	</section>

	// 	<script src="../../scripts/carregarNoticias.js"></script>

	// 	<button id="ver-mais">Ver mais</button>

}
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("#add-noticia").onclick = function(){
		mostrarFormularioCriarNoticia();
	}
	document.querySelector('#excluir-noticia').onclick = function(){
		modoExclusaoDeNoticias();
	}
});