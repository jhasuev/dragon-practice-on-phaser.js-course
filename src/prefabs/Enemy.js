import config from "../config"
class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.scene = scene
    this.init()
  }

  static generateData() {
    const x = config.width + 100
    const y = Phaser.Math.Between(100, config.height - 100)
    const id = Phaser.Math.Between(1, 4)

    return {x, y, id}
  }

  static generate(scene) {
    const data = Enemy.generateData()
    return new this(scene, data.x, data.y, "enemy", `enemy${data.id}`)
  }

  init() {
    this.scene.add.existing(this).setOrigin(0)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = -200 * 4

    this.scene.events.on("update", this.update, this)
  }

  update() {
    if (this.active && this.x < -this.width) {
      this.setAlive(false)
    }
  }

  restart() {
    const data = Enemy.generateData()
    this.x = data.x
    this.y = data.y
    this.setFrame(`enemy${data.id}`)

    this.setAlive(true)
  }

  setAlive(status) {
    this.body.enable = status
    this.setVisible(status)
    this.setActive(status)
  }

  move() {
    this.body.setVelocityX(this.velocity)
  }
}

export default Enemy