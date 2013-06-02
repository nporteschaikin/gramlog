(function(window, undefined){
	
	
	window.Spine = window._ = {
		
		j: this.jQuery,
		
		e: function (selector) {
			return element(selector);
		},
		
		c: function (selector) {
			return element(selector).substring(1);
		},
		
		$: function (selector) {
			return this.j(element(selector));
		},
		
		a: function (selector, value) {
			return attribute(selector, value);
		},
		
		on: function (selector, event, callback) {
			return this.$(selector).off(event).on(event, callback);
		}
	
	};
	
	function element(selector) {
		
		var array = [];
		
		if (typeof selector === 'string') {
			
			selectors = selector.split('/');
			for (x in selectors) {
				selectors[x] = selectors[x].split(':');
				array.push(e[selectors[x][0]][selectors[x][1]]);
			}
			
			return array.join(' ');
			
		} else if (selector == window || selector == document) {
			return selector;
		}

		return false;
		
	}
	
	function attribute(selector, value) {

		var array = [];
		
		if (typeof selector === 'string') {
			selector = selector.split(':');
			if (typeof value != 'undefined') a[selector[0]][selector[1]] = value;
			return a[selector[0]][selector[1]];
		}
		
		return false;
		
	}

})(window);