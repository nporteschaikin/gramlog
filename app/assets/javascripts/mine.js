var mine = {
	parent: '.mine .container',
	link: '.mine .open',
	init: function () {
		$(mine.link).off().on('click', mine.toggle);
	},
	toggle: function () {
		$(mine.parent).is(':visible') ? mine.close() : mine.open();
	},
	open: function () {
		$(mine.parent).slideDown(250);
	},
	close: function () {
		$(mine.parent).slideUp(250);
	}
}

$(document).on('go', mine.init)