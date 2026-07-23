<?php
/**
 * Template de página não encontrada.
 *
 * @package Korun
 */

get_header();
?>

<div class="k-content">
	<div class="k-container" style="text-align:center; padding-top:40px; padding-bottom:40px;">
		<span class="k-eyebrow">404</span>
		<h1 class="k-page-title"><?php esc_html_e( 'Página não encontrada.', 'korun' ); ?></h1>
		<p style="color:var(--k-text-muted); margin-bottom:32px;"><?php esc_html_e( 'O sinal que você procura não está aqui. Volte para a página inicial.', 'korun' ); ?></p>
		<a class="k-btn k-btn--primary" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Voltar ao início', 'korun' ); ?></a>
	</div>
</div>

<?php
get_footer();
