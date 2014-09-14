define([
        'GameJS/Graphics/canvas',
        'GameJS/Graphics/sprite',
        'GameJS/Input/input',
        'GameJS/Util/util',
        'GameJS/state'
], function(Canvas, Sprite, Input, Util, State) {
    var canvas = new Canvas(640, 480); // this does not belong here!
    canvas.drawBackground("#000");
});