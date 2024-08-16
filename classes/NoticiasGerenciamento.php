<?php
require_once('../conexao.php');
class NoticiasGerenciamento{

	private function validarMedia($media){
		if(empty($media)) {
			return false;
		}

		if(preg_match('/image\//', $media['type']) 
			|| preg_match('/video\//', $media['type'])) {
			return true;
		}
		return false;
		
	}
	

	private function salvarMediaNaPasta($media) {

		if(! $this->validarMedia($media)) {
			return "";
		}

		if(preg_match('/image\//', $media['type'])) {
			$nomeMedia = 'img-' . $media['full_path'];

			move_uploaded_file($media['tmp_name'], '../noticias/media/' . basename($nomeMedia));
		}
		if(preg_match('/video\//', $media['type'])) {
			$nomeMedia = 'video-' . $media['full_path'];

			move_uploaded_file($media['tmp_name'], '../noticias/media/' . basename($nomeMedia));
		}

		return $nomeMedia;
		
	}

	public function criarNoticia($titulo, $media, $conteudo){

		global $conn;

		if(empty($titulo)) return false;
		if(empty($conteudo)) return false;
		
		$nomeMedia = $this->salvarMediaNaPasta($media);

		if( ! $nomeMedia) return false;

		$q = $conn->prepare("

			INSERT INTO 
				Noticias(media, data, titulo, conteudo)
			VALUES
				(?, CURDATE(), ?, ?);
		");

		$q->bind_param('sss', $nomeMedia, $titulo, $conteudo);
		$q->execute();

	}	
}

?>