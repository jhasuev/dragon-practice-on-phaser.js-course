import config from "../config"

class StartScene extends Phaser.Scene {
  constructor(){
    super("Start")
  }

  preload() {
  }
  
  create() {
    this.add.sprite(0, 0, "bg").setOrigin(0)
    this.createText()
    this.start()
  }

  start() {
    this.addEvent()
    this.scene.start("Game")
  }

  addEvent() {
    this.input.on("pointerdown", () => {
      this.scene.start("Game")
    })
  }

  createText() {
    this.add.text(config.width / 2, 500, "Tap to Start", {
      font: "40px CurseCasual",
      fill: "#fff",
    }).setOrigin(.5)
  }
}

export default StartScene
