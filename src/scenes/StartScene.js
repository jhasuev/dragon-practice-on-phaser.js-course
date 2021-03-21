import config from "../config"

class StartScene extends Phaser.Scene {
  constructor(){
    super("Game")
  }

  preload() {
    this.load.image("bg", "assets/img/background.png")
  }
  
  create() {
    this.createBackground()
  }

  createBackground() {
    this.add.sprite(0, 0, "bg").setOrigin(0)
  }
}

export default StartScene
