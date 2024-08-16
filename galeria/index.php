<?php require_once('../templates/doctype.php');?>
	<link rel="stylesheet" type="text/css" href="../styles/header-style.css">
	<link rel="stylesheet" type="text/css" href="../styles/body.css">
	<link rel="stylesheet" type="text/css" href="../styles/galeria.css">
	<link rel="stylesheet" type="text/css" href="../styles/footer-style.css">

	 
	<title>Rodrigo Amaral - Compromisso com o futuro</title>
</head>
<body>
	<?php require_once('../templates/header.php');?>
	<script src="../scripts/bars.js"></script>
	<script src="../scripts/header-mobile.js"></script>
	<main>

		<div id="top"></div>
		<a href="http://localhost/rodrigo_amaral/media/video/video-sobre-mim.mp4" download="videodocara">baixar video</a>
		<div id="galeria">
			<h1 id="titulo">Galeria</h1>
			<input type="text" id="nome">
			<input type="file" id="fotos" multiple>
			<button id="btn">Criar</button>

			<p>Selecione a pasta com o nome do seu bairro para ver as fotos tiradas:</p>
			<section id="tumbs">
			
			</section>
		</div>
		<script src="../scripts/galeria.js"></script>
	</main>
	<?php require_once('../templates/footer.php');?>
</body>
</html>