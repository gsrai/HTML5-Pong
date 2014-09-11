define(function() {
	"use strict"; 

    /**
     * @class Canvas
     * Abstracts the initialisation of the canvas when making games, mostly code reuse.
     * 
     * @property {object} canvas	- canvas element reference
     * @property {object} ctx		- canvas drawing context reference
     * @property {number} width		- width of the canvas
     * @property {number} height	- height of the canvas
     */
    function Canvas(width, height) {
    	this.canvas = document.createElement("canvas");
    	this.canvas.width = this.width = width;
    	this.canvas.height = this.height = height;

    	this.ctx = (function(ctx) {
    		return ctx;
    	})(this.canvas.getContext("2d"));

    	document.body.appendChild(this.canvas);
    }

    /**
     * @property {function} drawBackground
     * Fills the background of the canvas with a color.
     * @param {string} color - background color
     */
    Canvas.prototype.drawBackground = function(color) {
    	this.ctx.save();

    	this.ctx.fillStyle = color;
    	this.ctx.fillRect(0, 0, this.width, this.height);

    	this.ctx.restore();
    };

    /**
     * @property {function} drawSprite
     * Draws any sprite to the canvas.
     * @param {object} sprite 	- Sprite object reference
     * @param {number} x		- canvas x position, where to draw
     * @param {number} y		- canvas y position, where to draw
     */
    Canvas.prototype.drawSprite = function(sprite, x, y) {
    	this.ctx.drawImage(sprite.img, sprite.x, sprite.y, 
    		sprite.w, sprite.h, x, y, sprite.w, sprite.h);

    };

    /**
     * @property {function} clearCanvas
     * Completely clears the canvas.
     */
    Canvas.prototype.clearCanvas = function() {
    	this.ctx.clearRect(0, 0, this.width, this.height);
    };

    return Canvas;
});

