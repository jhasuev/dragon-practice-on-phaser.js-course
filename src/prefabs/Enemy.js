import config from "../config"
import MovableObject from "../prefabs/MovableObject"
import Fires from "../prefabs/Fires"

class Enemy extends MovableObject {
  static generateData() {
    const x = config.width + 100
    const y = Phaser.Math.Between(100, config.height - 100)
    const id = Phaser.Math.Between(1, 4)

    return {x, y, id}
  }

  static generate(scene, fires) {
    const data = Enemy.generateData()
    
    return new this({
      scene,
      fires,
      x: data.x,
      y: data.y,
      texture: "enemy",
      frame: `enemy${data.id}`,
      velocity: -222,
      bullet: {velocity: -500, delay: 1000, texture: "bullet"},
      origin: {x: 0, y: 0.5},
    })
  }

  init(data) {
    super.init(data)
    this.setOrigin(data.origin.x, data.origin.y)

    this.fires = data.fires || new Fires(this.scene)

    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    })

    this.bullet = data.bullet
  }

  fire() {
    this.fires.createFire(this)
  }

  isDead() {
    return this.x < -this.width
  }

  restart() {
    const data = Enemy.generateData()
    super.restart(data.x, data.y)
    this.setFrame(`enemy${data.id}`)
  }
}

export default Enemy