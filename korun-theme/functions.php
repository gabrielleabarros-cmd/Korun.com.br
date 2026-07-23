<?php
/**
 * Korun Intelligence theme setup.
 *
 * @package Korun_Intelligence
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function korun_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'automatic-feed-links' );
}
add_action( 'after_setup_theme', 'korun_theme_setup' );

function korun_enqueue_assets() {
	wp_enqueue_style(
		'korun-style',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);

	// The React app. Must load as an ES module so the import map in header.php
	// can resolve its bare imports (react, lucide-react, @google/genai).
	wp_enqueue_script(
		'korun-app',
		get_template_directory_uri() . '/app.js',
		array(),
		filemtime( get_template_directory() . '/app.js' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'korun_enqueue_assets' );

function korun_module_script_tag( $tag, $handle, $src ) {
	if ( 'korun-app' === $handle ) {
		$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>' . "\n";
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'korun_module_script_tag', 10, 3 );
