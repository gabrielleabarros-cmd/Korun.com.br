<?php
/**
 * Cabeçalho do tema.
 *
 * @package Korun
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="screen-reader-text" href="#conteudo"><?php esc_html_e( 'Pular para o conteúdo', 'korun' ); ?></a>

<header class="k-header">
	<div class="k-container k-header__inner">

		<a class="k-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				korun_logo_icon();
			}
			?>
			<span><?php echo esc_html( get_bloginfo( 'name' ) ?: 'korun' ); ?></span>
		</a>

		<nav id="k-nav" class="k-nav" aria-label="<?php esc_attr_e( 'Menu principal', 'korun' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'fallback_cb'    => 'korun_default_menu',
			) );
			?>
		</nav>

		<div class="k-header__cta">
			<a class="k-btn k-btn--primary" href="<?php echo esc_url( home_url( '/contato/' ) ); ?>">
				<?php esc_html_e( 'Falar com a Korun', 'korun' ); ?>
				<?php korun_arrow_icon(); ?>
			</a>
		</div>

		<button class="k-menu-toggle" aria-expanded="false" aria-controls="k-nav">
			<span></span><span></span><span></span>
			<span class="screen-reader-text"><?php esc_html_e( 'Abrir menu', 'korun' ); ?></span>
		</button>

	</div>
</header>

<main id="conteudo">
