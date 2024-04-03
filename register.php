<?php

$DATABASE_HOST = "localhost";
$DATABASE_USER = "root";
$DATABASE_PASS = "";
$DATABASE_NAME = "form";

$conn = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if(mysqli_connect_error()) {
    exit("Error connecting to the database" .mysqli_connect_error());
}

if(!isset($_POST['username'], $_POST['password'], $_POST['email'])) {
    exit('Empty Field(s)');
}
// checking if the variables fields  are empty
if(empty($_POST['username'] || empty($_POST['password']) || empty($_POST['email']))) {
    exit('Values Empty');
}

// checking if the username exists
if($stat = $conn->prepare('SELECT id password from users WHERE username = ?', )) {
    $stat->bind_param('s', $_POST['username']);
    $stat->execute();
    $stat->store_result();

    if($stat->num_rows >0) {
        echo "Username Already Exists Try
        Please Try Again"; 
        header("LOCATION:", "register.html");
    } else {
        if($stat = $conn->prepare('INSERT INTO users (username, password, email) VALUES (?, ?, ?)')) {
            $password = $_POST['password'];
           $hashed_password = password_hash($password, PASSWORD_DEFAULT);// this fetch the details of the passowrd field
            $stat->bind_param('sss', $_POST['username'], $password, $_POST['email']);
            $stat->execute();
            echo " Sucessfully Registered";
            header("LOCATION: home.html");
        } 
        else {
            echo "Error Occured
            Please Try again";
        }
    }

    $stat->close();
}
else {
    echo 'Error Occurred
    Please Try Again';
}
$conn->close();
?>