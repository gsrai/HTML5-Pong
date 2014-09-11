define(function() {
	"use strict"; 

	/**
	 * @class FPSCounter
	 * @param {object} ctx 				- canvas drawing context
	 * @property {object} ctx			- canvas drawing context reference
	 * @property {number} current		- the current frame
	 * @property {number} last			- the last frame before refresh (so no. frames that second)
	 * @property {number} lastUpdated	- time the last fps was taken
	 * 
	 * FPSCounter object is a useful utility even though chrome dev
	 * tools already comes with an fps counter, mainly just for show.
	 */
	function FPSCounter(ctx) {
		this.current = 0;
		this.last = 0;
		this.lastUpdated = Date.now();
		this.ctx = ctx;
	}

	/**
	 * @property {function} draw
	 * draws the fps to the canvas.
	 */
	FPSCounter.prototype.draw = function() {
		this.ctx.save();

		this.ctx.font = "12pt Arial";
		this.ctx.fillStyle = "#fff";
		this.ctx.textBaseline = "top";
		this.ctx.fillText(this.last + "fps", 5, 5);
		this.ctx.fill();

		this.ctx.restore();
	};

	/**
	 * @property {function} update
	 * calculates and updates fps.
	 */
	FPSCounter.prototype.update = function() {
		this.current++;
		if (Date.now() - this.lastUpdated >= 1000) {
		    this.last = this.current;
		    this.current = 0;
		    this.lastUpdated = Date.now();
		}
	};

	return FPSCounter;
});