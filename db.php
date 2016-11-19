<?php
// Mes infos DB
$host='localhost';
$port='8889';
$db_name='childy;charset=utf8';
$user='root';
$pw='root';

try {
    // on ouvre une connexion à la base de données
    $pdo = new PDO('mysql:host='.$host.';port='.$port.';dbname='.$db_name, $user, $pw);
} catch (Exception $excp) {
    die('Erreur : ' . $excp->getMessage());
}

?>
