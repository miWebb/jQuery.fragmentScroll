/*!
 * jQuery Fragment Scroll v1.1.0
 *
 * Copyright 2014 miWebb
 * Released under the MIT license
 */

(function($, window, undefined) {
	'use strict';

	$.fn.fragmentScroll = function(options) {
		// Options
		var options = $.extend({}, $.fn.fragmentScroll.defaults, options);

		// Init
		return this.each(function() {
			fragmentScroll(this, options);
		});
	}

	$.fn.fragmentScroll.defaults = {
		// Options
		showFragment: false,
		frame: 'html, body',
		offset: 0,
		speed: 1000,
		easing: 'swing', // http://www.easings.net

		// Events
		onStart: function() {},
		onComplete: function() {}
	}

	function fragmentScroll(element, options) {
		// On click event
		$(element).find('[href^="#"]').on('click', function(event) {
			// Prevent default behavior
			event.preventDefault();

			// Variables
			var fragment = this.href.substring(this.href.indexOf('#'));
			var frame = $(options.frame);

			// onStart
			if (typeof(options.onStart) == "function") {
				options.onStart.call();
			}

			// Animation
			frame.animate({
				scrollTop: $(fragment).offset().top + $(options.frame).offset().top - options.offset
			}, options.speed, options.easing);

			// onComplete
			if (typeof(options.onStart) == "function") {
				frame.promise().done(options.onComplete);
			}

			// Show fragment
			if(options.showFragment) {
				window.location.hash = fragment;
			}
		});
	}
})(jQuery, window);
