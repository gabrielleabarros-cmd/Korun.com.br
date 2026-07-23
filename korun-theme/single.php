<?php
/**
 * Template de post individual.
 *
 * @package Korun
 */

get_header();
?>

<div class="k-content k-content--narrow">
	<div class="k-container">

		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<p class="k-post-card__meta"><?php echo esc_html( get_the_date() ); ?></p>
				<h1 class="k-page-title"><?php the_title(); ?></h1>

				<?php if ( has_post_thumbnail() ) : ?>
					<?php the_post_thumbnail( 'large', array( 'style' => 'border-radius:10px;margin-bottom:32px;' ) ); ?>
				<?php endif; ?>

				<div class="k-entry">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; ?>

	</div>
</div>

<?php
get_footer();
