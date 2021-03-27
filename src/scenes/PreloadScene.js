import config from "../config"
import LoadingBar from "../classes/LoadingBar"

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.add.sprite(0, 0, "bg").setOrigin(0)
    const loadingBar = new LoadingBar(this)

    this.preloadAssets()
  }

  preloadAssets() {
    this.load.atlas("dragon", "assets/img/dragon.png", "assets/img/dragon.json")
    this.load.atlas("enemy", "assets/img/enemy.png", "assets/img/enemy.json")
    this.load.atlas("boom", "assets/img/boom.png", "assets/img/boom.json")
    this.load.image("fire", "assets/img/fire.png")
    this.load.image("bullet", "assets/img/bullet.png")
    this.load.audio("theme", "assets/sounds/theme.mp3")
    this.load.audio("boom", "assets/sounds/boom.mp3")
  }

  create() {
    // загрузка ассетов полностью завершена
    this.scene.start("Start")
  }
}

export default PreloadScene
