import config from "../config"

class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot")
  }

  preload() {
    this.load.image("bg", "assets/img/background.png")
  }

  create() {
    this.add.sprite(0, 0, "bg").setOrigin(0)

    this.scene.start("Preload")
  }
}

export default BootScene
