let btnAddImagem = document.getElementsByClassName('add')[0];
let delImagem = document.getElementsByClassName('del')[0];


btnAddImagem.addEventListener("click", function(){

	if( ! document.getElementsByTagName('input')[0]){

		let form = document.createElement('form');
		let input = document.createElement('input');
		let aviso = document.createElement('span');

		// form.enctype = "multipart/form-data";
		// form.action = "classes/Admin.php";

		input.type = "file";
		input.id = "imagem";

		aviso.style.display = "none";
		aviso.style.color = "red";
		aviso.id = "aviso";

		input.addEventListener('input', function(){

			let arq = this.files[0];

			if( ! arq.type.match(/image\//)){
				aviso.innerHTML = "O formato desse arquivo é inválido.";
				aviso.style.display = "inline";

			}else{
				aviso.innerHTML = "";
				aviso.style.display = "none";
			// 	addImagem();
			}
		});

		form.appendChild(input);

		document.getElementById('alterarImagens').appendChild(form);
		document.getElementById("alterarImagens").appendChild(aviso);
	}
});
