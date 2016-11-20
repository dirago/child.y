<?php
session_start();
if (!isset($_SESSION['id'])) {
    header('location: index.php');
    exit();
}

    include_once 'src/head.inc.php';

    include_once 'src/header.inc.php';

    include_once 'src/main_scoring.php';

    include_once 'src/footer.inc.php' ?>
