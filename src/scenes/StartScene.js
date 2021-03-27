import config from "../config"

class StartScene extends Phaser.Scene {
  constructor(){
    super("Start")
  }

  preload() {
  }

  init() {
    this.textStyles = {
      font: "40px CurseCasual",
      fill: "#fff",
    }
  }
  
  create(data) {
    this.add.sprite(0, 0, "bg").setOrigin(0)
    if (data.scores !== undefined) {
      this.createStat(data)
    }
    this.createText()
    this.start()
  }
  
  createStat(data) {
    const graphics = this.add.graphics()
    graphics.fillStyle(0x000000, .5)
    graphics.fillRoundedRect(config.width / 2 - 200, config.height / 2 - 200, 400, 400)

    const textTitle = data.completed ? "You win" : "Game over"
    const textScore = `Scores: ${data.scores}`

    this.add.text(config.width / 2, 250, textTitle, this.textStyles).setOrigin(.5)
    this.add.text(config.width / 2, 350, textScore, this.textStyles).setOrigin(.5)
  }

  start() {
    this.addEvent()
  }

  addEvent() {
    this.input.on("pointerdown", () => {
      this.scene.start("Game")
    })
  }

  createText() {
    this.add.text(config.width / 2, 500, "Tap to Start", this.textStyles).setOrigin(.5)
  }
}

export default StartScene
