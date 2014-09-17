define(function() {
    "use strict";

    /**
     * @class State
     * @property {object} states        - Enumeration of the game/app states.
     *
     * Sprite object holds all the crucial data required to read and
     * store the image/sprite.
     */
    function State() {
        this.states = {
            menu : 0,
            game : 1,
            pause : 2
        };
    }

    return State;
});