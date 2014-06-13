jQuery.fragmentScroll
=====================

The jQuery fragment scroll plugin replaces the default fragment link behavior with a scroll animation. The plugin only works for descendants of the given element(s). Check the [demo](https://miwebb.github.io/jQuery.fragmentScroll/) for more information.

## Example

### HTML

<pre>&lt;!doctype html>
&lt;html>
	&lt;body>
		&lt;div id="nav">
			&lt;p>&lt;a href="#fragment">Content&lt;/a>&lt;/p>
		&lt;/div>
		&lt;div id="fragment">
			&lt;p>Footer&lt;/p>
		&lt;/div>
	&lt;/body>
&lt;/html></pre>

### Javascript

<pre>$(window).load(function() {
	$('body').fragmentScroll();
});</pre>

## Options

<pre>$('body').fragmentScroll({
	// The frame that will scroll if the content overflows the elements box. (body for webkit browsers)
	frame: 'html, body',

	// The offset from the top of the element.
	offset: 0,

	// The animation time in microseconds.
	speed: 1000,

	// Animation effect. (http://www.easings.net)
	easing: 'swing'

	// Enable fragment in URL.
	enableFragment: false,

	// Enable animation chain. The browser will execute all the events in stead of ignoring event during animation.
	enableAnimationChain: false,

	// Call function on start.
	onStart: function() {},

	// Call function on complete.
	onComplete: function() {}
});</pre>
