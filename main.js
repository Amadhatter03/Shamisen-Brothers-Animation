const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./bear.png");
ASSET_MANAGER.queueDownload("./snake.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Bear());
	gameEngine.addEntity(new Snake());

	gameEngine.init(ctx);

	gameEngine.start();
});
