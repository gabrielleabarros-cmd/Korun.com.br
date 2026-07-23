<?php
/**
 * Rodapé do tema.
 *
 * @package Korun
 */

$korun_home = esc_url( home_url( '/' ) );
?>
</main>

<footer id="contato" class="k-footer">
	<div class="k-container">

		<div class="k-footer__grid">

			<div class="k-footer__brand">
				<a class="k-logo" href="<?php echo $korun_home; ?>" rel="home">
					<?php
					if ( has_custom_logo() ) {
						the_custom_logo();
					} else {
						korun_logo_icon();
					}
					?>
					<span><?php echo esc_html( get_bloginfo( 'name' ) ?: 'korun' ); ?></span>
				</a>
				<p class="k-footer__desc"><?php esc_html_e( 'Inteligência que transforma sinais em decisão. Para governos, marcas e instituições que querem estar à frente.', 'korun' ); ?></p>
				<div class="k-footer__social">
					<a href="<?php echo esc_url( korun_mod( 'linkedin' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
					</a>
					<a href="<?php echo esc_url( korun_mod( 'instagram' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
					</a>
					<a href="<?php echo esc_url( korun_mod( 'youtube' ) ); ?>" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2s-.22-1.56-.9-2.24c-.86-.9-1.82-.9-2.26-.96C16.7 3.78 12 3.78 12 3.78h-.01s-4.7 0-7.84.22c-.44.05-1.4.06-2.26.96C1.21 5.64 1 7.2 1 7.2S.78 9.03.78 10.87v1.71C.78 14.42 1 16.25 1 16.25s.21 1.56.89 2.24c.86.9 1.99.87 2.5.97 1.81.17 7.61.22 7.61.22s4.71-.01 7.85-.23c.44-.05 1.4-.06 2.26-.96.68-.68.9-2.24.9-2.24s.21-1.83.21-3.67v-1.71C23.21 9.03 23 7.2 23 7.2zM9.68 14.85V8.47l6.06 3.2-6.06 3.18z"/></svg>
					</a>
				</div>
			</div>

			<div>
				<h3 class="k-footer__title"><?php esc_html_e( 'Soluções', 'korun' ); ?></h3>
				<ul>
					<li><a href="<?php echo $korun_home; ?>#solucoes"><?php esc_html_e( 'Korun Sprint', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#solucoes"><?php esc_html_e( 'Korun Radar', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#solucoes"><?php esc_html_e( 'Korun Crisis', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#solucoes"><?php esc_html_e( 'Korun Advisory', 'korun' ); ?></a></li>
				</ul>
			</div>

			<div>
				<h3 class="k-footer__title"><?php esc_html_e( 'Produtos', 'korun' ); ?></h3>
				<ul>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Korun Chat', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Power Ads Pro', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Plataforma Radar', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Relatórios', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Mapas de Risco', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#produtos"><?php esc_html_e( 'Alertas Inteligentes', 'korun' ); ?></a></li>
				</ul>
			</div>

			<div>
				<h3 class="k-footer__title"><?php esc_html_e( 'Recursos', 'korun' ); ?></h3>
				<ul>
					<li><a href="<?php echo $korun_home; ?>#insights"><?php esc_html_e( 'Insights', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#insights"><?php esc_html_e( 'Relatórios', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#insights"><?php esc_html_e( 'Blog', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#insights"><?php esc_html_e( 'Eventos', 'korun' ); ?></a></li>
				</ul>
			</div>

			<div>
				<h3 class="k-footer__title"><?php esc_html_e( 'Institucional', 'korun' ); ?></h3>
				<ul>
					<li><a href="<?php echo $korun_home; ?>#quem-somos"><?php esc_html_e( 'Quem Somos', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#como-funciona"><?php esc_html_e( 'Metodologia', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#para-quem"><?php esc_html_e( 'Cases', 'korun' ); ?></a></li>
					<li><a href="<?php echo $korun_home; ?>#contato"><?php esc_html_e( 'Carreiras', 'korun' ); ?></a></li>
				</ul>
			</div>

			<div class="k-footer__contact">
				<h3 class="k-footer__title"><?php esc_html_e( 'Contato', 'korun' ); ?></h3>
				<ul>
					<li><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', korun_mod( 'telefone' ) ) ); ?>"><?php echo esc_html( korun_mod( 'telefone' ) ); ?></a></li>
					<li><a href="mailto:<?php echo esc_attr( korun_mod( 'email' ) ); ?>"><?php echo esc_html( korun_mod( 'email' ) ); ?></a></li>
					<li><?php echo esc_html( korun_mod( 'endereco' ) ); ?></li>
				</ul>
				<a class="k-btn k-btn--outline" href="mailto:<?php echo esc_attr( korun_mod( 'email' ) ); ?>">
					<?php esc_html_e( 'Falar com a Korun', 'korun' ); ?>
					<?php korun_arrow_icon(); ?>
				</a>
			</div>

		</div>

		<div class="k-footer__bottom">
			<p>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php esc_html_e( 'Korun Inteligência. Todos os direitos reservados.', 'korun' ); ?></p>
			<div class="k-footer__legal">
				<a href="<?php echo $korun_home; ?>politica-de-privacidade/"><?php esc_html_e( 'Política de Privacidade', 'korun' ); ?></a>
				<span class="sep">|</span>
				<a href="<?php echo $korun_home; ?>termos-de-uso/"><?php esc_html_e( 'Termos de Uso', 'korun' ); ?></a>
			</div>
		</div>

	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
