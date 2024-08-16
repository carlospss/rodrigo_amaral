// document.addEventListener('DOMContentLoaded', function(){
	// window.scrollTo(0,0);
// });
window.onload = function(){

	this.scrollTo(0, 0);

	let banner_img = document.getElementById('rodrigo_amaral');
	let slogan = document.getElementById('slogan');
		
	if(this.screen <= 1024){
		banner_img.style.marginLeft = '0';
		slogan.style.marginLeft = '0';
	}else{
		document.getElementById('banner').style.gap = '0';
	}

	slogan.style.opacity = '1';
	banner_img.style.opacity = '1';
}

