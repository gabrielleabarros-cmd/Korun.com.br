<?php
/**
 * Template de página estática.
 *
 * @package Korun
 */

get_header();
?>

<div class="k-content k-content--narrow">
	<div class="k-container">

		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<h1 class="k-page-title"><?php the_title(); ?></h1>
				<div class="k-entry">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; ?>

	</div>
</div>

<?php
get_footer();
