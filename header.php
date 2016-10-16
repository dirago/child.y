<header>
    <a href="https://github.com/dirago/child.y"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"></a>
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
