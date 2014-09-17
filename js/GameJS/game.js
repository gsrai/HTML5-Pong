define([
        'GameJS/Graphics/canvas',
        'GameJS/Graphics/sprite',
        'GameJS/Input/input',
        'GameJS/Util/util',
        'GameJS/state'
], function(Canvas, Sprite, Input, Util, State) {

    function Game(width, height) {
        this.width = width;
        this.height = height;
    }

    Game.prototype.init = function() {
        var canvas = new Canvas(this.width, this.height);
        canvas.drawBackground("#000");
    };

    Game.prototype.run = function() {

    };

    return Game;
});