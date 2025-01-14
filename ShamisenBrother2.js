class ShamisenBrother2 {
	constructor(game) {
		this.game = game;
		
		// this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/ShamisenBrother1.png"), 0, 0, 56, 62, 4, 1);
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/ShamisenBrother2.png"), 0, 0, 64, 64, 4, 0.2);

		// Commented out code is for moving sprites (walking, flying and so forth)
		// this.x = 0;
		// this.y = 0;
		// this.speed = 25;
	};

	update() {
		// this.x += this.speed * this.game.clockTick;
		// if(this.x < 1024) this.x = 0;
	};

	draw(ctx) {
		// this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
		this.animator.drawFrame(this.game.clockTick, ctx, 550, 350, 3);
	};
}
