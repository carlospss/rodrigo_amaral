if(window.screen.width <= 1024){

	document.getElementById('barras').addEventListener('click', function(){

		let links = document.getElementsByClassName('nav-links');
		let navegacao = document.getElementById('navegacao');

		if( ! navegacao.style.height){
			document.getElementById('barras').className = 'fa-solid fa-xmark';
			
			if(window.screen.width == 568){
				navegacao.style.height = '315px';
			}else{
				navegacao.style.height = '291px';
			}

			setTimeout(function(){
				for(let i = 0; i < links.length; i++){
					links[i].style.display = 'block';
				}
			}, 400);



		}else{
			document.getElementById('barras').className = 'fa-solid fa-bars';

			for(let i = 0; i < links.length; i++){
				links[i].style.display = 'none';
			}
			navegacao.style.height = '';
		}
		
	});
}
