define(function() {
    "use strict";

    var player = {
        x : null,
        y : null,
        width : 20,
        height : 100
    };

    player.init = function (HEIGHT) {
        // initial positions of the player paddle
        player.x = player.width;
        player.y = (HEIGHT - player.height)/2;
    };

    player.draw = function (ctx) {
        //console.log("drawing");
        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    };

    player.update = function () {

    };

    return player;
});