var photos = {
	init: function () {
		photos.load();
	},
	load: function () {
		photos.loading(true);
		_.$('photos:images').each(
			function () {
				$(this).imagesLoaded(
					function () {
						var th = $(this);
						photos.loading(false);
						$(this).addClass(_.c('photos:loaded'));
					}
				)
			}
		)
	},
	loading: function (bool) {
		_.$('photos:images').stop();
		if (bool) {
			_.$('photos:parent').animate({opacity: 0}, {duration: 250, queue: false});
		} else {
			_.$('photos:parent').animate({opacity: 1}, {duration: 250, queue: false});
		}
	}
}

$(document).on('go', photos.init)