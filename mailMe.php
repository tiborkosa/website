<?php
    if(isset($_POST['submit'])){
        $to = "tibork.web@gmail.com"; // this is your Email address
        $first_name = $_POST['firstname'];
        $last_name = $_POST['lastname'];
        $message = $_POST['message'];
        $subject = "Form submission";
        $messageToMe = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $message;
        
        mail($to,$subject,$messageToMe);
        echo "Mail Sent. Thank you " . $first_name . ".";
    }
    ?>

<!DOCTYPE html>
<head>
<title>Message</title>
</head>
<body>


</body>
</html>