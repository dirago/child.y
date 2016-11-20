<?php session_start();
include_once 'src/head_index.inc.php';
?>

    <header>
        <div class="logo">
            <object data="img/logo-index.svg" height="80" type="image/svg+xml" class="logo">
                <!-- S'affiche seulement si le browser supporte SVG -->
                <!-- Sinon, le PNG le remplacera -->
                <img src="img/logo.png" alt="Logo Childy" />
            </object>
            <section class="logo-subtitle">
                <h3>Assistant parental || Comportement de l'enfant</h3>
            </section>
        </div>
        <div class="log">
            <div>
                <a id="login">Connexion</a>
            </div>
            <div>
                <a id="signin">Inscription</a>
            </div>
        </div>
    </header>

    <?php include_once 'src/footer_index.inc.php'; ?>
