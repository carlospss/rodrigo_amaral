<?php session_start();?>
<?php require_once('../templates/doctype.php');?>
	<link rel="stylesheet" type="text/css" href="../styles/header-style.css">
	<link rel="stylesheet" type="text/css" href="../styles/body.css">
	<link rel="stylesheet" type="text/css" href="../styles/footer-style.css">
	<link rel="stylesheet" type="text/css" href="../styles/noticias.css"><!--ESSE SEMPRE VAI SER O ÚLTIMO-->
	<link rel="stylesheet" type="text/css" href="../styles/criarNoticia.css">
	<link rel="stylesheet" type="text/css" href="../styles/lista-noticias.css"><!--ESSE SEMPRE VAI SER O ÚLTIMO-->
	<title>Rodrigo Amaral - Noticias</title>
</head>
<body>
	<?php require_once('../templates/header.php');?>
	<script src="../scripts/bars.js"></script>
	<script src="../scripts/header-mobile.js"></script>
	<main>
		
		<div id="top"></div>
		
		<h1>Noticias</h1>
		
<!-- 		<script src="../scripts/gerenciarNoticias.js"></script>
		<section id="noticias">
			
		</section> -->

		<section id="lista-noticias">
			
		</section>

		<script src="../scripts/carregarNoticias.js"></script>

		<button id="ver-mais">Ver mais</button>

	</main>
	<?php require_once('../templates/footer.php');?>
</body>
</html>