<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

class Mensagem{

	private $nome;
	private $bairro;
	private $telefone;
	private $email;
	private $assunto;
	private $mensagem;

	public function __construct($nome, $bairro, $telefone, $email, $assunto, $mensagem){

		$this->nome = $nome;
		$this->bairro = $bairro;
		$this->telefone = $telefone;
		$this->email = $email;
		$this->assunto = $assunto;
		$this->mensagem = $mensagem;
	}

	private function validarNome(): bool{

		if(empty($this->nome)){
			return false;
		}
		if(preg_match('/[0-9\"\!\@\#\$\%\¨\&\*\(\)\'\¹\²\³\£\¢\¬\_\-\§\+\=\{\}\[\]\ª\º\,\.\;\:\']/', $this->nome)){
			return false;
		}
		
		return true;
	}

	private function validarEmail(): bool{

		if(empty($this->email)){
			return false;
		}
		if(!preg_match('/^\b([.]?[a-zA-Z0-9][-_]*)+\@([a-zA-Z0-9][.]?)+\b$/', $this->email)){
			return false;
		}

		return true;
	}

	private function validarTelefone(): bool{

		if(strlen($this->telefone) > 0){
			if(!preg_match('/^\(?[0-9]{2}\)?\s?[0-9]{4,5}\-?[0-9]{4}$/', $this->telefone)){
				return false;
			}
		}

		return true;
	}

	private function validarMensagem(): bool{

		if(empty($this->mensagem)){
			return false;
		}
		return true;
	}

	public function mandarMensagem(){

		if(!$this->validarNome() && !$this->validarEmail() && !$this->validarTelefone() && !$this->validarMensagem()){
			return false;
		}else{

			$mail = new PHPMailer(true);

				// $mail->SMTPDebug = 2; 
			    $mail->isSMTP();
    			$mail->Host = 'email-ssl.com.br';
    			$mail->SMTPAuth = true;
    			$mail->Username = 'sincodivba@sincodivba.com.br'; // Seu e-mail Gmail
    			$mail->Password = 'Gabriel.@123'; // Sua senha Gmail (ou senha de app, veja abaixo)
   	 			$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    			$mail->Port = 465;

    			$mail->setFrom("sincodivba@sincodivba.com.br", $this->nome);
    			$mail->addAddress('sincodivba@sincodivba.com.br', 'Nome do Destinatário');

    			$mail->isHTML(true);
    			$mail->Subject = 'Mensagem enviado por  ' . $this->nome;
    			$mail->Body    = "$this->mensagem";
    			$mail->AltBody = 'Este é o corpo do e-mail em texto plano para clientes que não suportam HTML';

    			$mail->send();
    

			return true;
		}
	}
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	if(isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['mensagem']) 
		&& isset($_POST['telefone'])){

		$mensagem = new Mensagem($_POST['nome'], $_POST['email'], $_POST['telefone'],
		 $_POST['mensagem']);

		$mensagem->mandarMensagem();
}

	
}

?>