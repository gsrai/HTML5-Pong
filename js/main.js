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
		app: 'app',			    // your application code
		game : 'GameJS/game'   // the game engine code
	}
});

// loads in engine
require(["game"], function(Game) {
    var game = new Game(700, 600);
    game.init();
    game.run();
});

/**
 * Project todo:
 * should all game objects (objects drawn to the screen) have
 * their own draw, update and init methods? sort of like an
 * interface or abstract class.
 *
 * Abstract the state or pause menu,
 * better input handler object. all keyboard mouse and touch io.
 * also test this shit! ASAP
 */