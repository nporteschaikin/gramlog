var input = {
	parent: 'input[type=text], textarea',
	init: function () {
		$(input.parent).off('click').on('click', function () { input.focus($(this)) } );
		$(input.parent).off('blur').on('blur', function () { input.blur($(this)) } );
		$(input.parent).prev('label').off('click').on('click', function () { input.hide($(this), true) } );
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