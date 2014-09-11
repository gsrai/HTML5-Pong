define(function() {
	"use strict"; 

	/**
	 * @class InputHandler
	 * Class handles the input to the game.
	 * 
	 * @property {object} down      - object containing all the currently pressed (held down) keys.
	 * @property {object} pressed   - object containing all the pressed keys (already down).
	 * @property {object} _this     - reference to the InputHandler object.
	 *
	 * the first event handler listens for a keydown event (any key pressed down).
	 * it adds a record or property to down with a key code as the key and a boolean
	 * value representing if that key is down or not.
	 *
	 * the second event handler removes the key from the two objects,
	 * the pressed object is explained in isPressed documentation.
	 */
	function InputHandler() {

		this.down = {}; // keys that are down (inc. held)
		this.pressed = {}; // keys that are down (not held)

		var _this = this;

		document.addEventListener("keydown", function(evt) {
			_this.down[evt.keyCode] = true; // this would point to document.
		});
		
		document.addEventListener("keyup", function(evt) {
			delete _this.down[evt.keyCode];
			delete _this.pressed[evt.keyCode];
		}); 
	}

	/**
	 * @property {function} isDown
	 * checks if specific key is down or held down
	 * @param {string} code   - key code, number but stored as a string.
	 * @return {bool}         - returns if the key is down or not
	 */
	InputHandler.prototype.isDown = function(code) {
		return this.down[code];
	};

	/**
	 * @property {function} isPressed
	 * checks if specific key has been pressed, used
	 * to prevent hold down spam i.e. projectile spam.
	 *
	 * if the key (argument code) exists in the object pressed
	 * then return false as the key has already been pressed once. (isDown -> true)
	 * 
	 * if the key exists in the object down and is not in the object pressed (or false)
	 * then add the key to the object pressed or assign it to true, return true.
	 *
	 * else return false as the key is not down and has not been pressed. 
	 * AKA no event for that key
	 *
	 * @param {string} code   - key code, number but stored as a string.
	 * @return {bool}         - returns if the key has been pressed or not
	 */
	InputHandler.prototype.isPressed = function(code) {
		if (this.pressed[code]) {
			return false;
		} else if (this.down[code]) {
	        this.pressed[code] = true;
	        return this.pressed[code];
		}
		return false;
	};

	/**
	 * @property {object} keys
	 * an object containing all key codes
	 * usage: input.isDown(input.keys.KEY_UP);
	 */
	InputHandler.prototype.keys = {
	    KEY_UP     : 38,
	    KEY_DOWN   : 40,
	    KEY_LEFT   : 37,
	    KEY_RIGHT  : 39,
	    KEY_A      : 65,    
	    KEY_D      : 68, 
	    KEY_W      : 87, 
	    KEY_S      : 83,    
	    KEY_SPACE  : 32,
	    KEY_ENTER  : 19
	};

	return InputHandler;
});
