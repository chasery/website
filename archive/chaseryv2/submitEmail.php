<?

/************************
* Variables you can change
*************************/

$mailto = "ryan@chasery.com";
$cc = "";
$bcc = "";
$subject = "Questions or comments about chasery.com";
$vname = "Chasery.com enquiry";


/************************
* do not modify anything below unless you know PHP/HTML/XHTML
*************************/


$email = $_POST['formEmail'];

function validateEmail($email)
{
   if(eregi('^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,3})?(\.[a-zA-Z]{2,3})?$', $email))
	  return true;
   else
	  return false;
}


if((strlen($_POST['formName']) < 1 ) || (strlen($email) < 1 ) || (strlen($_POST['formComment']) < 1 ) || validateEmail($email) == FALSE){
	$emailerror .= '<dt>Error</dt>';

	if(strlen($_POST['formName']) < 1 ){
		$emailerror .= '<dd>Enter a <span>*</span>name</dd>';
	}
	if(validateEmail($email) == FALSE) {
		if(strlen($email) < 1 ){
			$emailerror .= '<dd>Enter a <span>*</span>eMail</dd>';
		}
		else {
			$emailerror .= '<dd>Enter a valid <span>*</span>eMail</dd>';
		}
	}
	if(strlen($_POST['formComment']) < 1 ){
		$emailerror .= '<dd>Enter a <span>*</span>comment</dd>';
	}

} else {

	$emailerror .= "<dt>Great Success!</dt><dd>Comment inbound.</dd>";



	// NOW SEND THE ENQUIRY

	$timestamp = date("F j, Y, g:ia");

	$messageproper ="\n\n" .
		"Name: " .
		ucwords($_POST['formName']) .
		"\n" .
		"Email: " .
		ucwords($email) .
		"\n" .
		"Comment: " .
		$_POST['formComment'] .
		"\n" .
		"\n\n" ;

		$messageproper = trim(stripslashes($messageproper));
		mail($mailto, $subject, $messageproper, "From: \"$vname\" <".$_POST['e_mail'].">\nReply-To: \"".ucwords($_POST['first_name'])."\" <".$_POST['e_mail'].">\nX-Mailer: PHP/" . phpversion() );

}
?>

<div id='emailerror'>
	<dl>
		<? echo $emailerror; ?>
	</dl>
</div>

