<?php

require_once('../conexao.php');

class Galeria{

	private $nomeGaleria;
	private $fotos;
	private $tumb;

	public function __construct($nomeGaleria = "", $fotos = "", $tumb = ""){
		$this->nomeGaleria = $nomeGaleria;
		$this->fotos = $fotos;
		$this->tumb = $tumb;
	}
	public function criar(){

		global $conn;

		$q = $conn->prepare("
			INSERT INTO 
					Galeria(nomeGaleria, tumb)
			VALUES
				 	(?,?);

	    ");

	    $q->bind_param('ss', $this->nomeGaleria, $this->tumb);
	    $q->execute();

		mkdir('../galeria/' . basename($this->nomeGaleria));

	}

	public function salvarFotos(){
		for($i=0; $i<count($this->fotos[0]); $i++){
			move_uploaded_file($this->fotos[1][$i], '../galeria/' . $this->nomeGaleria .'/'. basename($this->fotos[0][$i]));
		}
	} 

	public function carregarGalerias(){
		global $conn;

		$q = $conn->prepare("

			SELECT 
				* 
			FROM
				Galeria; 
		");

		$q->execute();

		$get = $q->get_result();

		return json_encode($get->fetch_all());
	}

	public function carregarFotos(){
		return json_encode(scandir('../galeria/'.$this->nomeGaleria));
	}
}

$galeria = new Galeria();

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	$galeria = new Galeria($_POST['nomeGaleria'], [$_FILES['fotos']['full_path'], $_FILES['fotos']['tmp_name']], $_POST['tumb']);
	$galeria->criar();
	$galeria->salvarFotos();
}
if($_SERVER['REQUEST_METHOD'] == 'GET'){
	if(empty($_GET)){
		echo $galeria->carregarGalerias();
	}
	if(isset($_GET['pasta'])){
		$galeria = new Galeria($_GET['pasta']);
		echo $galeria->carregarFotos();
	}
}
?>