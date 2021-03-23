class MovableObject extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame = undefined) {
    super(scene, x, y, texture, frame)
    this.scene = scene
    this.init()
  }

  init() {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = 200

    this.scene.events.on("update", this.update, this)
  }

  restart(data) {
    this.x = data.x
    this.y = data.y

    this.setAlive(true)
  }

  setAlive(status) {
    this.body.enable = status
    this.setVisible(status)
    this.setActive(status)
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