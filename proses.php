<?php
include "koneksi.php";

$nama = "";
$email = "";
$pesan = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = htmlspecialchars($_POST["nama"]);
  $email = htmlspecialchars($_POST["email"]);

  if (empty($nama)) {
    $pesan = "Nama tidak boleh kosong!";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $pesan = "Email tidak valid!";
  } else {

    // 🔥 Simpan ke database
    $query = "INSERT INTO students (nama, email) VALUES ('$nama', '$email')";

    if (mysqli_query($conn, $query)) {
      $pesan = "Data berhasil disimpan ke database!";
    } else {
      $pesan = "Gagal menyimpan data!";
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Hasil</title>
</head>
<body>

<h2>Hasil Input</h2>

<p>Nama: <?= $nama; ?></p>
<p>Email: <?= $email; ?></p>
<p><?= $pesan; ?></p>

<a href="index.html">Kembali</a>

</body>
</html>