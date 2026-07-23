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
 * Textos editáveis do tema com seus valores padrão.
 * Todos podem ser alterados em Aparência → Personalizar → Conteúdo do site.
 */
function korun_defaults() {
	return array(
		'hero_titulo'    => __( 'Inteligência de sinais para', 'korun' ),
		'hero_destaque'  => __( 'decisão.', 'korun' ),
		'hero_texto'     => __( 'Lemos o ambiente, interpretamos sinais públicos e entregamos clareza para você decidir antes que o cenário mude.', 'korun' ),
		'cta_titulo'     => __( 'Leia o ambiente.', 'korun' ),
		'cta_destaque'   => __( 'Decida', 'korun' ),
		'cta_titulo_2'   => __( 'o próximo movimento.', 'korun' ),
		'telefone'       => '+55 81 98765-4321',
		'email'          => 'contato@korun.com.br',
		'endereco'       => __( 'Recife, Pernambuco', 'korun' ),
		'linkedin'       => 'https://www.linkedin.com',
		'instagram'      => 'https://www.instagram.com',
		'youtube'        => 'https://www.youtube.com',
		'meta_descricao' => __( 'Inteligência de sinais para decisão: lemos o ambiente, interpretamos sinais públicos e entregamos clareza para governos, marcas e instituições decidirem antes que o cenário mude.', 'korun' ),
	);
}

/**
 * Lê uma opção do Personalizar com fallback para o padrão do tema.
 */
function korun_mod( $key ) {
	$defaults = korun_defaults();
	return get_theme_mod( 'korun_' . $key, isset( $defaults[ $key ] ) ? $defaults[ $key ] : '' );
}

/**
 * Registra os campos no Personalizar (Aparência → Personalizar).
 */
function korun_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'korun_content', array(
		'title'    => __( 'Conteúdo do site (Korun)', 'korun' ),
		'priority' => 30,
	) );

	$fields = array(
		'hero_titulo'    => array( __( 'Hero — título', 'korun' ), 'text' ),
		'hero_destaque'  => array( __( 'Hero — palavra em azul', 'korun' ), 'text' ),
		'hero_texto'     => array( __( 'Hero — texto de apoio', 'korun' ), 'textarea' ),
		'cta_titulo'     => array( __( 'CTA — linha 1', 'korun' ), 'text' ),
		'cta_destaque'   => array( __( 'CTA — palavra em azul', 'korun' ), 'text' ),
		'cta_titulo_2'   => array( __( 'CTA — restante da linha 2', 'korun' ), 'text' ),
		'telefone'       => array( __( 'Contato — telefone', 'korun' ), 'text' ),
		'email'          => array( __( 'Contato — e-mail', 'korun' ), 'text' ),
		'endereco'       => array( __( 'Contato — endereço', 'korun' ), 'text' ),
		'linkedin'       => array( __( 'Rede social — LinkedIn (URL)', 'korun' ), 'url' ),
		'instagram'      => array( __( 'Rede social — Instagram (URL)', 'korun' ), 'url' ),
		'youtube'        => array( __( 'Rede social — YouTube (URL)', 'korun' ), 'url' ),
		'meta_descricao' => array( __( 'SEO — meta description', 'korun' ), 'textarea' ),
	);

	// Estilo do site: claro ou escuro.
	$wp_customize->add_setting( 'korun_estilo', array(
		'default'           => 'claro',
		'sanitize_callback' => function ( $value ) {
			return in_array( $value, array( 'claro', 'escuro' ), true ) ? $value : 'claro';
		},
	) );
	$wp_customize->add_control( 'korun_estilo', array(
		'label'   => __( 'Estilo do site', 'korun' ),
		'section' => 'korun_content',
		'type'    => 'radio',
		'choices' => array(
			'claro'  => __( 'Claro (fundo branco)', 'korun' ),
			'escuro' => __( 'Escuro (fundo preto)', 'korun' ),
		),
	) );

	$defaults = korun_defaults();

	foreach ( $fields as $key => $field ) {
		$wp_customize->add_setting( 'korun_' . $key, array(
			'default'           => $defaults[ $key ],
			'sanitize_callback' => 'url' === $field[1] ? 'esc_url_raw' : 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'korun_' . $key, array(
			'label'   => $field[0],
			'section' => 'korun_content',
			'type'    => 'url' === $field[1] ? 'url' : $field[1],
		) );
	}
}
add_action( 'customize_register', 'korun_customize_register' );

/**
 * Aplica a classe do tema claro ao body quando selecionado no Personalizar.
 */
function korun_body_class( $classes ) {
	if ( 'escuro' !== get_theme_mod( 'korun_estilo', 'claro' ) ) {
		$classes[] = 'k-light';
	}
	return $classes;
}
add_filter( 'body_class', 'korun_body_class' );

/**
 * SEO: meta description, Open Graph/Twitter Cards e dados estruturados.
 * Desativado automaticamente se um plugin de SEO (Yoast/Rank Math) estiver ativo.
 */
function korun_seo_meta() {
	if ( defined( 'WPSEO_VERSION' ) || class_exists( 'RankMath' ) ) {
		return;
	}

	$title = wp_get_document_title();
	$desc  = korun_mod( 'meta_descricao' );
	if ( is_singular() && ! is_front_page() ) {
		$excerpt = get_the_excerpt();
		if ( $excerpt ) {
			$desc = wp_strip_all_tags( $excerpt );
		}
	}
	$url   = is_singular() ? get_permalink() : home_url( add_query_arg( array(), $GLOBALS['wp']->request ?? '' ) );
	$image = '';
	if ( is_singular() && has_post_thumbnail() ) {
		$image = get_the_post_thumbnail_url( null, 'large' );
	} elseif ( has_custom_logo() ) {
		$logo_id = get_theme_mod( 'custom_logo' );
		$logo    = wp_get_attachment_image_src( $logo_id, 'full' );
		if ( $logo ) {
			$image = $logo[0];
		}
	}

	echo '<meta name="description" content="' . esc_attr( $desc ) . '">' . "\n";
	echo '<meta property="og:locale" content="pt_BR">' . "\n";
	echo '<meta property="og:type" content="' . ( is_singular( 'post' ) ? 'article' : 'website' ) . '">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $title ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $desc ) . '">' . "\n";
	echo '<meta property="og:url" content="' . esc_url( $url ) . '">' . "\n";
	echo '<meta property="og:site_name" content="' . esc_attr( get_bloginfo( 'name' ) ) . '">' . "\n";
	if ( $image ) {
		echo '<meta property="og:image" content="' . esc_url( $image ) . '">' . "\n";
	}
	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";

	// Dados estruturados (JSON-LD) na página inicial.
	if ( is_front_page() ) {
		$schema = array(
			'@context'     => 'https://schema.org',
			'@type'        => 'Organization',
			'name'         => get_bloginfo( 'name' ),
			'url'          => home_url( '/' ),
			'description'  => $desc,
			'email'        => korun_mod( 'email' ),
			'telephone'    => korun_mod( 'telefone' ),
			'address'      => array(
				'@type'           => 'PostalAddress',
				'addressLocality' => korun_mod( 'endereco' ),
				'addressCountry'  => 'BR',
			),
			'sameAs'       => array_values( array_filter( array( korun_mod( 'linkedin' ), korun_mod( 'instagram' ), korun_mod( 'youtube' ) ) ) ),
		);
		if ( $image ) {
			$schema['logo'] = $image;
		}
		echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
	}
}
add_action( 'wp_head', 'korun_seo_meta', 5 );

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
