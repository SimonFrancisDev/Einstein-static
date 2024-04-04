<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


if($_SERVER["REQUEST_METHOD"] == "POST") {
    //retrievig form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // data connection

    $host = '10.10.10.13';
    $dbusername = 'root';
    $dbpassword = '';
    $dbname = 'form';

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if($conn->connect_error) {
        die("Connection Failed: ". $conn->connect_error);
    }

    // Validate login authenthication
     
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    $result = $conn->query($query);

    if($result->num_rows == 1) {
        // login success
        header("Location: home.html");
        exit();
    }
     else {
        echo "Invalid username or email";
        //login failed
        header("Location: error.html");
        exit();
     }

     $conn->close();

}


?>