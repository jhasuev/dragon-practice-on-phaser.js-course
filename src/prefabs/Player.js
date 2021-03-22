class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 0, 0, "dragon", "dragon1")
    this.scene = scene
    this.init()
  }

  init() {
    this.scene.add.existing(this).setOrigin(0)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = 500
  }

  move() {
    this.body.setVelocity(0)

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity)
    }

    if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity)
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity)
    }

    if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity)
    }
  }
}

export default Player