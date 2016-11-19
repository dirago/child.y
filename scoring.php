<?php
session_start();
if (!isset($_SESSION['id'])) {
    header('location: index.php');
    exit();
} ?>
<!--[if lt IE 9]>
<script src='//html5shim.googlecode.com/svn/trunk/html5.js'></script>
<![endif]-->
<!DOCTYPE html>

<html lang='fr' xmlns:fb='http://ogp.me/ns/fb#'>

<?php include_once 'src/head.php' ?>

<body>

    <?php include_once 'src/header.php' ?>

    <?php include_once 'src/main_scoring.php' ?>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.bundle.min.js' charset='utf-8'></script>
    <script src='js/compiled/chart.js' charset='utf-8'></script>
    <script type='text/javascript' src='js/compiled/family.js'></script>
    <script type='text/javascript' src='js/compiled/child.js'></script>
    <script type='text/javascript' src='js/compiled/note.js'></script>
    <script type='text/javascript' src='js/compiled/app.js'></script>
</body>

</html>
