<?php
include_once 'db.php';

$id_parent = $_SESSION['id'];

$sql = "SELECT lastname FROM parents WHERE id_parent = $id_parent";

$resultats = $pdo->query($sql);
$resultats->setFetchMode(PDO::FETCH_OBJ);
while ($resultat = $resultats->fetch()) {
    $user = $resultat->lastname;
}

$sql2 = "SELECT * FROM childs WHERE id_parent = $id_parent";
$resultats = $pdo->query($sql2);
$resultats->setFetchMode(PDO::FETCH_OBJ);
$user_childs = array();
while ($resultat = $resultats->fetch()) {
    array_push($user_childs, array('name' => $resultat->name, 'id' => $resultat->id_child));
}
for ($i=0; $i < count($user_childs); $i++) {
    $_SESSION['name_child'.$i] = $user_childs[$i]['name'];
    $_SESSION['id_child'.$i] = $user_childs[$i]['id'];
}
$_SESSION['nb_childs'] = count($user_childs);
$resultats->closeCursor();

?>
