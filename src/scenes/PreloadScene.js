import config from "../config"

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.load.atlas("dragon", "assets/img/dragon.png", "assets/img/dragon.json")
    this.load.atlas("enemy", "assets/img/enemy.png", "assets/img/enemy.json")
    this.load.atlas("boom", "assets/img/boom.png", "assets/img/boom.json")
    this.load.image("fire", "assets/img/fire.png")
    this.load.image("bullet", "assets/img/bullet.png")
  }

  create() {
    this.scene.start("Start")
  }
}

export default PreloadScene
