import config from "../config"

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  preload() {
  }

  create() {
    this.add.sprite(0, 0, "bg").setOrigin(0)
  }
}

export default GameScene
