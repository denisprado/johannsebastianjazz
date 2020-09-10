<?php
// ---- send_email.php
// ---------------------------------------------------------
if (isset($_REQUEST['email'])) { // ensuring a receiver address is given!
  // ---- User settings -----------------------------------
    if (date_default_timezone_get != 'Europe/Madrid
    ') {
        date_default_timezone_set('Europe/Madrid
        ');
    }
    // ---- /User settings ----------------------------------
    // ---- Email information from contact form
    $from_name    = $_REQUEST['name'];
    $from_email   = $_REQUEST['email'];
    $from_message = $_REQUEST['message'];
  //if (date_default_timezone_get != 'Europe/Berlin') {date_default_timezone_set('Europe/Berlin');}
    $to_name  = 'Alexis Delgado';     // Don't forget to change your name ...
    $to_email = 'info@johannsebastianjazz.es'; // ... and email address!
    $subject  = "[Mensage de ".$from_name." enviada por el sitio johannsebastianjazz.es]";
  // ---- /Email information from contact form
    $date = date("d.M.Y");   // Date eMail was sent
    $time = date("H:i");     // Time eMail was sent
  // ---- Preparing the html message
    $message = $from_name.' <'.$from_email. '> wrote on your homepage: "'.htmlentities(strip_tags($from_message, '<p><a><br/>'), ENT_QUOTES, 'UTF-8').'"';
  // ---- Preparing the message header
    $to   = $to_name   ? $to_email   : '"'.mb_encode_mimeheader($to_name).'" <'.$to_email.'>';
    $from = $from_email ? $from_email : '"'.mb_encode_mimeheader($from_email).'" <'.$from_email.'>';
    $headers = array (
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset="UTF-8"',
    //'Content-Transfer-Encoding: quoted-printable', // Try if "8bit" doesn't work, only!
    'Content-Transfer-Encoding: 8bit',
    'Return-Path: '.$from_email.' <'.$from_email.'>',
    'Date: '.date('r', $_SERVER['REQUEST_TIME']),
    'Message-ID: <'.$_SERVER['REQUEST_TIME'].md5($_SERVER['REQUEST_TIME']).'@'.$_SERVER['SERVER_NAME'].'>',
    'From: '.$from_email.' <'.$from_email.'>',
    'Cc: '."Denis <denisforigo@gmail.com>",
    'Sender: '.$from_email.' <'.$from_email.'>',
    'Reply-To: '.$from_name.' <'.$from_email.'>',
    'X-Mailer: PHP v'.phpversion(),
    'X-Originating-IP: '.$_SERVER['SERVER_ADDR'],
    );
  // ---- sending the email
    if (mail($to, $subject, $message, implode(chr(13), $headers))) {
        echo 1;
    } // ---- Tell the calling JavaScript, the email was sent.
    else {
        echo 0;
    } // ---- Or something went wrong.
}
