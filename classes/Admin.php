<?php

require_once("NoticiasGerenciamento.php");

class Admin{

	// public function addImagem(){

	// }
	// public function deletarImagem(){
		
	// }

	function criarNoticia($titulo, $media, $conteudo) {

		$noticia = new NoticiasGerenciamento;
		$noticia->criarNoticia($titulo, $media, $conteudo);
	}
	function deletarNoticia($noticia) {

	}
}


if($_SERVER['REQUEST_METHOD'] == 'POST'){


	$admin = new Admin;
	$admin->criarNoticia($_POST['titulo'], $_FILES['media'], $_POST['conteudo']);
}
?>

