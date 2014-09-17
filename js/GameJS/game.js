define([
        'GameJS/Graphics/canvas',
        'GameJS/Graphics/sprite',
        'GameJS/Input/input',
        'GameJS/Util/util',
        'GameJS/state',
        'app/player'
], function(Canvas, Sprite, Input, Util, State, Player) {
    "use strict";

    function Game(width, height) {
        this.width = width;
        this.height = height;
    }

    Game.prototype.init = function() {
        this.canvas = new Canvas(this.width, this.height);
        this.canvas.drawBackground("#000");

        Player.init(this.height);
    };

    Game.prototype.run = function() {
        var ctx = this.canvas.ctx;

        Util.Animate(function() {
            Player.draw(ctx);
            Player.update();
        }, this.canvas);
    };

    return Game;
});