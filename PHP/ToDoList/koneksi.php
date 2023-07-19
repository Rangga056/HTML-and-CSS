
<?php
// Koneksi ke database
$host = 'localhost';
$db = 'todolistdb';
$user = 'root';
$pass = '';
$conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

  $koneksi = new mysqli($host, $user, $pass, $db);

if ($koneksi -> connect_error) {
  die("<p class='connection'>Connection Status: <span class='connection-disconnected'>Disconnected</span></p>". $koneksi->connect_error);
}
echo "<p class='connection'>Connection Status: <span class='connection-connected'>Connected</span></p>";
?>
