var input = {
	parent: 'input[type=text]',
	init: function () {
		$(document).on(_.e('input:parent'), 'click', 
			function () {
				input.focus($(this));
			}
		)
		$(document).on(_.e('input:parent'), 'blur', 
			function () {
				input.blur($(this));
			}
		)
		_.$('input:parent').prev('label').off('click').on('click',
			function () {
				input.hide($(this));
			}
		)
	},
	show: function(l) {
		var i = l.next('input');
		if (i.val() == '') l.fadeIn(250);
	},
	hide: function (l) {
		var i = l.next('input');
		l.fadeOut(250);
		i.focus(); 
	},
	blur: function(i) {
		input.show(i.prev('label'));
	},
	focus: function(i) {
		input.hide(i.prev('label'));
	},
}
$(document).on('go', input.init);