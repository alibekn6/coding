<?php

$name = $_POST['name'];
$number = $_POST['number'];

$data = "$name, $number\n";

$file = fopen("data.txt", "a");
fwrite($file, $data);
fclose($file);

echo "Data saved successfully";

?>
