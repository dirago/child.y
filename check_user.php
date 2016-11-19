<?php
include_once 'db.php';

$id_parent = $_SESSION['id'];

$sql = "SELECT lastname FROM parents WHERE id_parent = $id_parent";

$resultats = $pdo->query($sql);
$resultats->setFetchMode(PDO::FETCH_OBJ);
while ($resultat = $resultats->fetch()) {
    $user = $resultat->lastname;
}

$sql2 = "SELECT name FROM childs WHERE id_parent = $id_parent";
$resultats = $pdo->query($sql2);
$resultats->setFetchMode(PDO::FETCH_OBJ);
$user_childs = array();
while ($resultat = $resultats->fetch()) {
    array_push($user_childs, $resultat->name);
}
for ($i=0; $i < count($user_childs); $i++) {
    $_SESSION['id_child'.$i] = $user_childs[$i];
}
$resultats->closeCursor();

?>
