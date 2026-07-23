<?php
/**
 * Main template — the entire site is a React SPA mounted on #root.
 *
 * @package Korun_Intelligence
 */

get_header();
?>

<div id="root"></div>

<noscript>
    <div style="max-width: 640px; margin: 4rem auto; padding: 2rem; font-family: 'Inter', sans-serif; color: #0A1C2F; text-align: center;">
        <h1>Korun — Inteligência Territorial &amp; Ciência Comportamental</h1>
        <p>Este site requer JavaScript habilitado. Por favor, ative o JavaScript no seu navegador.</p>
    </div>
</noscript>

<?php
get_footer();
