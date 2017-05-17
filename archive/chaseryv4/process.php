<?php
	$to = "ryan@chasery.com";
	$from = $_REQUEST['email'];
	$name = $_REQUEST['fname'];
	$headers = "From: $from";
	$subject = $_REQUEST['subject'];
	$fields = array();
	$fields{"fname"} = "First Name";
	$fields{"lname"} = "Last Name";
	$fields{"email"} = "E-mail";
	$fields{"phone"} = "Phone";
	$fields{"message"} = "Message";
	$body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){ $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
	if(mail($to, $subject, $body, $headers)){
		echo "Your message was sent successfully! I will be in touch as soon as I can.";
	} else {
		echo "Something went wrong, try refreshing and submitting the form again.";
	}
?> 