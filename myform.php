<?php

    $name = $_POST['name'];

    $visitor_email = $_POST['email'];

    $subject = $_POST['subject'];

    $message = $_POST['message'];



    $email_subject = "$subject";

    $email_body = "User name: $name. \n".

                    "user email: $visitor_email. \n".

                    "software demo for $subject.\n".

                    "User message: $message. ";

    $to = "info@cubestoneconsulting.com";

    $headers = "from: $visitor_email";
    $headers = "from: $visitor_email \r\n";
    $headers = "reply-to: $visitor_email \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



    mail($to,$email_subject,$email_body,$headers);



    ?>