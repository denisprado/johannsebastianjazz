<?php
if (isset($_POST)){

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];

  $content="From: $name \nEmail: $email \nMessage: $message";
  $recipient = "denisforigo@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  
  exit();
}
?>
            