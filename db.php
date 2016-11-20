<?php
// Mes infos DB
$host='mysql.hostinger.fr';
$port='';
$db_name='chldy;charset=utf8';
$user='admin';
$pw='childy';

try {
    // on ouvre une connexion à la base de données
    $pdo = new PDO('mysql:host='.$host.';port='.$port.';dbname='.$db_name, $user, $pw);
} catch (Exception $excp) {
    die('Erreur : ' . $excp->getMessage());
}

?>
