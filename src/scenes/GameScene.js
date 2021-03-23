import config from "../config"
import Player from "../prefabs/Player"
import Enemy from "../prefabs/Enemy"
import Enemies from "../prefabs/Enemies"

class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {
    this.createBackground()
    this.player = new Player(this, 1000, 555, "enemy", "enemy1")
    this.enemies = new Enemies(this)
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
