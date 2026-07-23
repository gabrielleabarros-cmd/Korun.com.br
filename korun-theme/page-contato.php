<?php
/**
 * Página interna: Contato (com formulário enviado via wp_mail).
 *
 * @package Korun
 */

get_header();

$korun_enviado = isset( $_GET['enviado'] ) ? sanitize_key( wp_unslash( $_GET['enviado'] ) ) : '';
?>

<section class="k-page-hero">
	<canvas class="k-page-hero__canvas" data-korun-particles data-korun-particles-density="0.4" data-korun-particles-fade-left aria-hidden="true"></canvas>
	<div class="k-container">
		<span class="k-eyebrow"><?php esc_html_e( 'Contato', 'korun' ); ?></span>
		<h1 class="k-page-hero__title"><?php esc_html_e( 'Vamos conversar sobre o seu cenário.', 'korun' ); ?></h1>
		<p class="k-page-hero__lead"><?php esc_html_e( 'Conte para a gente o que você precisa decidir. Respondemos em até um dia útil com os próximos passos.', 'korun' ); ?></p>
	</div>
</section>

<section class="k-contact">
	<div class="k-container k-contact__grid">

		<div class="k-info-list">

			<div class="k-info-card">
				<span class="k-info-card__icon">
					<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M27 21.2v3.6a2.4 2.4 0 0 1-2.6 2.4A25.4 25.4 0 0 1 2.8 5.6 2.4 2.4 0 0 1 5.2 3h3.6a2.4 2.4 0 0 1 2.4 2.1c.15 1.13.43 2.24.83 3.3a2.4 2.4 0 0 1-.54 2.53l-1.53 1.53a19.2 19.2 0 0 0 7.56 7.56l1.53-1.53a2.4 2.4 0 0 1 2.53-.54c1.06.4 2.17.68 3.3.83A2.4 2.4 0 0 1 27 21.2z" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<h3><?php esc_html_e( 'Telefone / WhatsApp', 'korun' ); ?></h3>
					<p><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', korun_mod( 'telefone' ) ) ); ?>"><?php echo esc_html( korun_mod( 'telefone' ) ); ?></a></p>
				</div>
			</div>

			<div class="k-info-card">
				<span class="k-info-card__icon">
					<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="6" width="24" height="18" rx="3"/><path d="M4 8l11 8 11-8" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<h3><?php esc_html_e( 'E-mail', 'korun' ); ?></h3>
					<p><a href="mailto:<?php echo esc_attr( korun_mod( 'email' ) ); ?>"><?php echo esc_html( korun_mod( 'email' ) ); ?></a></p>
				</div>
			</div>

			<div class="k-info-card">
				<span class="k-info-card__icon">
					<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 27s9-8.5 9-15a9 9 0 1 0-18 0c0 6.5 9 15 9 15z"/><circle cx="15" cy="12" r="3.2"/></svg>
				</span>
				<div>
					<h3><?php esc_html_e( 'Endereço', 'korun' ); ?></h3>
					<p><?php echo esc_html( korun_mod( 'endereco' ) ); ?></p>
				</div>
			</div>

			<div class="k-info-card">
				<span class="k-info-card__icon">
					<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="15" cy="15" r="11.5"/><path d="M15 8.5V15l4.8 3" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div>
					<h3><?php esc_html_e( 'Horário', 'korun' ); ?></h3>
					<p><?php esc_html_e( 'Segunda a sexta, 8h às 18h', 'korun' ); ?><br><small style="color:var(--k-text-muted);"><?php esc_html_e( 'Korun Crisis: plantão 24/7 para clientes', 'korun' ); ?></small></p>
				</div>
			</div>

		</div>

		<div class="k-form-box">

			<?php if ( 'ok' === $korun_enviado ) : ?>
				<div class="k-notice k-notice--ok"><?php esc_html_e( 'Mensagem enviada com sucesso! Retornaremos em até um dia útil.', 'korun' ); ?></div>
			<?php elseif ( 'erro' === $korun_enviado ) : ?>
				<div class="k-notice k-notice--erro"><?php esc_html_e( 'Não foi possível enviar sua mensagem. Verifique os campos e tente novamente, ou escreva direto para o nosso e-mail.', 'korun' ); ?></div>
			<?php endif; ?>

			<form class="k-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<input type="hidden" name="action" value="korun_contato">
				<?php wp_nonce_field( 'korun_contato', 'korun_nonce' ); ?>

				<div class="k-form__row">
					<div>
						<label for="k-nome"><?php esc_html_e( 'Nome', 'korun' ); ?> *</label>
						<input id="k-nome" name="nome" type="text" required autocomplete="name">
					</div>
					<div>
						<label for="k-email"><?php esc_html_e( 'E-mail', 'korun' ); ?> *</label>
						<input id="k-email" name="email" type="email" required autocomplete="email">
					</div>
				</div>

				<div class="k-form__row">
					<div>
						<label for="k-telefone"><?php esc_html_e( 'Telefone / WhatsApp', 'korun' ); ?></label>
						<input id="k-telefone" name="telefone" type="tel" autocomplete="tel">
					</div>
					<div>
						<label for="k-org"><?php esc_html_e( 'Organização', 'korun' ); ?></label>
						<input id="k-org" name="organizacao" type="text" autocomplete="organization">
					</div>
				</div>

				<div>
					<label for="k-msg"><?php esc_html_e( 'Como podemos ajudar?', 'korun' ); ?> *</label>
					<textarea id="k-msg" name="mensagem" required></textarea>
				</div>

				<div>
					<button type="submit" class="k-btn k-btn--primary">
						<?php esc_html_e( 'Enviar mensagem', 'korun' ); ?>
						<?php korun_arrow_icon(); ?>
					</button>
				</div>
			</form>

		</div>

	</div>
</section>

<?php
get_footer();
