<?php
/**
 * Template padrão — listagem de posts (blog / arquivo / busca).
 *
 * @package Korun
 */

get_header();
?>

<div class="k-content">
	<div class="k-container">

		<h1 class="k-page-title">
			<?php
			if ( is_home() && ! is_front_page() ) {
				single_post_title();
			} elseif ( is_search() ) {
				printf( esc_html__( 'Resultados para: %s', 'korun' ), '<span>' . esc_html( get_search_query() ) . '</span>' );
			} elseif ( is_archive() ) {
				the_archive_title();
			} else {
				esc_html_e( 'Insights', 'korun' );
			}
			?>
		</h1>

		<?php if ( have_posts() ) : ?>

			<div class="k-post-list">
				<?php while ( have_posts() ) : the_post(); ?>
					<article <?php post_class( 'k-post-card' ); ?>>
						<p class="k-post-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
						<h2 class="k-post-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<div class="k-post-card__excerpt"><?php the_excerpt(); ?></div>
					</article>
				<?php endwhile; ?>
			</div>

			<nav class="k-pagination" aria-label="<?php esc_attr_e( 'Paginação', 'korun' ); ?>">
				<?php echo paginate_links(); ?>
			</nav>

		<?php else : ?>
			<p><?php esc_html_e( 'Nenhum conteúdo encontrado.', 'korun' ); ?></p>
		<?php endif; ?>

	</div>
</div>

<?php
get_footer();
