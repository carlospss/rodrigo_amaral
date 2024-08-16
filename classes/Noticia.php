<?php
// session_start();
require_once('../conexao.php');


class Noticia{

	private $titulo;
	private $media;
	private $conteudo;
	private $nomeMedia;

	public function __construct($titulo = '', $media = '', $conteudo = ''){

		$this->titulo = $titulo;
		$this->media = $media;
		$this->conteudo = $conteudo;
	}

	private function validarMedia(){
		if(empty($this->media)) {
			return false;
		}

		if(preg_match('/image\//', $this->media['type']) 
			|| preg_match('/video\//', $this->media['type'])) {
			return true;
		}
		return false;
		
	}
	

	private function salvarMediaNaPasta():bool {

		if(! $this->validarMedia()) {
			return false;
		}

		if(preg_match('/image\//', $this->media['type'])) {
			$this->nomeMedia = 'img-' . $this->media['full_path'];

			move_uploaded_file($this->media['tmp_name'], '../noticias/media/' . basename($this->nomeMedia));
		}
		if(preg_match('/video\//', $this->media['type'])) {
			$this->nomeMedia = 'video-' . $this->media['full_path'];

			move_uploaded_file($this->media['tmp_name'], '../noticias/media/' . basename($this->nomeMedia));
		}

		return true;
		
	}

	public function criarNoticia(){

		global $conn;

		if(empty($this->titulo)) return false;
		if(empty($this->conteudo)) return false;
		if( ! $this->salvarMediaNaPasta()) return false;

		$q = $conn->prepare("

			INSERT INTO 
				Noticias(media, data, titulo, conteudo)
			VALUES
				(?, CURDATE(), ?, ?);
		");

		$q->bind_param('sss', $this->nomeMedia, $this->titulo, $this->conteudo);
		$q->execute();

	}

	public function mostrarNoticias($intervalo = 0){

		global $conn;

		if( ! $intervalo){
			$q = $conn->prepare("

				SELECT
					DAY(data) AS dia,
		 			MONTH(data) AS mes,
		 			YEAR(data) AS ano,
		 			media,
		 			titulo,
		 			SUBSTRING(conteudo, 1, 309),
		 			id,
		 			(SELECT COUNT(*) FROM Noticias) AS qtdRegistros
				 FROM 
					Noticias
				ORDER BY 
					id
				DESC
				LIMIT 10;				
			");

			$q->execute();

			$get = $q->get_result();

			$get = $get->fetch_all();

			$getJson = json_encode($get);

			return $getJson;
		}
		else{

			$q = $conn->prepare("

				SELECT
					DAY(data) AS dia,
		 			MONTH(data) AS mes,
		 			YEAR(data) AS ano,
		 			media,
		 			titulo,
		 			SUBSTRING(conteudo, 1, 309),
		 			id,
		 			(SELECT COUNT(*) FROM Noticias) AS qtdRegistros
				 FROM 
					Noticias
			 	ORDER BY
			 		id
			 	DESC
			 	LIMIT 10
			 	OFFSET ?;			
			");

			$q->bind_param('s', $intervalo);
			$q->execute();

			$get = $q->get_result();

			$get = $get->fetch_all();

			$getJson = json_encode($get);

			return $getJson;

		}

	}

	public function mostrarNoticia($id){
		global $conn;

		$q = $conn->prepare("

			SELECT
	 			titulo,
	 			media,
	 			conteudo
			FROM 
				Noticias
			WHERE
				id=?;

		");

	
		$q->bind_param('s', $id);		
		$q->execute();

		$get = $q->get_result();

		return json_encode($get->fetch_assoc());


	}
}



if($_SERVER['REQUEST_METHOD'] == 'GET'){


	// if($_SESSION['admin']){

		$session = 'admin';

		$session = json_encode($session);
	// }

	$noticia = new Noticia();

	if(empty($_GET)){ 
		echo $noticia->mostrarNoticias();
	}
	if(isset($_GET['noticias'])){
		echo $noticia->mostrarNoticias($_GET['noticias']);
	}

	if(isset($_GET['noticia'])){
		echo $noticia->mostrarNoticia($_GET['noticia']);
	}
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){

	$noticia = new Noticia($_POST['titulo'], $_FILES['media'], $_POST['conteudo']);
		$noticia->criarNoticia();
}

?>


