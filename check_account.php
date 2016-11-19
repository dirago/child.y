<?php
include_once 'db.php';

if (isset($_POST['mail']) && isset($_POST['password'])) {
    $mail = $_POST['mail'];
    $password = sha1($_POST['password']);

    $sql = "SELECT * FROM parents WHERE mail=:mail AND password=:password";

    $request = $pdo->prepare($sql);
    $request->bindParam(':mail', $mail, PDO::PARAM_STR);
    $request->bindParam(':password', $password, PDO::PARAM_STR);
    $request->execute();
    $row_count = $request->rowCount();
    if ($row_count == 1){
        session_start();
        $_SESSION['id'] = $request->fetch()['id_parent'];
        header('location: scoring.php');
    } else {
        header('location: index.php');
    }
}

 ?>
