// validate contact form
$(function() {
	$('#contact').validate({
		rules: {
			fname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			fname: {
				required: "What's your first name?",
				minlength: "Your name must consist of at least 2 characters"
			},
			email: {
				required: "What's your email address?"
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type:"POST",
				data: $(form).serialize(),
				url:"../process.php",
				success: function(responseText, statusText) {
					$('#contact :input').attr('disabled', 'disabled');
					$('#contact').fadeTo( 500, 0.5, function() {
						$(this).find(':input').attr('disabled', 'disabled');
						$(this).find('label').css('cursor','default');
						$('.contact .alert-success').text(responseText);
						$('.contact .alert-success').fadeIn();
					});
				},
				error: function(responseText, statusText) {
					$('#contact').fadeTo( 500, 0.5, function() {
						$('.contact .alert-danger').text(responseText);
						$('.contact .alert-danger').fadeIn();
					});
				}
			});
		}
	});
}); 