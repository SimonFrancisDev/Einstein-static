<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    //retrievig form data
    $username = $_POST['username'];
    $report = $_POST['report'];

    // data connection

    $host = 'localhost';
    $dbusername = 'root';
    $dbpassword = '';
    $dbname = 'form';

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if($conn->connect_error) {
        die("Connection Failed: ". $conn->connect_error);
    }

    // Validate username authenthication
    $query = "SELECT * FROM users WHERE username = '$username'";

    $result = $conn->query($query);

    if($result->num_rows == 1) {
        $query2 = "UPDATE users SET report = '$report' WHERE username = '$username'";
        $result2 = $conn->query($query2);

        if(mysqli_affected_rows($conn) > 0) {
            echo "Thanks for the feedback";
        // login success
        header("Location: home.html");
        exit();
        }
    }
     $conn->close();
}
?>