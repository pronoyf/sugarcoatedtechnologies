<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'pronoyfuad68@gmail.com'

$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".
              "User Email:  $vistor_email.\n".
              "Subject: $subject. \n".
              "User Message: $Vistor_email. \n";

$to = 'info@sugarcoatedtech.com';

$headers = "From: $email_from \r\n";

$headers  .= "Reply-To: $visitor_email  \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>
