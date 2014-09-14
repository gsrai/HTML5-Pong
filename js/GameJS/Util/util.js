define(function() {
    "use strict";

    /**
     * @object Utility
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
    var Utility = {

        /**
         * Animate - Main game loop
         * @param {function} loop - game draw and update methods go here.
         * @param {object} canvas - a reference to the canvas.
         */
        Animate : function(loop, canvas) {
            /**
             * raf - request animation frame
             * Reference to the correct requestAnimationFrame function for the platform.
             */
            var raf = (function() {
                return window.requestAnimationFrame ||      // IE 10, Firefox 23, Safari 7 and Chrome
                    window.webkitRequestAnimationFrame ||   // older versions of Safari & Chrome
                    window.mozRequestAnimationFrame ||      // Firefox 22 or older
                    window.oRequestAnimationFrame ||        // opera web browser
                    window.msRequestAnimationFrame;         // IE < 10
            })();

            // run - animation callback function.
            function run() {
                loop();
                raf(run, canvas);
            }
            run();
        },

        /**
         * AABB Intersect - basic collision detection
         * Check if two axis aligned bounding boxes (sprites) intersect.
         *
         * @param {object} a - reference to a sprite object.
         * @param {object} b - reference to another sprite object.
         *
         * @return {bool}  result of the calculation
         */
        AABBIntersect : function(a, b) {
            return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
        }
    };

    return Utility;
});