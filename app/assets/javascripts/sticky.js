var sticky = {
	elements: {
		parent: '.sticky'
	},
	init: function () {
		for (x in sticky.elements) {
			sticky.elements[x] = $(sticky.elements[x]);
			sticky.elements[x].data('pos', sticky.elements[x].offset().top)
		}
		sticky.scroll();
		$(window).off('scroll resize').on('scroll resize', sticky.scroll);
	},
	scroll: function () {
		var body = $('body').scrollTop();
		sticky.elements.parent.each(
			function () {
				var parent = { height: $(this).parent().height(), offset: $(this).parent().offset().top };
				body > parent.offset && body < parent.offset + parent.height ? $(this).css('position', 'fixed') : $(this).css('position', 'absolute');
			}
		)
	}
}

$(document).on('go', sticky.init)