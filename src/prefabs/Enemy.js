class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.scene = scene
    this.init()
  }

  init() {
    this.scene.add.existing(this).setOrigin(0)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = 200
  }

  move() {
    this.body.setVelocityX(-this.velocity)
  }
}

export default Enemy