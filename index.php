<!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!DOCTYPE html>

<html lang="fr" xmlns:fb="http://ogp.me/ns/fb#">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta property="og:title" content="Child.y | Assistant parental" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.raphaeldirago.com/Childy" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="Gérez au jour le jour le comportement de votre
        enfant grâce à une plateforme simple, ludique et surtout pédagogique">
    <title>Child.y | Assistant parental journalier</title>
    <link rel="stylesheet" href="css/style.min.css">
    <script src="https://use.fontawesome.com/982a8f46ca.js"></script>
</head>

<body>

    <header>
        <object data="img/logo_opt.svg" height="80" type="image/svg+xml" class="logo">
            <!-- S'affiche seulement si le browser supporte SVG -->
            <!-- Sinon, le PNG le remplacera -->
            <img src="img/logo.png" alt="Logo Childy" />
        </object>
        <section class="subtitle">
            <p>Votre assistant quotidien pour gérer le comportement de votre enfant !</p>
        </section>
        <div class="logged">
            <div class="connected-person">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>PAPA</span>
            </div>
            <div class="connected-person">
                <i class="fa fa-child" aria-hidden="true"></i>
                <span>SACHA</span>
            </div>
        </div>
    </header>

    <main>
        <section class="demo-wrapper">
            <article class="responsability-row">
                <aside class="responsability-text">Je range</aside>
                <aside class="responsability-smile">
                    <?php include_once 'src/svg_tidy.php' ?>
                </aside>
            </article>
            <article class="responsability-row">
                <aside class="responsability-text">J'obéis</aside>
                <aside class="responsability-smile">
                    <?php include_once 'src/svg_obey.php' ?>
                </aside>
            </article>
            <article class="responsability-row">
                <aside class="responsability-text">Je suis poli</aside>
                <aside class="responsability-smile">
                    <?php include_once 'src/svg_courtesy.php' ?>
                </aside>
            </article>
            <article class="responsability-row">
                <aside class="responsability-text">À l'école</aside>
                <aside class="responsability-smile">
                    <?php include_once 'src/svg_school.php' ?>
                </aside>
            </article>
            <article class="responsability-row">
                <aside class="responsability-text">Je partage</aside>
                <aside class="responsability-smile">
                    <?php include_once 'src/svg_share.php' ?>
                </aside>
            </article>
            <div id="submit-btn" class="submit-data">
                ENVOYER
            </div>
        </section>
    </main>

    <footer>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.bundle.min.js" charset="utf-8"></script>
    <script src="js/compiled/chart.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/compiled/app.js"></script>
    <script type="text/javascript" src="js/compiled/parent.js"></script>
    <script type="text/javascript" src="js/compiled/child.js"></script>
    <script src="js/compiled/note.js" charset="utf-8"></script>
</body>

</html>
