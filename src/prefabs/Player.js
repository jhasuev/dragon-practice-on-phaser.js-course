import Enemy from "./Enemy"
import Fires from "../prefabs/Fires"

class Player extends Enemy {
  constructor(scene) {
    super({
      scene,
      x: 111,
      y: 111,
      texture: "dragon",
      frame: "dragon1",
      velocity: 222
    })
  }

  init(data) {
    super.init(data)

    this.fires = new Fires(this.scene)

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    })
  }

  fire() {
    this.fires.createFire(this)
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