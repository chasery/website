<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
 <title>Chasery.com // A portfolio dedicated to the work of Ryan Chase</title>
 <meta name="Keywords" content="Art, Photography, Chase, Design, Web, CSS, Website, Coding, HTML, Photoshop, Illustrator, Flash, AI, PS, CS3, Adobe" />
 <meta name="Description" content=" Web Portfolio of Ryan Chase - Web Developer and Graphic Designer" />
 <meta http-equiv="refresh" content="5;url=http://www.chasery.com"/>
 <link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
 <link rel="stylesheet" type="text/css" href="css/smoothbox.css" media="screen" />
 <link rel="shortcut icon" href="/favicon.ico" />
 <script type="text/javascript" src="js/mootools-release-1.11.js"></script>
 <script type="text/javascript" src="js/smoothbox.js"></script>
 <!--[if IE]>
 <script defer type="text/javascript" src="js/pngfix.js"></script>
 <![endif]-->
</head>
<body>
<!-- Site Wrapper -->
 <div id="wrapper">
 <a name="Top" id="Top"></a>
<!-- Site header and Navagation -->
  <div id="header">
  </div>
  
  <div id="headernav">
   <ul id="mainnav">
    <li id="menuhome"><a href="index.html"></a></li>
    <li id="menuinfo"><a href="info.html"></a></li>
    <li id="menuport"><a href="port.html"></a></li>
    <li id="menucontact"><a class="current" href="contact.html"></a></li>				
   </ul>
  </div>
  
  <div id="welcome">
   <h2>Welcome to Chasery.com*</h2>
   <h1>Home to the Web Developer, Ryan Chase</h1>
  </div>

  <div id="content_header">
   <h3>Chasery.com* Email</h3>
   <?php
   if(isset($_POST['submit'])) {

	$to = "ryan@chasery.com"; 
	$subject = "Chasery.com Contact Form";
	$name_field = $_POST['name'];
	$email_field = $_POST['email'];
	$message = $_POST['message'];

	$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message\n";

	echo '<div class="email">' ;
	echo ' <h4>';
	echo '  Thank You! Your data has been submitted to ryan@chasery.com!';
	echo ' </h4>';
	echo ' <a href="home.html">';
	echo '  Return to Home';
	echo ' </a>';
	echo '</div>';
	
	mail($to, $subject, $body);
	
   } else {
	echo '<div class="email">' ;
	echo ' <h4>';
	echo '  Epic Fail! Your data has not been submitted to ryan@chasery.com...';
	echo ' </h4>';
	echo ' <a href="home.html">';
	echo '  Return to Home';
	echo ' </a>';
	echo '</div>';
   }
   ?>
  </div>
  
  <div id="content_footer">
  </div>
  
  <div id="footer">
   <h2>Contact</h2>
   <a href="mailto:ryan@chasery.com">ryan@chasery.com</a>
  </div>
  <div id="footernav">
   <ul id="footnav">
    <li id="menutop"><a href="#Top"></a></li>				
   </ul>
  </div> 
 </div>
</body>
</html>