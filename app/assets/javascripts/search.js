var search = {
	
	init: function () {
		
		$(document).on('click', _.e('search:nav'),
			function () {
				search.go($(this).index());
			}
		)
		
		$(document).on('submit.search', _.e('search:form'),
			function () {
				photos.loading(true);
			}
		)
	},
	
	go: function (eq) {
		var height = _.$('search:parent/search:form').first().outerHeight(true);
		if ( _.$('search:parent/search:form').eq(eq).length ) {
			_.$('search:parent/search:nav').filter(_.e('search:open')).removeClass(_.c('search:open'));
			_.$('search:parent/search:nav').eq(eq).addClass(_.c('search:open'));
			_.$('search:parent').animate({top: -(eq * height)}, {queue: false, duration: 250});
			return true;
		}
		return false;
	}
}

$(document).on('go', search.init)