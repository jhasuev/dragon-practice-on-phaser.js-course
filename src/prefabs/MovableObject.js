class MovableObject extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame)
    this.init(data)
  }

  init(data) {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = data.velocity
    this.scene = data.scene

    this.scene.events.on("update", this.update, this)
  }

  restart(x, y) {
    this.x = x
    this.y = y

    this.setAlive(true)
  }

  setAlive(status) {
    this.body.enable = status
    this.setVisible(status)
    this.setActive(status)

    if (this.timer) {
      this.timer.paused = !status
    }

    if (!status) {
      this.emit("killed")
    }
  }

  isDead() {
    return false
  }

  update() {
    if (this.active && this.isDead()) {
      this.setAlive(false)
    }
  }

  move() {
    this.body.setVelocityX(this.velocity)
  }
}

export default MovableObject