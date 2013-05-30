var photos = {
	elements: {
		parent: '.photos',
		images: '.photos img'
	},
	init: function () {
		photos.load();
	},
	load: function () {
		photos.loading(true);
		$(photos.elements.images).imagesLoaded(
			function () {
				var th = $(this);
				photos.loading(false);
				$(this).addClass('loaded');
			}
		)
	},
	loading: function (bool) {
		if (bool) {
			$(photos.elements.parent).stop().animate({opacity: 0}, {duration: 250, queue: false});
		} else {
			$(photos.elements.parent).stop().animate({opacity: 1}, {duration: 250, queue: false});
		}
	}
}

$(document).on('go', photos.init)