import Enemy from "./Enemy"

class Player extends Enemy {
  constructor(scene) {
    super({
      scene,
      x: 250,
      y: 250,
      texture: "dragon",
      frame: "dragon1",
      velocity: 222,
      bullet: { velocity: 750, delay: 500, texture: "fire" },
      origin: { x: 1, y: 0.5 },
    })
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