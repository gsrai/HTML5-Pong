/**
 * main.js contains application configuration code for
 * requirejs. It is the first file to be loaded by requirejs.
 * Edit the config to use the library with your application.
 *
 * Script loading code:
 * <script data-main="js/main" src="js/lib/require.js"></script>
 */

// Require.js Configuration
require.config({
	baseUrl: 'js/',

	paths: {
		app: 'app',			// your application code
		game : 'GameJS/game'  // the game engine code
	}
});

// loads in engine
require(["GameJS/Graphics/canvas"], function(Canvas) {
    var canvas = new Canvas(640, 480); // this does not belong here!
	canvas.drawBackground("#000");
});