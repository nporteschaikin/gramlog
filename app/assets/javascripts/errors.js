var errors = {
	
	init: function (response) {
		
		if (response) {
			$('body').prepend(response);
		}
		
		$(errors.parent).fadeIn(_.a('errors:speed')).delay(_.a('errors:delay')).fadeOut(_.a('errors:speed'), 
			function () { 
				_.$('errors:parent').remove() 
			}
		)
		
	}
	
}