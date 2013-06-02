var mine = {
	parent: '.mine .container',
	link: '.mine .open',
	init: function () {
		$(document).on(_.e('mine:link'), 'click', mine.toggle);
	},
	toggle: function () {
		_.$('mine:parent').is(':visible') ? mine.close() : mine.open();
	},
	open: function () {
		_.$('mine:parent').slideDown(250);
	},
	close: function () {
		_.$('mine:parent').slideUp(250);
	}
}

$(document).on('go', mine.init)