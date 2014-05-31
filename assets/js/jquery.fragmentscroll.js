/*!
 * jQuery Fragment Scroll v1.0.1
 *
 * Copyright 2014 miWebb and other contributors
 * Released under the MIT license
 */

(function($) {
	"use strict";

	$.fn.fragmentScroll = function(options) {
		// Variables
		var element = this;

		// Options
		var options = $.extend({
			frame: 'html, body',
			offset: 0,
			speed: 1000,
			easing: 'swing', // http://easings.net
			showFragment: false
		}, options);

		// Init
		fragmentScroll(element, options);
	}

	function fragmentScroll(element, options) {
		// On click event
		element.find('[href^="#"]').on("click", function(event) {
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
