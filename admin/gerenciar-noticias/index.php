<?php require_once('../../templates/doctype.php');?>
	<link rel="stylesheet" type="text/css" href="../../styles/header-style.css">
	<link rel="stylesheet" type="text/css" href="../../styles/body.css">
	<!-- <link rel="stylesheet" type="text/css" href="../../styles/noticias.css"> -->
	<link rel="stylesheet" type="text/css" href="../../styles/criarNoticia.css">
	<link rel="stylesheet" type="text/css" href="../../styles/lista-noticias.css">
	<title>Rodrigo Amaral - Noticias</title>
</head>
<body>
	<?php require_once('../../templates/header-admin.php');?>

	<main>
		<div>
			<ul>
				<li><button id="add-noticia">adicionar</button></li>
				<li><button id="excluir-noticia">excluir</button></li>
				<li><button id="editar-noticia">editar</button></li>
			</ul>
		</div>
		
		
		<script src="../../scripts/admin.js"></script>

		<section id="lista-noticias">
			
		</section>

		<script src="../../scripts/carregarNoticias.js"></script>

		<button id="ver-mais">Ver mais</button>
	</main>
</body>
</html>