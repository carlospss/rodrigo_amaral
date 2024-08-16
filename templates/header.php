<?php
	
	$img_path = '../media/img/logo.png';

	if($_SERVER['REQUEST_URI'] === '/rodrigo_amaral/'){
		$img_path = preg_replace('/\.\.\//', '', $img_path);
	}
?>
<header>
	<div>
		<a href="/rodrigo_amaral"><img src="<?= $img_path; ?>" alt="logo rodrigo amaral" id="logo-header"></a>
		<i class="fa-solid fa-bars" id="barras"></i>
	</div>
	<nav id="navegacao">
		<ul>
			<li>
				<a href="http://localhost/rodrigo_amaral/#quem-sou-eu" id="nav-link1" class="nav-links">Quem sou eu?</a>
				<div class="barra"></div>
			</li>
			<li>
				<a href="http://localhost/rodrigo_amaral/#o-futuro-de-salvador" id="nav-link2" class="nav-links">O futuro de Salvador</a>
				<div class="barra"></div>
			</li>

			<li>
				<a href="http://localhost/rodrigo_amaral/#minhas-propostas" id="nav-link3" class="nav-links">Minhas propostas</a>
				<div class="barra"></div>
			</li>
			<li>
				<a href="http://localhost/rodrigo_amaral/#voto-confianca" id="nav-link4" class="nav-links">Voto de confiança</a>
				<div class="barra"></div>
			</li>
			<li>
				<a href="http://localhost/rodrigo_amaral/#contato" id="nav-link5" class="nav-links">contato</a>
				<div class="barra"></div>
			</li>
			<li>
				<a href="http://localhost/rodrigo_amaral/galeria" id="nav-link6" class="nav-links">galeria</a>
				<div class="barra"></div>
			</li>
			<li>
				<a href="http://localhost/rodrigo_amaral/noticias" id="nav-link7" class="nav-links">notícias</a>
				<div class="barra"></div>
			</li>
		</ul>
	</nav>
</header>


