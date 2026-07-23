/**
 * Korun Inteligência — interações do tema.
 * Menu mobile + animação de partículas (hero e CTA).
 */
(function () {
	'use strict';

	/* ------------------------------------------------------------------
	 * Menu mobile
	 * ------------------------------------------------------------------ */
	var toggle = document.querySelector('.k-menu-toggle');
	var nav = document.getElementById('k-nav');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			document.body.classList.toggle('k-menu-open', open);
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});

		nav.addEventListener('click', function (e) {
			if (e.target.closest('a')) {
				nav.classList.remove('is-open');
				document.body.classList.remove('k-menu-open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	/* ------------------------------------------------------------------
	 * Partículas — malha de pontos em ondas, com acentos azuis e laranja
	 * ------------------------------------------------------------------ */
	var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var lightTheme = document.body.classList.contains('k-light');

	function initParticles(canvas) {
		var ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}

		var density = parseFloat(canvas.getAttribute('data-korun-particles-density')) || 1;
		var fadeLeft = canvas.hasAttribute('data-korun-particles-fade-left');
		var dpr = Math.min(window.devicePixelRatio || 1, 2);
		var width = 0;
		var height = 0;
		var points = [];
		var rafId = null;
		var t = 0;

		function pickColor() {
			var r = Math.random();
			if (r < 0.1) { return lightTheme ? '#2555FF' : '#4d78ff'; } // azul
			if (r < 0.16) { return '#FF5A1F'; }                          // laranja
			if (r < 0.5) { return lightTheme ? '#b9b9b4' : '#8a8a85'; } // cinza
			return lightTheme ? '#55544e' : '#e8e6df';                   // contraste
		}

		function build() {
			var rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			points = [];
			var gapX = Math.max(14, 18 / density);
			var rows = Math.round(16 * density) + 6;
			var cols = Math.ceil(width / gapX) + 2;

			for (var j = 0; j < rows; j++) {
				for (var i = 0; i < cols; i++) {
					var x = i * gapX + (Math.random() - 0.5) * gapX * 0.5;
					var fade = 1;
					if (fadeLeft) {
						// Concentra a malha no lado direito do canvas.
						fade = Math.min(1, Math.max(0, (x / width - 0.32) / 0.28));
						if (fade <= 0.02) { continue; }
					}
					points.push({
						x: x,
						row: j / rows,
						r: 0.6 + Math.random() * 1.5,
						color: pickColor(),
						phase: Math.random() * Math.PI * 2,
						speed: 0.5 + Math.random() * 0.7,
						fade: fade,
						jitter: (Math.random() - 0.5) * 10
					});
				}
			}
		}

		function pointY(p) {
			// Cada linha da malha segue duas ondas senoidais sobrepostas,
			// formando o "tecido" ondulado do design.
			var base = height * (0.2 + p.row * 0.62);
			var wave1 = Math.sin(p.x * 0.006 + t * p.speed + p.phase * 0.15) * height * 0.075;
			var wave2 = Math.sin(p.x * 0.016 - t * p.speed * 1.6 + p.row * 5) * height * 0.035;
			return base + wave1 + wave2 + p.jitter;
		}

		function draw() {
			ctx.clearRect(0, 0, width, height);
			t += 0.01;

			for (var k = 0; k < points.length; k++) {
				var p = points[k];
				var pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * p.speed * 3 + p.phase));

				ctx.globalAlpha = pulse * 0.8 * p.fade;
				ctx.fillStyle = p.color;
				ctx.beginPath();
				ctx.arc(p.x, pointY(p), p.r, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;

			rafId = window.requestAnimationFrame(draw);
		}

		function start() {
			build();
			if (reducedMotion) {
				// Sem animação: desenha um único quadro estático.
				t = 1;
				ctx.clearRect(0, 0, width, height);
				for (var k = 0; k < points.length; k++) {
					var p = points[k];
					ctx.globalAlpha = 0.55 * p.fade;
					ctx.fillStyle = p.color;
					ctx.beginPath();
					ctx.arc(p.x, pointY(p), p.r, 0, Math.PI * 2);
					ctx.fill();
				}
				ctx.globalAlpha = 1;
				return;
			}
			if (rafId) {
				window.cancelAnimationFrame(rafId);
			}
			draw();
		}

		var resizeTimer;
		window.addEventListener('resize', function () {
			window.clearTimeout(resizeTimer);
			resizeTimer = window.setTimeout(start, 180);
		});

		// Pausa a animação quando o canvas sai da tela.
		if ('IntersectionObserver' in window && !reducedMotion) {
			var observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						if (!rafId) { draw(); }
					} else if (rafId) {
						window.cancelAnimationFrame(rafId);
						rafId = null;
					}
				});
			}, { threshold: 0 });
			observer.observe(canvas);
		}

		start();
	}

	document.querySelectorAll('[data-korun-particles]').forEach(initParticles);
})();
