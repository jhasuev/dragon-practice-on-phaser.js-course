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
    
    return new this({
      scene,
      x: data.x,
      y: data.y,
      texture: "enemy",
      frame: `enemy${data.id}`,
      velocity: -222
    })
  }

  init(data) {
    super.init(data)
    this.setOrigin(0)
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