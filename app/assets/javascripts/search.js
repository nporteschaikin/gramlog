var search = {
	elements: {
		nav: '.search ul ul li',
		parent: '.search .carousel',
		form: '.search form'
	},
	init: function () {
		for (x in search.elements) search.elements[x] = $(search.elements[x]);
		search.elements.nav.off('click').on('click', function () { search.go($(this).index()) } )
		search.elements.form.off('submit.search').on('submit.search', function() {
			photos.loading(true);
		});
	},
	go: function (eq) {
		var height = search.elements.form.first().outerHeight(true);
		if (search.elements.form.eq(eq).length) {
			search.elements.nav.filter('.open').removeClass('open');
			search.elements.nav.eq(eq).addClass('open');
			search.elements.parent.animate({top: -(eq * height)}, {queue: false, duration: 250});
			return true;
		}
		return false;
	}
}

$(document).on('go', search.init)