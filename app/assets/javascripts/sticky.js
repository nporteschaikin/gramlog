var sticky = {
	
	init: function () {
		_.$('sticky:parent').data('pos', _.$('sticky:parent').offset().top);
		_.on(window, 'scroll resize', sticky.scroll);
		sticky.scroll();
	},
	
	scroll: function () {
		var body = $('body').scrollTop();
		_.$('sticky:parent').each(
			function () {
				var parent = $(this).parent(),
				dim = { height: parent.height(), offset: parent.offset().top };
				body > dim.offset && body < dim.offset + dim.height ? $(this).css('position', 'fixed') : $(this).css('position', 'absolute');
			}
		)
	}
}

$(document).on('go', sticky.init)