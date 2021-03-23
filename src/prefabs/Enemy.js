import config from "../config"
import MovableObject from "../prefabs/MovableObject"

class Enemy extends MovableObject {
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
    super.init()
    this.setOrigin(0)
    this.velocity = -200 * 4
  }

  isDead() {
    return this.x < -this.width
  }

  restart() {
    const data = Enemy.generateData()
    super.restart(data)
    this.setFrame(`enemy${data.id}`)
  }
}

export default Enemy