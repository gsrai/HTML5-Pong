define([
        'GameJS/Graphics/canvas',
        'GameJS/Graphics/sprite',
        'GameJS/Input/input',
        'GameJS/Util/util',
        'GameJS/state',
        'app/player',
        'app/ai'
], function(Canvas, Sprite, Input, Util, State, Player, Ai) {
    "use strict";

    function Game(width, height) {
        this.width = width;
        this.height = height;
    }

    Game.prototype.init = function() {
        this.canvas = new Canvas(this.width, this.height);
        this.canvas.drawBackground("#000");

        Player.init(this.height);
        Ai.init(this.width, this.height);
    };

    Game.prototype.run = function() {
        var ctx = this.canvas.ctx;

        Util.Animate(function() {
            Player.draw(ctx);
            Ai.draw(ctx);

            Player.update();
            Ai.update();
        }, this.canvas);
    };

    return Game;
});