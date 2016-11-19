<?php
session_start();
include_once 'db.php';

if (isset($_POST['mail']) && isset($_POST['password']) && isset($_POST['lastname']) && isset($_POST['nbChilds'])) {
    $nbChilds = $_POST['nbChilds'];
    $childsNames = array();
    for ($i=1; $i <= $nbChilds; $i++) {
        if (empty($_POST['nameChild'.$i]) === true) {
            header('location: index.php');
            die();
        } else {
            array_push($childsNames, $_POST['nameChild'.$i]);
        }
    }
    $mail = $_POST['mail'];
    $password = sha1($_POST['password']);
    $lastname = $_POST['lastname'];

    $sql = "INSERT INTO parents (lastname, password, mail) VALUES (:lastname, :password, :mail)";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':lastname', $lastname, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);
    $stmt->bindParam(':mail', $mail, PDO::PARAM_STR);
    $success = $stmt->execute();
    $parentId = $pdo->lastInsertId();

    if ($success) {

        for ($i=0; $i < $nbChilds; $i++) {
            $name = $childsNames[$i];
            $sql2 = "INSERT INTO childs (id_parent, name) VALUES (:parent, :name)";
            $stmt = $pdo->prepare($sql2);
            $stmt->bindParam(':parent', $parentId, PDO::PARAM_INT);
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $success2 = $stmt->execute();
        }
        $stmt->closeCursor();
        if ($success2) {
            $_SESSION['id'] = $parentId;
            header('location: scoring.php');
            exit();
        } else {
            header('location: index.php');
            exit();
        }
    }
}
?>
