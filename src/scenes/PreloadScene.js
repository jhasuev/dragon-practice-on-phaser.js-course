import config from "../config"

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
  }

  create() {
    console.log('preloadscene');

    this.scene.start("Start")
  }
}

export default PreloadScene
