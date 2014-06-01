jQuery.fragmentScroll
=====================

The jQuery fragment scroll plugin replaces the default fragment link behavior with a scroll animation. The plugin only works for descendants of the given element(s).

## Example

### Javascript

<pre>$(window).load(function() {
	$("html, body").fragmentScroll();
});</pre>

## Options

<pre>$("html, body").fragmentScroll({
	// Show fragment in URL.
	showFragment: false,

	// The frame that will scroll if the content overflows the elements box.
	frame: 'html, body',

	// The offset from the top of the element.
	offset: 0,

	// The animation time in microseconds.
	speed: 1000,

	// Animation effect. (http://www.easings.net)
	easing: 'swing'
});</pre>
