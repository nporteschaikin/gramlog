var photos = {
	elements: {
		images: '.photos img'
	},
	init: function () {
		photos.elements.images = $(photos.elements.images);
		photos.load();
	},
	load: function () {
		photos.elements.images.imagesLoaded(
			function () {
				var th = $(this);
				$(this).parents('.photos').animate({opacity: 1}, {duration: 125, queue: false,
					complete: function () {
						th.addClass('loaded');
					}
				})
			}
		)
	}
}

$(document).on('ready', photos.init)