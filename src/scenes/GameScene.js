import config from "../config"
import Player from "../prefabs/Player"
import Enemies from "../prefabs/Enemies"
import Boom from "../prefabs/Boom"

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
    this.scores = 0
    this.textStyles = {
      font: "30px CurseCasual"
    }
  }

  create() {
    this.createBackground()
    this.player = new Player(this)
    this.enemies = new Enemies(this)
    this.createCompleteEvents()
    this.createText()
    this.addOverlap()
  }

  createText() {
    this.infoText = this.add.text(15, config.height - 10, "", this.textStyles).setOrigin(0, 1)
    this.updateText()
  }

  updateText() {
    this.infoText.setText(`Scores: ${this.scores}`)
  }

  addScore() {
    this.scores += 1
    this.updateText()
  }

  addOverlap() {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this)
    this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this)
    this.physics.add.overlap(this.enemies, this.player, this.onOverlap, undefined, this)
  }

  onOverlap(source, target) {
    const enemy = [source, target].find(item => item.texture.key === "enemy")
    if (enemy) {
      this.addScore()
      Boom.generate(this, enemy.x, enemy.y)
    }

    source.setAlive(false)
    target.setAlive(false)
  }

  createCompleteEvents() {
    this.player.once("killed", this.onComplete, this)
    this.events.on("enemies-killed", this.onComplete, this)
  }

  onComplete() {
    this.scene.start("Start", {
      scores: this.scores,
      completed: this.player.active
    })
  }

  update() {
    this.player.move()
    this.bg.tilePositionX += .5
  }

  createBackground() {
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0)
  }
}

export default GameScene
