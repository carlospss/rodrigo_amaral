function validarNome(){

	let erro = document.getElementById('erroNome');
	let nome = document.getElementById('nome').value;

	if( ! nome){
		erro.innerHTML = "O campo de nome não pode ficar vazio.";
		return false;
	}else{
		erro.innerHTML = "";
		

		if(nome.match(/[\!\@\#\$\%\¨\&\*\(\)0-9]/g)){
			erro.innerHTML = "Por favor, digite um nome válido.";
			return false;
		}else{
			erro.innerHTML = "";
		}

		return true;
	}

	
}

function validarEndereco(){
	let endereco = document.getElementById('endereco').value;
	let erro = document.getElementById('erroEnd');

	if( ! endereco){
		erro.innerHTML = "O campo de endereço não pode ficar vazio.";
		return false;
	}else{
		erro.innerHTML = "";
		return true;
	}
}
function formatarTelefone(){
	let telefone = document.getElementById('telefone');
	let digito = telefone.value;

	if(telefone.value.length == 10){
		telefone.value = `(${digito[0]}${digito[1]}) ${digito[2]}${digito[3]}${digito[4]}${digito[5]}-${digito[6]}${digito[7]}${digito[8]}${digito[9]}`;
	}
	if(telefone.value.length == 11){
		telefone.value = `(${digito[0]}${digito[1]}) ${digito[2]}${digito[3]}${digito[4]}${digito[5]}${digito[6]}-${digito[7]}${digito[8]}${digito[9]}${digito[10]}`;
	}
}
function validarTelefone(){

	let telefone = document.getElementById('telefone').value;
	let erro = document.getElementById('erroTelefone');

	if( ! telefone){
		erro.innerHTML = "O campo de telefone não pode ficar vazio.";
		return false;

	}else{
		erro.innerHTML = "";
		//ESSA FUNÇÃO NÃO PERMITE QUE EU COLE O TELEFONE JÁ FORMATADO DEVO CONSERTAR ISSO
		if( ! telefone.match(/^[0-9]{10,11}$/) &&
			! telefone.match(/^\(?[0-9]{2}\)?\s?[0-9]{4,5}\-?[0-9]{4}$/)){

			erro.innerHTML = "Por favor, digite um número de telefone válido";
			return false
		}else{
			erro.innerHTML = "";
		}

		return true;
	}
	
}

function validarEmail(){
	let email = document.getElementById('email').value;
	let erro = document.getElementById('erroEmail');

	if( ! email){
		erro.innerHTML = "O campo de nome não pode ficar vazio.";
		return false;

	}else{

		erro.innerHTML = "";

		if( ! email.match(/^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
			erro.innerHTML = "Por favor, digite um email válido.";
			return false;
		}else{
			erro.innerHTML = "";
		}

		return true;
	}	
}

function validarMensagem(){
	let mensagem = document.getElementById('mensagem').value;
	let erro = document.getElementById('erroMensagem');

	if( ! mensagem){
		erro.innerHTML = "O campo de mensagem não pode ficar vazio.";
		return false;
	}else{
		erro.innerHTML = "";
		return true;
	}
}
	

function enviarMensagem(){

	const request = new XMLHttpRequest();
	let dados = new FormData();

	dados.append('nome', document.getElementById("nome").value);
	dados.append('telefone', document.getElementById('telefone').value);
	dados.append('email', document.getElementById('email').value);
	dados.append('endereco', document.getElementById('endereco').value);
	dados.append('mensagem', document.getElementById('mensagem').value);

	

	request.onload = function(){

		const aviso = document.getElementsByClassName('aviso')[0];

		document.getElementsByClassName('loading')[0].remove();

        aviso.style.padding = "1%";
        aviso.style.color = "green";
        aviso.innerHTML = "Mensagem Enviada!";

        setTimeout(function(){
        		document.getElementById('mensagem-aviso').remove();	
        }, 1500);

		document.getElementById("nome").value = "";
		document.getElementById('telefone').value = "";
		document.getElementById('email').value = "";
		document.getElementById('endereco').value = "";
		document.getElementById('mensagem').value = "";	
	}

	request.open("POST", "http://localhost/rodrigo_amaral/classes/Mensagem.php");
	request.send(dados);
}

// document.addEventListener('DOMContentLoaded', function(){
// 	document.getElementById("nome").value = "sadsd";
// 	document.getElementById('telefone').value = "(71) 98755-7941";
// 	document.getElementById('email').value = "carlospsilvasesi@gmail.com";
// 	document.getElementById('mensagem').value = "asdasdsadsad";
// 	document.getElementById('bairro').value = "dfdafsaf";
// 	// document.getElementById('btn').onclick();

// });
document.getElementById("nome").addEventListener('input', function(){
	validarNome();
});
document.getElementById("nome").addEventListener('blur', function(){
	validarNome();
});

document.getElementById('telefone').addEventListener('input', function(){
	validarTelefone();
});
document.getElementById('telefone').addEventListener('blur', function(){
	validarTelefone();
	formatarTelefone();
});

document.getElementById('email').addEventListener('input', function(){
	validarEmail();
});
document.getElementById('email').addEventListener('blur', function(){
	validarEmail();
});

document.getElementById('mensagem').addEventListener('input', function(){
	validarMensagem();
});
document.getElementById('mensagem').addEventListener('blur', function(){
	validarMensagem();
});

document.getElementById('endereco').addEventListener('input', function(){
	validarEndereco();
});
document.getElementById('endereco').addEventListener('blur', function(){
	validarEndereco();
});


//mandar a mensagem
document.getElementById('mensagem-btn').onclick = function(){
	validarEmail();
	validarNome(); 
	validarEndereco(); 
	validarMensagem();
	validarTelefone();

	if(validarNome() && validarEmail() && validarEndereco() 
		&& validarMensagem() && validarTelefone()){


		let caixa = document.createElement("div");
    	let aviso = document.createElement('span');
    	let loading = document.createElement('img');

	    caixa.style.position = "fixed";
	    caixa.style.borderRadius = "3px";
	    caixa.style.width = "100vw";
	    caixa.style.height = "100vh";
	    caixa.style.display = "flex";
	    caixa.style.justifyContent = "center";
	    caixa.style.alignItems = "center";
	    caixa.style.alignSelf = "flex-start";
	    caixa.style.backgroundColor = "rgba(0, 0, 0, .2)";

	    aviso.style.backgroundColor = "white";
	    aviso.style.borderRadius = "5px";
	    aviso.style.display = "flex";
	    aviso.style.flexDirection = "column";
	    aviso.style.alignItems = "center";
	    aviso.style.gap = "5px";
	    aviso.innerHTML = "Enviando";
	    aviso.style.fontSize = "1.6em"
	    
	    loading.src = "media/img/loading.gif";
	    loading.style.width = "20%";

	    aviso.className = "aviso";
	    loading.className = "loading";

	    aviso.appendChild(loading);

	    caixa.appendChild(aviso);

	    caixa.id = "mensagem-aviso"; 

	    document.getElementsByTagName('body')[0].appendChild(caixa);

		enviarMensagem();
	}
	
}

