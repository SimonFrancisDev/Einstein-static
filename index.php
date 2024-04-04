<?php
    include "login.php";
?>
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles/index.css">
            <title>Login Page</title>
        </head>
    <body>
        <div class="login-container">
            <div class="title-logo-div">
                <h2 class="e1">E</h2>
                <h2 class="e2">E</h2>
                <h2 class="title-einstein">instien's</h2>
                <h2 class="title-engine">ngine</h2>
            </div>

            <div>
                <h3 class="login">Login</h3>
            </div>

            <div class="form-container">
                <form action="login.php" method="POST">  
                    <input 
                        type="text" 
                        name="username" 
                        class="form-control" 
                        placeholder="Enter Username" 
                    />  <br />
                    <input 
                        type="password" 
                        name="password" 
                        class="form-control" 
                        placeholder="Enter Password" 
                    /> <br />                      
                    <input type="submit" value="Login" class="btn btn-success">
                </div>

            <div class="forgotten-password-div">
                 <a class="forgotten-password-link" href="">Forgot password?</a>
            </div>

            <div class="or-div">
                <p class="or">or</p>
                <p class="line1">__________</p>
                <p class="line2">__________</p>
            </div>

            <div class=create-new-account-div>
                <a class="register-link" href="register.html">Create New Account</a>
            </div>
     
            <div class="base-links">
                <a class="contact" href="contact.html">Contact</a>
                <a class="about" href="about.html">About</a>
                <a class="help" href="help.html">Help</a>
            </div>
            <div class="page-info">
                <h2 class="base-info">Einstein_Engine@Cisco-2024(EEA-C24)</h2>
            </div>
        </div>
    </body>
</html>