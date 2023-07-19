<?php
require_once 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $task = $_POST['task'];
    $due_date = $_POST['due_date'];
    $priority = $_POST['priority'];
    $status = $_POST['status'];

    $sql = "UPDATE todolist SET task = :task, due_date = :due_date, priority = :priority, status = :status WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':task', $task);
    $stmt->bindParam(':due_date', $due_date);
    $stmt->bindParam(':priority', $priority);
    $stmt->bindParam(':status', $status);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    header("Location: display_task.php");
    exit();
} else {
    $id = $_GET['id'];

    $sql = "SELECT * FROM todolist WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $task = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Task</title>
    <link rel="stylesheet" type="text/css" href="styles/index.css">
</head>
<body>
  <main class="main-edit-task">
    <h1>Edit Task</h1>
  
    <form class="edit-task-form" method="POST" action="">
      <input type="hidden" name="id" value="<?php echo $task['id']; ?>">

      <div class="form-element">
        <label for="task">Task:</label>
        <input type="text" name="task" value="<?php echo $task['task']; ?>" required><br>
      </div>
  
      <div class="form-element">
        <label for="due_date">Due Date:</label>
        <input type="date" name="due_date" value="<?php echo $task['due_date']; ?>"><br>
      </div>
  
      <div class="form-element">
        <label for="priority">Priority:</label>
        <input type="number" name="priority" value="<?php echo $task['priority']; ?>"><br>
      </div>
  
      <div class="form-element">
        <label for="status">Status:</label>
        <input type="text" name="status" value="<?php echo $task['status']; ?>"><br>
      </div>
  
      <button class="edit-submit" type="submit">Update</button>
    </form>
  </main>
</body>
</html>
