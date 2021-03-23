import config from "../config"
class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.scene = scene
    this.init()
  }

  static generate(scene) {
    const x = config.width + 100
    const y = Phaser.Math.Between(100, config.height - 100)
    const id = Phaser.Math.Between(1, 4)
    return new this(scene, x, y, "enemy", `enemy${id}`)
  }

  init() {
    this.scene.add.existing(this).setOrigin(0)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = -200
  }

  move() {
    this.body.setVelocityX(this.velocity)
  }
}

export default Enemy