import config from "../config"
class Fire extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    this.scene = scene
    this.init()
  }

  init() {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.velocity = 200 * 4

    this.scene.events.on("update", this.update, this)
  }

  static generateData(source) {
    return {
      scene: this.scene,
      x: source.x + source.width,
      y: source.y + source.height / 2,
      texture: "fire",
      velocity: this.velocity,
    }
  }

  static generate(scene, source) {
    const data = this.generateData(source)
    return new this(scene, data.x, data.y, "fire")
  }

  update() {
    if (this.active && this.x < -this.width || this.x > config.width) {
      this.setAlive(false)
    }
  }

  restart(source) {
    const data = Fire.generateData(source)
    this.x = data.x
    this.y = data.y

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

export default Fire