<?php
require_once 'koneksi.php';

$id = $_GET['id'];

$sql = "DELETE FROM todolist WHERE id = :id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $id);
$stmt->execute();

header("Location: display_task.php");
exit();
?>
