if(window.matchMedia('(min-width: 1025px').matches){

	document.getElementById('nav-link1').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[0].style.width = `${width}px`;
	});
	document.getElementById('nav-link1').addEventListener('mouseout', function(){
		// if(window.scrollY != 100){
			document.getElementsByClassName('barra')[0].style.width = '0px';
		// }
	});


	document.getElementById('nav-link2').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[1].style.width = `${width}px`;
	});
	document.getElementById('nav-link2').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[1].style.width = '0px';
	});


	document.getElementById('nav-link3').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[2].style.width = `${width}px`;
	});
	document.getElementById('nav-link3').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[2].style.width = '0px';
	});


	document.getElementById('nav-link4').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[3].style.width = `${width}px`;
	});
	document.getElementById('nav-link4').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[3].style.width = '0px';
	});

	document.getElementById('nav-link5').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[4].style.width = `${width}px`;
	});
	document.getElementById('nav-link5').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[4].style.width = '0px';
	});

	document.getElementById('nav-link6').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[5].style.width = `${width}px`;
	});
	document.getElementById('nav-link6').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[5].style.width = '0px';
	});
	document.getElementById('nav-link7').addEventListener('mouseover', function(){
		let dimensoes = this.getBoundingClientRect();
		let width = dimensoes.width;
		document.getElementsByClassName('barra')[6].style.width = `${width}px`;
	});
	document.getElementById('nav-link7').addEventListener('mouseout', function(){
		document.getElementsByClassName('barra')[6].style.width = '0px';
	});

	// window.addEventListener('scroll', function(){
	// 	let sobre_mim = document.getElementById('sobre-mim-h1').getBoundingClientRect();
	// 	let compromisso_futuro = document.getElementById('compromisso-futuro-h1').getBoundingClientRect();
	// 	let dimensoes = document.getElementById('nav-link1').getBoundingClientRect();
	// 	let width = dimensoes.width;


	// 	if(this.scrollY >= sobre_mim.top && this.scrollY >= compromisso_futuro){
	// 		document.getElementsByClassName('barra')[0].style.width = `${width}px`;
	// 	}else{
	// 		document.getElementsByClassName('barra')[0].style.width = '0px';
	// 	}
	// });
	
}