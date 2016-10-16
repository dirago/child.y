<header>
    <object data="img/logo_opt.svg" height="80" type="image/svg+xml" class="logo">
    <!-- S'affiche seulement si le browser supporte SVG -->
    <!-- Sinon, le PNG le remplacera -->
    <img src="img/logo.png" alt="Logo Childy" />
    </object>
    <div class="log-panel">
        <a href="#" class="log-panel--item" data-text="Connexion">Connexion</a>
        <a href="#" class="log-panel--item" data-text="Inscription">Inscription</a>
    </div>
    <script type="text/javascript">
        var cxnBox = document.getElementsByClassName('log-panel--item')[0];
        var insBox = document.getElementsByClassName('log-panel--item')[1];
        cxnBox.addEventListener('mouseover', function(e){
            e.target.innerText = "→";
        });
        cxnBox.addEventListener('mouseout', function(e){
            e.target.innerText = e.target.dataset.text;
        });
        insBox.addEventListener('mouseover', function(e){
            e.target.innerText = "+";
        });
        insBox.addEventListener('mouseout', function(e){
            e.target.innerText = e.target.dataset.text;
        });
    </script>
</header>
