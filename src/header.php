<header>
    <object data="img/logo_opt.svg" height="80" type="image/svg+xml" class="logo">
        <!-- S'affiche seulement si le browser supporte SVG -->
        <!-- Sinon, le PNG le remplacera -->
        <img src="img/logo.png" alt="Logo Childy" />
    </object>
    <section class="subtitle">
        <p>Votre assistant quotidien pour gérer le comportement de votre enfant !</p>
    </section>
    <?php include_once 'check_user.php' ?>
    <div class='logged'>
        <div class='connected-person'>
            <i class='fa fa-users' aria-hidden='true'></i>
            <span id="relative"><?php echo $user ?></span>
        </div>
        <div class='connected-person'>
            <i class='fa fa-child' aria-hidden='true'></i>
            <span id="child"><?php echo $_SESSION['id_child0'] ?></span>
        </div>
    </div>
    <a class="disconnect" href="kill.php">Se déconnecter</a>
</header>
