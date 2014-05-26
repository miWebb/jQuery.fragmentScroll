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
	frame: 'html, body',
	offset: 0,
	speed: 1000,
	easing: 'swing', // http://easings.net
	showFragment: false
});</pre>
