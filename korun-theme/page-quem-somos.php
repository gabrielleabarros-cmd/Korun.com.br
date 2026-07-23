<?php
/**
 * Página interna: Quem Somos.
 *
 * @package Korun
 */

get_header();
?>

<section class="k-page-hero">
	<canvas class="k-page-hero__canvas" data-korun-particles data-korun-particles-density="0.4" data-korun-particles-fade-left aria-hidden="true"></canvas>
	<div class="k-container">
		<span class="k-eyebrow"><?php esc_html_e( 'Quem somos', 'korun' ); ?></span>
		<h1 class="k-page-hero__title"><?php esc_html_e( 'Lemos o ambiente para quem precisa decidir.', 'korun' ); ?></h1>
		<p class="k-page-hero__lead"><?php esc_html_e( 'A Korun é uma consultoria de inteligência de sinais: transformamos o ruído do ambiente público em clareza para governos, marcas e instituições.', 'korun' ); ?></p>
	</div>
</section>

<section class="k-about">
	<div class="k-container k-about__grid">
		<div>
			<p><strong><?php esc_html_e( 'Nascemos de uma convicção simples:', 'korun' ); ?></strong> <?php esc_html_e( 'as melhores decisões são tomadas por quem lê o ambiente antes dos outros. Todos os dias, milhões de sinais públicos — conversas, notícias, dados, movimentos — indicam o que está por vir. A maioria das organizações só percebe quando já virou manchete.', 'korun' ); ?></p>
			<p><?php esc_html_e( 'Há mais de dez anos combinamos tecnologia de monitoramento com análise humana especializada para captar esses sinais, separá-los do ruído e traduzi-los em recomendações práticas.', 'korun' ); ?></p>
		</div>
		<div>
			<p><?php esc_html_e( 'De Recife para todo o Brasil, já realizamos mais de 2.000 projetos de inteligência e monitoramento, acompanhando 156 cidades em tempo real — em eleições, crises, lançamentos e transformações de reputação.', 'korun' ); ?></p>
			<p><strong><?php esc_html_e( 'Nosso compromisso é com a decisão, não com o relatório.', 'korun' ); ?></strong> <?php esc_html_e( 'Cada entrega da Korun termina onde a sua ação começa: com clareza sobre o que fazer a seguir.', 'korun' ); ?></p>
		</div>
	</div>
</section>

<!-- Números -->
<section class="k-stats">
	<div class="k-container">
		<div class="k-stats__grid">

			<div class="k-stat">
				<span class="k-stat__icon">
					<svg viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 3l11 4v9c0 7-4.5 12.5-11 15C10.5 28.5 6 23 6 16V7l11-4z"/><path d="M12.5 17l3 3 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<div class="k-stat__value">+10<small><?php esc_html_e( 'anos', 'korun' ); ?></small></div>
					<p class="k-stat__label"><?php esc_html_e( 'de experiência em inteligência e reputação', 'korun' ); ?></p>
				</div>
			</div>

			<div class="k-stat">
				<span class="k-stat__icon">
					<svg viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 30h26M7 30V19m7 11V14m7 16V17m7 13V9" stroke-linecap="round"/><path d="M7 14l7-5 6 4 7-8" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<div class="k-stat__value">+2.000</div>
					<p class="k-stat__label"><?php esc_html_e( 'projetos de inteligência e monitoramento realizados', 'korun' ); ?></p>
				</div>
			</div>

			<div class="k-stat">
				<span class="k-stat__icon">
					<svg viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 31s10-9.6 10-17a10 10 0 1 0-20 0c0 7.4 10 17 10 17z"/><circle cx="17" cy="13.5" r="3.6"/></svg>
				</span>
				<div>
					<div class="k-stat__value">156</div>
					<p class="k-stat__label"><?php esc_html_e( 'cidades monitoradas em todo o Brasil', 'korun' ); ?></p>
				</div>
			</div>

			<div class="k-stat">
				<span class="k-stat__icon">
					<svg viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="17" cy="17" r="13"/><path d="M17 9.5V17l5.5 3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<div class="k-stat__value">24/7</div>
					<p class="k-stat__label"><?php esc_html_e( 'leitura contínua do ambiente em tempo real', 'korun' ); ?></p>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Metodologia -->
<section id="metodologia" class="k-how">
	<div class="k-container">
		<span class="k-eyebrow k-how__eyebrow"><?php esc_html_e( 'Nossa metodologia', 'korun' ); ?></span>

		<div class="k-how__grid">

			<div class="k-step">
				<span class="k-step__icon">
					<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="20" cy="20" r="12"/><path d="M29 29l10 10" stroke-linecap="round"/></svg>
				</span>
				<p class="k-step__num">01</p>
				<h3 class="k-step__title"><?php esc_html_e( 'Coletamos', 'korun' ); ?></h3>
				<p class="k-step__text"><?php esc_html_e( 'Monitoramos milhares de fontes públicas em tempo real.', 'korun' ); ?></p>
			</div>

			<div class="k-step">
				<span class="k-step__icon">
					<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 8h34L27 24v13l-8 4V24L6 8z" stroke-linejoin="round"/></svg>
				</span>
				<p class="k-step__num">02</p>
				<h3 class="k-step__title"><?php esc_html_e( 'Filtramos', 'korun' ); ?></h3>
				<p class="k-step__text"><?php esc_html_e( 'Selecionamos e organizamos os sinais relevantes.', 'korun' ); ?></p>
			</div>

			<div class="k-step">
				<span class="k-step__icon">
					<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 38V24m9 14V12m9 26V20m9 18V8" stroke-linecap="round"/></svg>
				</span>
				<p class="k-step__num">03</p>
				<h3 class="k-step__title"><?php esc_html_e( 'Analisamos', 'korun' ); ?></h3>
				<p class="k-step__text"><?php esc_html_e( 'Identificamos padrões, riscos, oportunidades e tendências.', 'korun' ); ?></p>
			</div>

			<div class="k-step">
				<span class="k-step__icon">
					<svg viewBox="0 0 46 46" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="23" cy="23" r="16"/><circle cx="23" cy="23" r="9"/><circle cx="23" cy="23" r="2.6" fill="currentColor" stroke="none"/><path d="M23 7V2M39 23h5" stroke-linecap="round"/></svg>
				</span>
				<p class="k-step__num">04</p>
				<h3 class="k-step__title"><?php esc_html_e( 'Orientamos', 'korun' ); ?></h3>
				<p class="k-step__text"><?php esc_html_e( 'Entregamos clareza e recomendações para decisões melhores.', 'korun' ); ?></p>
			</div>

		</div>
	</div>
</section>

<!-- Valores -->
<section class="k-audiences">
	<div class="k-container">
		<span class="k-eyebrow k-audiences__eyebrow"><?php esc_html_e( 'Nossos princípios', 'korun' ); ?></span>
		<div class="k-cards-3">

			<div class="k-card">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="22" cy="22" r="9"/><path d="M22 4v6M22 34v6M4 22h6M34 22h6M9 9l4.2 4.2M30.8 30.8L35 35M35 9l-4.2 4.2M13.2 30.8L9 35" stroke-linecap="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Clareza', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Traduzimos complexidade em orientação simples. Se não ajuda a decidir, não entra no relatório.', 'korun' ); ?></p>
			</div>

			<div class="k-card">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 36c6-2 8-8 9-14 .8-4.8 4-8 9-8 6 0 9 4 9 9 0 6-5 9-10 9-4 0-6-2-7-4" stroke-linecap="round"/><path d="M31 14l7-7M33 20h7M27 10V3" stroke-linecap="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Antecipação', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Trabalhamos para que você saiba antes. O valor de um sinal está em chegar a tempo de agir.', 'korun' ); ?></p>
			</div>

			<div class="k-card">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 4l15 6v10c0 9-6.3 16.6-15 20C13.3 36.6 7 29 7 20V10l15-6z" stroke-linejoin="round"/><path d="M15 21.5l4.5 4.5 9-9" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Responsabilidade', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Só usamos dados públicos, com método e ética. Inteligência séria se faz com transparência.', 'korun' ); ?></p>
			</div>

		</div>
	</div>
</section>

<!-- CTA -->
<section class="k-cta">
	<div class="k-container">
		<div class="k-cta__box">
			<canvas class="k-cta__canvas" data-korun-particles data-korun-particles-density="0.5" aria-hidden="true"></canvas>
			<h2 class="k-cta__title">
				<?php esc_html_e( 'Vamos ler o ambiente', 'korun' ); ?><br>
				<span class="is-blue"><?php esc_html_e( 'juntos', 'korun' ); ?></span>?
			</h2>
			<div class="k-cta__action">
				<a class="k-btn k-btn--primary" href="<?php echo esc_url( home_url( '/contato/' ) ); ?>"><?php esc_html_e( 'Falar com a Korun', 'korun' ); ?></a>
			</div>
		</div>
	</div>
</section>

<?php
get_footer();
