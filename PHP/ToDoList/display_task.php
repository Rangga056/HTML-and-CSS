<?php
require_once 'koneksi.php';

// Fungsi untuk mendapatkan semua tugas dari database
function getTasks($conn) {
  $sql = "SELECT * FROM todolist";
  $stmt = $conn->query($sql);
  return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Mendapatkan semua tugas dari database
$tasks = getTasks($conn);

// Menghitung nomor urut
$counter = 1;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="styles/index.css">
</head>
<body>
    
    <h1>Todo List</h1>
<?php if (count($tasks) > 0): ?>
    <div class="head">
        <div class="column">NO</div>
        <div class="column">Task</div>
        <div class="column">Due Date</div>
        <div class="column">Priority</div>
        <div class="column">Status</div>
        <div class="column">Actions</div>
    </div>
    <div class="task">
        <?php foreach ($tasks as $task): ?>
            <div class="task-number"><?php echo "<p>".$counter++."</p>" ; ?></div>
            <div class="task-name"><?php echo "<p>".$task['task']."</p>" ; ?></div>
            <div class="task-due"><?php echo "<p>".$task['due_date']."</p>" ; ?></div>
            <div class="task-priority"><?php echo "<p>".$task['priority']."</p>" ; ?></div>
            <div class="task-status"><?php echo "<p>".$task['status']."</p>" ; ?></div>
            <div class="ctas">
                <a class="edit ctas-button" href="edit_task.php?id=<?php echo  $task['id']; ?>">Edit</a>
                <a class="delete ctas-button" href="delete_task.php?id=<?php echo  $task['id']; ?>">Delete</a>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="create-btn">
        
        <a href="create_task.php" class="create-task">Create Task</a>
    </div>

<?php else: ?>
    <p>No tasks available.</p>
<?php endif; ?>

</body>
</html>
