<?php
require_once 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $task = $_POST['task'];
    $due_date = $_POST['due_date'];
    $priority = $_POST['priority'];
    $status = $_POST['status'];

    $sql = "INSERT INTO todolist (task, due_date, priority, status) VALUES (:task, :due_date, :priority, :status)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':task', $task);
    $stmt->bindParam(':due_date', $due_date);
    $stmt->bindParam(':priority', $priority);
    $stmt->bindParam(':status', $status);
    $stmt->execute();

    header("Location: display_task.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Create Task</title>
    <link rel="stylesheet" type="text/css" href="styles/index.css">

</head>
<body>
  <main class="main-create-task">
    <h1>Create Task</h1>
  
    <form class="create-task-form" method="POST" action="">
      <div class="form-element">
        <label for="task">Task:</label>
        <input placeholder="Task Name..." type="text" name="task" required><br>
      </div>  
  
        <div class="form-element">
          <label for="due_date">Due Date:</label>
          <input type="date" name="due_date"><br>
        </div>
  
        <div class="form-element">
          <label for="priority">Priority:</label>
          <input placeholder="Task Priority..." type="number" name="priority"><br>
        </div>
  
        <div class="form-element">
          <label for="status">Status:</label>
          <input placeholder="Task Status..." type="text" name="status"><br>
        </div>
  
      <button class="create-submit" type="submit">Create Task</button>
    </form>
  </main>
</body>
</html>
