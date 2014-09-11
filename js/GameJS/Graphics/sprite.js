define(function() {
	"use strict"; 
    
	/**
     * @class Sprite
     * @property {object} Image		- Image element reference
     * @property {number} x			- x position of sprite on spritesheet
     * @property {number} y			- y position of sprite on spritesheet
     * @property {number} width		- sprite width
     * @property {number} height	- sprite height
     * 
     * Sprite object holds all the crucial data required to read and 
     * store the image/sprite.
     */
    function Sprite(img, x, y, w, h) {
    	 this.img = img;
    	 this.x = x;
    	 this.y = y;
    	 this.width = w;
    	 this.height = h;
    }

    /**
     * @property {function} draw
     * Draws the sprite to the canvas.
     * @param {object} ctx 	 	- reference to canvas 2d context
     * @param {number} x		- canvas x position, where to draw
     * @param {number} y		- canvas y position, where to draw
     */
    Sprite.prototype.draw = function(ctx, x, y) {
    	ctx.drawImage(this.img, this.x, this.y, 
    		this.w, this.h, x, y, this.w, this.h);

    };

    return Sprite;
});