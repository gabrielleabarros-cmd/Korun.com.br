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

// Contact form endpoint: receives the SPA form and emails it to the site admin.
add_action( 'rest_api_init', function () {
	register_rest_route( 'korun/v1', '/contact', array(
		'methods'             => 'POST',
		'permission_callback' => '__return_true',
		'callback'            => 'korun_handle_contact',
	) );
} );

function korun_handle_contact( WP_REST_Request $request ) {
	$name    = sanitize_text_field( (string) $request->get_param( 'name' ) );
	$email   = sanitize_email( (string) $request->get_param( 'email' ) );
	$phone   = sanitize_text_field( (string) $request->get_param( 'phone' ) );
	$message = sanitize_textarea_field( (string) $request->get_param( 'message' ) );

	if ( '' === $name || ! is_email( $email ) || '' === $message ) {
		return new WP_Error( 'korun_invalid_data', 'Dados inválidos.', array( 'status' => 400 ) );
	}

	$to      = get_option( 'admin_email' );
	$subject = 'Novo contato pelo site — ' . $name;
	$body    = "Nome: {$name}\nEmail: {$email}\nTelefone: {$phone}\n\nMensagem:\n{$message}";
	$headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );

	if ( ! wp_mail( $to, $subject, $body, $headers ) ) {
		return new WP_Error( 'korun_send_failed', 'Falha no envio.', array( 'status' => 500 ) );
	}

	return array( 'success' => true );
}

function korun_module_script_tag( $tag, $handle, $src ) {
	if ( 'korun-app' === $handle ) {
		$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>' . "\n";
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'korun_module_script_tag', 10, 3 );
