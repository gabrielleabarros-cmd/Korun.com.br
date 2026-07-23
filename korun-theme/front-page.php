<?php
/**
 * Página inicial — landing page da Korun.
 *
 * @package Korun
 */

get_header();
?>

<!-- ============================ HERO ============================ -->
<section id="home" class="k-hero">
	<canvas class="k-hero__canvas" data-korun-particles data-korun-particles-fade-left aria-hidden="true"></canvas>

	<div class="k-container k-hero__inner">

		<div class="k-hero__copy">
			<h1 class="k-hero__title">
				<?php echo esc_html( korun_mod( 'hero_titulo' ) ); ?>
				<span class="is-blue"><?php echo esc_html( korun_mod( 'hero_destaque' ) ); ?></span>
			</h1>
			<p class="k-hero__lead"><?php echo esc_html( korun_mod( 'hero_texto' ) ); ?></p>
			<div class="k-hero__actions">
				<a class="k-btn k-btn--primary" href="#solucoes"><?php esc_html_e( 'Conheça o Korun Sprint', 'korun' ); ?></a>
				<a class="k-btn k-btn--outline" href="#como-funciona">
					<?php esc_html_e( 'Como funciona', 'korun' ); ?>
					<?php korun_arrow_icon(); ?>
				</a>
			</div>
		</div>

		<div class="k-hero__visual" aria-hidden="true">
			<span class="k-hero__tag k-hero__tag--1"><?php esc_html_e( 'Sinais', 'korun' ); ?><br><?php esc_html_e( 'identificados', 'korun' ); ?></span>
			<span class="k-hero__tag k-hero__tag--2"><?php esc_html_e( 'Riscos', 'korun' ); ?><br><?php esc_html_e( 'mapeados', 'korun' ); ?></span>
			<span class="k-hero__tag k-hero__tag--3"><?php esc_html_e( 'Decisões', 'korun' ); ?><br><?php esc_html_e( 'orientadas', 'korun' ); ?></span>
		</div>

	</div>
</section>

<!-- ============================ CLIENTES ============================ -->
<section class="k-clients">
	<div class="k-container">
		<p class="k-clients__label"><?php esc_html_e( 'Empresas, governos e instituições que confiam na Korun', 'korun' ); ?></p>
		<div class="k-clients__grid">

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M6 28V12l5-3v19H6zm7 0V8l5-3v23h-5zm7 0V14l5-3v17h-5z" opacity=".85"/></svg>
				<span class="k-client__name">CIDADEALTA<small><?php esc_html_e( 'PREFEITURA', 'korun' ); ?></small></span>
			</span>

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M6 26L16 6l10 20M11 18h10"/></svg>
				<span class="k-client__name">NEXORA<small>GROUP</small></span>
			</span>

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M4 6l12 20L28 6M10 6l6 10 6-10"/></svg>
				<span class="k-client__name">VÉRTICE<small><?php esc_html_e( 'INSTITUTO', 'korun' ); ?></small></span>
			</span>

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3z"/><path d="M16 10l5.5 3.25v6.5L16 23l-5.5-3.25v-6.5L16 10z"/></svg>
				<span class="k-client__name">LUMINA<small>BRASIL</small></span>
			</span>

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M12 22V10h5a4 4 0 0 1 0 8h-5"/></svg>
				<span class="k-client__name">PÚBLICA<small><?php esc_html_e( 'CONSULTORIA', 'korun' ); ?></small></span>
			</span>

			<span class="k-client">
				<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M16 4l12 22H4L16 4z"/><path d="M16 13l6 11H10l6-11z"/></svg>
				<span class="k-client__name">ORION<small>PARTNERS</small></span>
			</span>

		</div>
	</div>
</section>

<!-- ============================ SOLUÇÕES ============================ -->
<section id="solucoes" class="k-solutions">
	<div class="k-container">
		<div class="k-solutions__head">
			<span class="k-eyebrow"><?php esc_html_e( 'Nossas soluções', 'korun' ); ?></span>
			<h2 class="k-section-title"><?php esc_html_e( 'Da leitura à decisão.', 'korun' ); ?></h2>
		</div>

		<div class="k-cards-4">

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 14V8a2 2 0 0 1 2-2h6M30 6h6a2 2 0 0 1 2 2v6M38 30v6a2 2 0 0 1-2 2h-6M14 38H8a2 2 0 0 1-2-2v-6"/><rect x="17" y="17" width="10" height="10" fill="currentColor" stroke="none"/></svg>
				</span>
				<h3 class="k-card__title">KORUN <span class="is-blue">SPRINT</span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Diagnóstico rápido de sinais públicos com recomendações práticas em até 10 dias úteis.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="22" cy="22" r="16"/><circle cx="22" cy="22" r="9" stroke-dasharray="3 4"/><circle cx="22" cy="22" r="3.5" fill="currentColor" stroke="none"/></svg>
				</span>
				<h3 class="k-card__title">KORUN <span class="is-blue">RADAR</span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Monitoramento contínuo de sinais e reputação com alertas e relatórios estratégicos.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 6L40 38H4L22 6z"/><path d="M22 18v8" stroke-linecap="round"/><circle cx="22" cy="31" r="1.6" fill="currentColor" stroke="none"/></svg>
				</span>
				<h3 class="k-card__title">KORUN <span class="is-blue">CRISIS</span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Inteligência e atuação em tempo real para gestão de crises e proteção da reputação.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="15" cy="15" r="5"/><circle cx="29" cy="15" r="5"/><path d="M5 36c0-6 4.5-10 10-10s10 4 10 10M25 27.5c1.3-.95 2.9-1.5 4.6-1.5 5 0 9.4 4 9.4 10"/></svg>
				</span>
				<h3 class="k-card__title">KORUN <span class="is-blue">ADVISORY</span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Consultoria estratégica para comunicação, reputação e tomada de decisão.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

		</div>
	</div>
</section>

<!-- ============================ ESTATÍSTICAS ============================ -->
<section id="quem-somos" class="k-stats">
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

<!-- ============================ COMO FUNCIONA ============================ -->
<section id="como-funciona" class="k-how">
	<div class="k-container">
		<span class="k-eyebrow k-how__eyebrow"><?php esc_html_e( 'Como funciona', 'korun' ); ?></span>

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

<!-- ============================ PRODUTOS ============================ -->
<section id="produtos" class="k-products">
	<div class="k-container">
		<div class="k-products__head">
			<span class="k-eyebrow"><?php esc_html_e( 'Produtos', 'korun' ); ?></span>
			<h2 class="k-section-title"><?php esc_html_e( 'Tecnologia que transforma sinais em ação.', 'korun' ); ?></h2>
		</div>

		<div class="k-cards-3">

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 10a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H18l-8 8v-8h-0a4 4 0 0 1-4-4V10z" stroke-linejoin="round"/><circle cx="15" cy="18" r="1.8" fill="currentColor" stroke="none"/><circle cx="22" cy="18" r="1.8" fill="currentColor" stroke="none"/><circle cx="29" cy="18" r="1.8" fill="currentColor" stroke="none"/></svg>
				</span>
				<h3 class="k-card__title">KORUN <span class="is-blue">CHAT</span><span class="k-badge"><?php esc_html_e( 'Novo', 'korun' ); ?></span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Converse com a inteligência da Korun: pergunte sobre sinais, riscos e narrativas e receba respostas em tempo real.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M24 4L10 26h10l-2 14 16-24H23l1-12z" stroke-linejoin="round"/></svg>
				</span>
				<h3 class="k-card__title">POWER ADS <span class="is-blue">PRO</span><span class="k-badge"><?php esc_html_e( 'Novo', 'korun' ); ?></span></h3>
				<p class="k-card__text"><?php esc_html_e( 'Gestão e otimização de campanhas orientadas por sinais, para investir onde a conversa realmente acontece.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="22" cy="22" r="16"/><path d="M22 22L33 13" stroke-linecap="round"/><circle cx="22" cy="22" r="2.5" fill="currentColor" stroke="none"/><path d="M22 6v4M38 22h-4M22 38v-4M6 22h4" stroke-linecap="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Plataforma Radar', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Painel de monitoramento contínuo com visão geral de sinais, menções e tendências.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4h14l8 8v28H12V4z" stroke-linejoin="round"/><path d="M26 4v8h8M18 22h10M18 28h10M18 34h6" stroke-linecap="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Relatórios', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Relatórios estratégicos periódicos com leitura do cenário e recomendações práticas.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8L4 12v24l12-4 12 4 12-4V8l-12 4-12-4z" stroke-linejoin="round"/><path d="M16 8v24M28 12v24"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Mapas de Risco', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Visualização territorial de riscos e oportunidades por cidade e região.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

			<a class="k-card" href="#contato">
				<span class="k-card__icon">
					<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 6a11 11 0 0 1 11 11c0 8 3 10 3 10H8s3-2 3-10A11 11 0 0 1 22 6z" stroke-linejoin="round"/><path d="M18 33a4 4 0 0 0 8 0" stroke-linecap="round"/></svg>
				</span>
				<h3 class="k-card__title"><?php esc_html_e( 'Alertas Inteligentes', 'korun' ); ?></h3>
				<p class="k-card__text"><?php esc_html_e( 'Avisos automáticos quando um sinal relevante muda de comportamento.', 'korun' ); ?></p>
				<span class="k-card__arrow"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10h13m0 0l-5-5m5 5l-5 5"/></svg></span>
			</a>

		</div>
	</div>
</section>

<!-- ============================ PARA QUEM É ============================ -->
<section id="para-quem" class="k-audiences">
	<div class="k-container">
		<span class="k-eyebrow k-audiences__eyebrow"><?php esc_html_e( 'Para quem é', 'korun' ); ?></span>

		<div class="k-cards-4">

			<article class="k-audience">
				<div class="k-audience__media" style="background-image: linear-gradient(160deg, #23262e 0%, #101218 55%, #0a0b0f 100%);"></div>
				<div class="k-audience__body">
					<span class="k-audience__icon">
						<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 15L20 6l16 9M7 15v14m6-14v14m8-14v14m6-14v14m6-14v14M4 33h32" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<h3 class="k-audience__title"><?php esc_html_e( 'Governos', 'korun' ); ?></h3>
					<p class="k-audience__text"><?php esc_html_e( 'Antecipe crises, compreenda o território e fortaleça a confiança da sociedade.', 'korun' ); ?></p>
					<a class="k-audience__link" href="#contato"><?php esc_html_e( 'Saiba mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
				</div>
			</article>

			<article class="k-audience">
				<div class="k-audience__media" style="background-image: linear-gradient(200deg, #2a2d36 0%, #14161d 50%, #0a0b0f 100%);"></div>
				<div class="k-audience__body">
					<span class="k-audience__icon">
						<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 36V5m0 2h20l-5 6 5 6H9" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<h3 class="k-audience__title"><?php esc_html_e( 'Marcas', 'korun' ); ?></h3>
					<p class="k-audience__text"><?php esc_html_e( 'Proteja sua reputação, entenda a conversa e transforme sinais em vantagem competitiva.', 'korun' ); ?></p>
					<a class="k-audience__link" href="#contato"><?php esc_html_e( 'Saiba mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
				</div>
			</article>

			<article class="k-audience">
				<div class="k-audience__media" style="background-image: linear-gradient(140deg, #262932 0%, #12141b 55%, #0a0b0f 100%);"></div>
				<div class="k-audience__body">
					<span class="k-audience__icon">
						<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 4l13 5v10c0 8-5.4 14.6-13 17C12.4 33.6 7 27 7 19V9l13-5z" stroke-linejoin="round"/></svg>
					</span>
					<h3 class="k-audience__title"><?php esc_html_e( 'Instituições', 'korun' ); ?></h3>
					<p class="k-audience__text"><?php esc_html_e( 'Acompanhe riscos, oportunidades e narrativas que impactam sua missão.', 'korun' ); ?></p>
					<a class="k-audience__link" href="#contato"><?php esc_html_e( 'Saiba mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
				</div>
			</article>

			<article class="k-audience">
				<div class="k-audience__media" style="background-image: linear-gradient(220deg, #2c2f38 0%, #15171e 50%, #0a0b0f 100%);"></div>
				<div class="k-audience__body">
					<span class="k-audience__icon">
						<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="14" cy="13" r="4.5"/><circle cx="26" cy="13" r="4.5"/><path d="M4 32c0-5.5 4.2-9 10-9s10 3.5 10 9M23 24.6c1-.4 2-.6 3-.6 5.8 0 10 3.5 10 9" stroke-linecap="round"/></svg>
					</span>
					<h3 class="k-audience__title"><?php esc_html_e( 'Agências', 'korun' ); ?></h3>
					<p class="k-audience__text"><?php esc_html_e( 'Entregue mais estratégia e valor aos seus clientes com inteligência de sinais contínua.', 'korun' ); ?></p>
					<a class="k-audience__link" href="#contato"><?php esc_html_e( 'Saiba mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
				</div>
			</article>

		</div>
	</div>
</section>

<!-- ============================ INSIGHTS ============================ -->
<section id="insights" class="k-insights">
	<div class="k-container">
		<span class="k-eyebrow k-insights__eyebrow"><?php esc_html_e( 'Insights que geram decisão', 'korun' ); ?></span>

		<div class="k-insights__grid">
			<?php
			// Se houver posts publicados, os três mais recentes substituem os cards estáticos.
			$korun_posts = get_posts( array(
				'numberposts' => 3,
				'post_status' => 'publish',
			) );

			if ( $korun_posts ) :
				foreach ( $korun_posts as $korun_post ) :
					$korun_cat = get_the_category( $korun_post->ID );
					?>
					<article class="k-insight">
						<div class="k-insight__media" <?php if ( has_post_thumbnail( $korun_post->ID ) ) : ?>style="background-image:url('<?php echo esc_url( get_the_post_thumbnail_url( $korun_post->ID, 'medium_large' ) ); ?>');"<?php endif; ?>>
							<?php if ( ! has_post_thumbnail( $korun_post->ID ) ) : ?>
								<svg viewBox="0 0 150 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="150" height="150" fill="#12141b"/><g fill="#3b82f6"><circle cx="25" cy="110" r="2"/><circle cx="50" cy="95" r="2.5"/><circle cx="75" cy="105" r="2"/><circle cx="100" cy="80" r="2.5"/><circle cx="125" cy="90" r="2"/><circle cx="40" cy="60" r="1.5" opacity=".6"/><circle cx="90" cy="45" r="1.5" opacity=".6"/><circle cx="115" cy="55" r="1.5" opacity=".6"/></g></svg>
							<?php endif; ?>
						</div>
						<div class="k-insight__body">
							<p class="k-insight__kicker"><?php echo $korun_cat ? esc_html( $korun_cat[0]->name ) : esc_html__( 'Artigo', 'korun' ); ?></p>
							<h3 class="k-insight__title"><a href="<?php echo esc_url( get_permalink( $korun_post->ID ) ); ?>"><?php echo esc_html( get_the_title( $korun_post->ID ) ); ?></a></h3>
							<a class="k-insight__link" href="<?php echo esc_url( get_permalink( $korun_post->ID ) ); ?>"><?php esc_html_e( 'Ler mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
						</div>
					</article>
					<?php
				endforeach;
			else :
				?>

				<article class="k-insight">
					<div class="k-insight__media">
						<svg viewBox="0 0 150 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="150" height="150" fill="#0d0f14"/><g fill="#3b82f6"><circle cx="20" cy="115" r="2"/><circle cx="45" cy="100" r="2.5"/><circle cx="70" cy="108" r="2"/><circle cx="95" cy="85" r="2.5"/><circle cx="120" cy="95" r="2"/><circle cx="140" cy="75" r="2"/></g><g fill="#f97316"><circle cx="60" cy="70" r="2"/><circle cx="105" cy="60" r="2"/></g><g fill="#4b5563"><circle cx="30" cy="80" r="1.3"/><circle cx="85" cy="50" r="1.3"/><circle cx="130" cy="40" r="1.3"/><circle cx="50" cy="40" r="1.3"/></g></svg>
					</div>
					<div class="k-insight__body">
						<p class="k-insight__kicker"><?php esc_html_e( 'Artigo', 'korun' ); ?></p>
						<h3 class="k-insight__title"><?php esc_html_e( '5 sinais que indicam uma crise antes de explodir', 'korun' ); ?></h3>
						<a class="k-insight__link" href="#contato"><?php esc_html_e( 'Ler mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
					</div>
				</article>

				<article class="k-insight">
					<div class="k-insight__media">
						<svg viewBox="0 0 150 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="150" height="150" fill="#101218"/><g fill="#1c1f28"><rect x="20" y="35" width="34" height="115"/><rect x="62" y="15" width="40" height="135"/><rect x="110" y="50" width="28" height="100"/></g><g fill="#2a2e3a"><rect x="26" y="45" width="6" height="8"/><rect x="38" y="45" width="6" height="8"/><rect x="26" y="60" width="6" height="8"/><rect x="38" y="60" width="6" height="8"/><rect x="70" y="28" width="7" height="9"/><rect x="84" y="28" width="7" height="9"/><rect x="70" y="46" width="7" height="9"/><rect x="84" y="46" width="7" height="9"/><rect x="70" y="64" width="7" height="9"/><rect x="84" y="64" width="7" height="9"/><rect x="116" y="60" width="5" height="7"/><rect x="126" y="60" width="5" height="7"/><rect x="116" y="74" width="5" height="7"/><rect x="126" y="74" width="5" height="7"/></g></svg>
					</div>
					<div class="k-insight__body">
						<p class="k-insight__kicker"><?php esc_html_e( 'Relatório', 'korun' ); ?></p>
						<h3 class="k-insight__title"><?php esc_html_e( 'Panorama da reputação digital no setor público em 2026', 'korun' ); ?></h3>
						<a class="k-insight__link" href="#contato"><?php esc_html_e( 'Ler mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
					</div>
				</article>

				<article class="k-insight">
					<div class="k-insight__media">
						<svg viewBox="0 0 150 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="150" height="150" fill="#0d0f14"/><g fill="#2563eb"><rect x="16" y="110" width="9" height="25" rx="1.5"/><rect x="30" y="100" width="9" height="35" rx="1.5"/><rect x="44" y="92" width="9" height="43" rx="1.5"/><rect x="58" y="80" width="9" height="55" rx="1.5"/><rect x="72" y="86" width="9" height="49" rx="1.5"/><rect x="86" y="66" width="9" height="69" rx="1.5"/><rect x="100" y="52" width="9" height="83" rx="1.5"/><rect x="114" y="38" width="9" height="97" rx="1.5"/><rect x="128" y="24" width="9" height="111" rx="1.5" fill="#3b82f6"/></g></svg>
					</div>
					<div class="k-insight__body">
						<p class="k-insight__kicker"><?php esc_html_e( 'Análise', 'korun' ); ?></p>
						<h3 class="k-insight__title"><?php esc_html_e( 'Narrativas que mais crescem nas redes em maio/2026', 'korun' ); ?></h3>
						<a class="k-insight__link" href="#contato"><?php esc_html_e( 'Ler mais', 'korun' ); ?> <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h9m0 0L7 3m4 4l-4 4"/></svg></a>
					</div>
				</article>

			<?php endif; ?>
		</div>
	</div>
</section>

<!-- ============================ CTA ============================ -->
<section class="k-cta">
	<div class="k-container">
		<div class="k-cta__box">
			<canvas class="k-cta__canvas" data-korun-particles data-korun-particles-density="0.5" aria-hidden="true"></canvas>
			<h2 class="k-cta__title">
				<?php echo esc_html( korun_mod( 'cta_titulo' ) ); ?><br>
				<span class="is-blue"><?php echo esc_html( korun_mod( 'cta_destaque' ) ); ?></span> <?php echo esc_html( korun_mod( 'cta_titulo_2' ) ); ?>
			</h2>
			<div class="k-cta__action">
				<a class="k-btn k-btn--primary" href="mailto:<?php echo esc_attr( korun_mod( 'email' ) ); ?>"><?php esc_html_e( 'Solicitar diagnóstico', 'korun' ); ?></a>
			</div>
		</div>
	</div>
</section>

<?php
get_footer();
