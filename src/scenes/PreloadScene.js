import config from "../config"

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.load.atlas("dragon", "assets/img/dragon.png", "assets/img/dragon.json")
    this.load.atlas("enemy", "assets/img/enemy.png", "assets/img/enemy.json")
  }

  create() {
    this.scene.start("Start")
  }
}

export default PreloadScene
