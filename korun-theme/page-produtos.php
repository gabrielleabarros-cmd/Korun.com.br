<?php
/**
 * Página interna: Produtos.
 *
 * @package Korun
 */

get_header();

$korun_contato = esc_url( home_url( '/contato/' ) );
?>

<section class="k-page-hero">
	<canvas class="k-page-hero__canvas" data-korun-particles data-korun-particles-density="0.4" data-korun-particles-fade-left aria-hidden="true"></canvas>
	<div class="k-container">
		<span class="k-eyebrow"><?php esc_html_e( 'Produtos', 'korun' ); ?></span>
		<h1 class="k-page-hero__title"><?php esc_html_e( 'Tecnologia que transforma sinais em ação.', 'korun' ); ?></h1>
		<p class="k-page-hero__lead"><?php esc_html_e( 'Ferramentas próprias que colocam a inteligência da Korun na rotina da sua equipe — do monitoramento ao investimento em mídia.', 'korun' ); ?></p>
	</div>
</section>

<div class="k-container k-details">

	<article id="chat" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 10a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H18l-8 8v-8h-0a4 4 0 0 1-4-4V10z" stroke-linejoin="round"/><circle cx="15" cy="18" r="1.8" fill="currentColor" stroke="none"/><circle cx="22" cy="18" r="1.8" fill="currentColor" stroke="none"/><circle cx="29" cy="18" r="1.8" fill="currentColor" stroke="none"/></svg>
			</span>
			<h2 class="k-detail__title">KORUN <span class="is-blue">CHAT</span><span class="k-badge"><?php esc_html_e( 'Novo', 'korun' ); ?></span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Converse com a inteligência da Korun. Pergunte sobre sinais, riscos e narrativas em linguagem natural e receba respostas fundamentadas em tempo real.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Pedir demonstração', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Perguntas em linguagem natural', 'korun' ); ?></strong><?php esc_html_e( '"O que estão falando sobre nós esta semana?" — e a resposta vem na hora.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Conectado ao monitoramento', 'korun' ); ?></strong><?php esc_html_e( 'Respostas baseadas nos sinais coletados pela plataforma, não em achismos.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Resumos e briefings instantâneos', 'korun' ); ?></strong><?php esc_html_e( 'Gere sínteses executivas prontas para reuniões e decisões rápidas.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Disponível para toda a equipe', 'korun' ); ?></strong><?php esc_html_e( 'Acesso multiusuário com histórico e permissões por perfil.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="power-ads" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M24 4L10 26h10l-2 14 16-24H23l1-12z" stroke-linejoin="round"/></svg>
			</span>
			<h2 class="k-detail__title">POWER ADS <span class="is-blue">PRO</span><span class="k-badge"><?php esc_html_e( 'Novo', 'korun' ); ?></span></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Gestão e otimização de campanhas orientadas por sinais. Invista onde a conversa realmente acontece e ajuste a rota com base no que o ambiente mostra.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--primary" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Pedir demonstração', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list k-list--titled">
			<li><strong><?php esc_html_e( 'Mídia guiada por sinais', 'korun' ); ?></strong><?php esc_html_e( 'Segmentação e mensagens definidas pela leitura do ambiente, não só por dados demográficos.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Otimização contínua', 'korun' ); ?></strong><?php esc_html_e( 'Campanhas ajustadas conforme narrativas crescem ou perdem força.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Multi-plataforma', 'korun' ); ?></strong><?php esc_html_e( 'Google, Meta, TikTok e programática em um só plano de investimento.', 'korun' ); ?></li>
			<li><strong><?php esc_html_e( 'Resultados com contexto', 'korun' ); ?></strong><?php esc_html_e( 'Relatórios que conectam desempenho de mídia à reputação e ao cenário.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="radar" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="22" cy="22" r="16"/><path d="M22 22L33 13" stroke-linecap="round"/><circle cx="22" cy="22" r="2.5" fill="currentColor" stroke="none"/><path d="M22 6v4M38 22h-4M22 38v-4M6 22h4" stroke-linecap="round"/></svg>
			</span>
			<h2 class="k-detail__title"><?php esc_html_e( 'Plataforma Radar', 'korun' ); ?></h2>
			<p class="k-detail__text"><?php esc_html_e( 'O painel de monitoramento contínuo da Korun: visão geral de sinais, menções e tendências em uma interface só.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--outline" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Saiba mais', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list">
			<li><?php esc_html_e( 'Painel em tempo real com filtros por tema, fonte e território.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Análise de sentimento e evolução de narrativas.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Comparativos com concorrentes e referências do setor.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Exportação de dados e integração com relatórios.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="relatorios" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4h14l8 8v28H12V4z" stroke-linejoin="round"/><path d="M26 4v8h8M18 22h10M18 28h10M18 34h6" stroke-linecap="round"/></svg>
			</span>
			<h2 class="k-detail__title"><?php esc_html_e( 'Relatórios', 'korun' ); ?></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Sínteses estratégicas periódicas com leitura do cenário, tendências e recomendações práticas para a próxima decisão.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--outline" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Saiba mais', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list">
			<li><?php esc_html_e( 'Periodicidade sob medida: diário, semanal ou mensal.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Formato executivo, direto ao ponto, pronto para a liderança.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Recomendações acionáveis em cada edição.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="mapas" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8L4 12v24l12-4 12 4 12-4V8l-12 4-12-4z" stroke-linejoin="round"/><path d="M16 8v24M28 12v24"/></svg>
			</span>
			<h2 class="k-detail__title"><?php esc_html_e( 'Mapas de Risco', 'korun' ); ?></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Visualização territorial de riscos e oportunidades por cidade e região — essencial para governos e operações distribuídas.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--outline" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Saiba mais', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list">
			<li><?php esc_html_e( 'Cobertura de 156 cidades monitoradas em todo o Brasil.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Camadas por tema: segurança, saúde, infraestrutura, reputação.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Evolução histórica e comparativos entre territórios.', 'korun' ); ?></li>
		</ul>
	</article>

	<article id="alertas" class="k-detail">
		<div>
			<span class="k-detail__icon">
				<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 6a11 11 0 0 1 11 11c0 8 3 10 3 10H8s3-2 3-10A11 11 0 0 1 22 6z" stroke-linejoin="round"/><path d="M18 33a4 4 0 0 0 8 0" stroke-linecap="round"/></svg>
			</span>
			<h2 class="k-detail__title"><?php esc_html_e( 'Alertas Inteligentes', 'korun' ); ?></h2>
			<p class="k-detail__text"><?php esc_html_e( 'Avisos automáticos quando um sinal relevante muda de comportamento — direto no seu e-mail ou WhatsApp.', 'korun' ); ?></p>
			<div class="k-detail__cta">
				<a class="k-btn k-btn--outline" href="<?php echo $korun_contato; ?>"><?php esc_html_e( 'Saiba mais', 'korun' ); ?></a>
			</div>
		</div>
		<ul class="k-list">
			<li><?php esc_html_e( 'Gatilhos personalizados por volume, sentimento ou tema.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Entrega por e-mail, WhatsApp ou integração com sua ferramenta.', 'korun' ); ?></li>
			<li><?php esc_html_e( 'Contexto junto com o alerta: o que mudou e por que importa.', 'korun' ); ?></li>
		</ul>
	</article>

</div>

<?php
get_footer();
