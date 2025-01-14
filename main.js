const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/ShamisenBrother1.png");
ASSET_MANAGER.queueDownload("./Sprites/ShamisenBrother2.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new ShamisenBrother1(gameEngine));
	gameEngine.addEntity(new ShamisenBrother2(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
