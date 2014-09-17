define(function() {
    "use strict";

    var ai = {
        x : null,
        y : null,
        width : 20,
        height : 100
    };

    ai.init = function (WIDTH, HEIGHT) {
        // times 2 for width offset and paddle offset.
        ai.x = WIDTH - (ai.width * 2);
        ai.y = (HEIGHT - ai.height)/2;
    };

    ai.draw = function (ctx) {

        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    };

    ai.update = function () {

    };

    return ai;
});