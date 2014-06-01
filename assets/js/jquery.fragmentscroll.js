/*!
 * jQuery Fragment Scroll v1.0.2
 *
 * Copyright 2014 miWebb
 * Released under the MIT license
 */

(function($) {
	"use strict";

	$.fn.fragmentScroll = function(options) {
		// Options
		var options = $.extend({}, $.fn.fragmentScroll.defaults, options);

		// Init
		return this.each(function() {
			fragmentScroll(this, options);
		});
	}

	$.fn.fragmentScroll.defaults = {
		showFragment: false,
		frame: 'html, body',
		offset: 0,
		speed: 1000,
		easing: 'swing' // http://www.easings.net
	}

	function fragmentScroll(element, options) {
		// On click event
		$(element).find('[href^="#"]').on("click", function(event) {
			// Prevent default behavior
			event.preventDefault();

			// Variables
			var fragment = this.href.substring(this.href.indexOf('#'));

			// Scroll frame
			$(options.frame).animate({
				scrollTop: $(fragment).offset().top - $(options.frame).offset().top - options.offset
			}, options.speed, options.easing);

			// Show fragment
			if(options.showFragment) {
				window.location.hash = fragment;
			}
		});
	}
})(jQuery);
