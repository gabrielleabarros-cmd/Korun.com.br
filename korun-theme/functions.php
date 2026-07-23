<?php
/**
 * Korun Inteligência — funções e configuração do tema.
 *
 * @package Korun
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'KORUN_VERSION', '1.0.0' );

/**
 * Suportes do tema, menus e tamanhos de imagem.
 */
function korun_setup() {
	load_theme_textdomain( 'korun', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 68,
		'width'       => 68,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script', 'navigation-widgets' ) );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'automatic-feed-links' );

	register_nav_menus( array(
		'primary' => __( 'Menu Principal', 'korun' ),
		'footer'  => __( 'Menu do Rodapé', 'korun' ),
	) );
}
add_action( 'after_setup_theme', 'korun_setup' );

/**
 * Estilos e scripts.
 */
function korun_enqueue_assets() {
	// Google Fonts: Inter.
	wp_enqueue_style(
		'korun-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'korun-style', get_stylesheet_uri(), array( 'korun-fonts' ), KORUN_VERSION );

	wp_enqueue_script( 'korun-main', get_template_directory_uri() . '/assets/js/main.js', array(), KORUN_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'korun_enqueue_assets' );

/**
 * Preconnect para o Google Fonts.
 */
function korun_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = array( 'href' => 'https://fonts.googleapis.com' );
		$urls[] = array(
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		);
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'korun_resource_hints', 10, 2 );

/**
 * Menu padrão exibido enquanto nenhum menu é atribuído em Aparência → Menus.
 * Os links apontam para as âncoras das seções da página inicial.
 */
function korun_default_menu() {
	$home = esc_url( home_url( '/' ) );
	?>
	<ul>
		<li class="k-current"><a href="<?php echo $home; ?>"><?php esc_html_e( 'Home', 'korun' ); ?></a></li>
		<li class="k-has-sub">
			<a href="<?php echo $home; ?>#solucoes"><?php esc_html_e( 'Soluções', 'korun' ); ?> <svg class="k-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg></a>
			<ul>
				<li><a href="<?php echo $home; ?>#solucoes"><?php esc_html_e( 'Korun Sprint', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#solucoes"><?php esc_html_e( 'Korun Radar', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#solucoes"><?php esc_html_e( 'Korun Crisis', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#solucoes"><?php esc_html_e( 'Korun Advisory', 'korun' ); ?></a></li>
			</ul>
		</li>
		<li class="k-has-sub">
			<a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Produtos', 'korun' ); ?> <svg class="k-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg></a>
			<ul>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Korun Chat', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Power Ads Pro', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Plataforma Radar', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Relatórios', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Mapas de Risco', 'korun' ); ?></a></li>
				<li><a href="<?php echo $home; ?>#produtos"><?php esc_html_e( 'Alertas Inteligentes', 'korun' ); ?></a></li>
			</ul>
		</li>
		<li><a href="<?php echo $home; ?>#quem-somos"><?php esc_html_e( 'Quem Somos', 'korun' ); ?></a></li>
		<li><a href="<?php echo $home; ?>#insights"><?php esc_html_e( 'Insights', 'korun' ); ?></a></li>
		<li><a href="<?php echo $home; ?>#contato"><?php esc_html_e( 'Contato', 'korun' ); ?></a></li>
	</ul>
	<?php
}

/**
 * Logomarca padrão (ícone "K" laranja) usada quando nenhum logo é enviado no Personalizar.
 */
function korun_logo_icon() {
	?>
	<svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M6 4h9v14L28 4h10L23 20l15 16H28L15 22v14H6V4z" fill="#f97316"/>
	</svg>
	<?php
}

/**
 * Ícone de seta usada em botões e links.
 */
function korun_arrow_icon() {
	?>
	<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	<?php
}

/**
 * Comprimento do resumo dos posts.
 */
function korun_excerpt_length( $length ) {
	return 28;
}
add_filter( 'excerpt_length', 'korun_excerpt_length' );

function korun_excerpt_more( $more ) {
	return '…';
}
add_filter( 'excerpt_more', 'korun_excerpt_more' );
