 <?php
/**
 * php file part for contact form validate
 *
 * @package Korna - One page Portfolio Creative Template
 */
 
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];		
	$from="From: $name<$email>\r\nReturn-path: $email";
	$subject="Korna - One page Portfolio Creative Template";
	mail("your@email_here", $subject, $message, $from)
?>
   