var console = require("log");
class GGM2Sprite {
	constructor (id) {
		//the sprites cordinates, just like scratch, cordinates are from the center.
		this.x = 0;
		this.y = 0;
		//the rotation of the sprite, just like scratch, 90 is up right.
		this.direction = 90;
		//size of sprite, also helps center the sprite.
		this.width = 32;
		this.height = 32;
		//the costume/skin of the sprite.
		this.image = null;
		//flip the sprite and stuff.
		this.flip = "none";
		//used for deletion.
		this.id = id;
		//the ghost effect of the sprite, the closer it is to 100 the more see-through it gets.
		this.ghost = 0;
		//every time it gets clicked, all the functions in this array get called.
		this.clicked = [];
	}
}
module.exports = GGM2Sprite;