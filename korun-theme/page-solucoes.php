<?php
/**
 * Página interna: Soluções.
 *
 * @package Korun
 */

get_header();

$korun_contato = esc_url( home_url( '/contato/' ) );
?>

<section class="k-page-hero">
	<canvas class="k-page-hero__canvas" data-korun-particles data-korun-particles-density="0.4" data-korun-particles-fade-left aria-hidden="true"></canvas>
	<div class="k-container">
		<span class="k-eyebrow"><?php esc_html_e( 'Nossas soluções', 'korun' ); ?></span>
		<h1 class="k-page-hero__title"><?php esc_html_e( 'Da leitura à decisão.', 'korun' ); ?></h1>
		<p class="k-page-hero__lead"><?php esc_html_e( 'Quatro formas de transformar sinais públicos em clareza estratégica — do diagnóstico pontual ao acompanhamento contínuo, da prevenção à gestão de crise.', 'korun' ); ?></p>
	</div>
</section>

<div class="k-container k-details">

	<article id="sprint" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 14V8a2 2 0 0 1 2-2h6M30 6h6a2 2 0 0 1 2 2v6M38 30v6a2 2 0 0 1-2 2h-6M14 38H8a2 2 0 0 1-2-2v-6"/><rect x="17" y="17" width="10" height="10" fill="currentColor" stroke="none"/></svg>
			</span>
			<h2 class="k-detail__title">KORUN <span class="is-blue">SPRINT</span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Diagnóstico rápido de sinais públicos com recomendações práticas em até 10 dias úteis. Ideal para quem precisa de clareza imediata antes de uma decisão importante.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Solicitar proposta', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Leitura completa do ambiente', 'korun' ); ?></strong><?php esc_html_e( 'Análise de sinais em milhares de fontes públicas: imprensa, redes, fóruns e dados abertos.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Riscos e oportunidades priorizados', 'korun' ); ?></strong><?php esc_html_e( 'Relatório objetivo com o que exige atenção agora e o que pode virar vantagem.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Recomendações práticas', 'korun' ); ?></strong><?php esc_html_e( 'Plano de ação claro de comunicação e posicionamento, pronto para executar.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Entrega em até 10 dias úteis', 'korun' ); ?></strong><?php esc_html_e( 'Apresentação executiva com sessão de discussão junto à sua equipe.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="radar" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="22" cy="22" r="16"/><circle cx="22" cy="22" r="9" stroke-dasharray="3 4"/><circle cx="22" cy="22" r="3.5" fill="currentColor" stroke="none"/></svg>
			</span>
			<h2 class="k-detail__title">KORUN <span class="is-blue">RADAR</span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Monitoramento contínuo de sinais e reputação com alertas e relatórios estratégicos. O ambiente sob leitura permanente, para você nunca ser pego de surpresa.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Solicitar proposta', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Monitoramento 24/7', 'korun' ); ?></strong><?php esc_html_e( 'Leitura contínua de menções, narrativas e movimentos do seu setor.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Alertas inteligentes', 'korun' ); ?></strong><?php esc_html_e( 'Aviso imediato quando um sinal relevante muda de comportamento.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Relatórios estratégicos', 'korun' ); ?></strong><?php esc_html_e( 'Sínteses semanais e mensais com tendências, riscos e recomendações.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Acompanhamento próximo', 'korun' ); ?></strong><?php esc_html_e( 'Analista dedicado e reuniões periódicas de leitura do cenário.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="crisis" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 6L40 38H4L22 6z"/><path d="M22 18v8" stroke-linecap="round"/><circle cx="22" cy="31" r="1.6" fill="currentColor" stroke="none"/></svg>
			</span>
			<h2 class="k-detail__title">KORUN <span class="is-blue">CRISIS</span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Inteligência e atuação em tempo real para gestão de crises e proteção da reputação — antes, durante e depois do momento crítico.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Falar com a Korun', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Sala de crise', 'korun' ); ?></strong><?php esc_html_e( 'Estrutura de resposta ativada em horas, com leitura do cenário em tempo real.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Estratégia de narrativa', 'korun' ); ?></strong><?php esc_html_e( 'Posicionamento, mensagens-chave e preparação de porta-vozes.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Prevenção', 'korun' ); ?></strong><?php esc_html_e( 'Mapeamento de vulnerabilidades e protocolos prontos antes da crise existir.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Pós-crise', 'korun' ); ?></strong><?php esc_html_e( 'Avaliação de impacto e plano de recuperação de reputação.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="advisory" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="15" cy="15" r="5"/><circle cx="29" cy="15" r="5"/><path d="M5 36c0-6 4.5-10 10-10s10 4 10 10M25 27.5c1.3-.95 2.9-1.5 4.6-1.5 5 0 9.4 4 9.4 10"/></svg>
			</span>
			<h2 class="k-detail__title">KORUN <span class="is-blue">ADVISORY</span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Consultoria estratégica para comunicação, reputação e tomada de decisão. Inteligência de sinais ao lado da liderança, de forma contínua.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Solicitar proposta', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Conselho estratégico', 'korun' ); ?></strong><?php esc_html_e( 'Apoio direto à liderança nas decisões sensíveis de comunicação e posicionamento.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Reputação de lideranças', 'korun' ); ?></strong><?php esc_html_e( 'Construção e proteção da imagem pública de executivos e gestores.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Treinamentos e simulações', 'korun' ); ?></strong><?php esc_html_e( 'Media training e exercícios de crise para preparar a equipe.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Decisão orientada por sinais', 'korun' ); ?></strong><?php esc_html_e( 'Leitura de ambiente integrada ao planejamento estratégico da organização.', 'korun' ); ?></li>
		</ul>
	</article>

</div>

<?php
get_footer();
