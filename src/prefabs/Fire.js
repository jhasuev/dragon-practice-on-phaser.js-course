import config from "../config"
import MovableObject from "../prefabs/MovableObject"

class Fire extends MovableObject {
  init() {
    super.init()
    this.velocity = 200 * 4
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

  isDead() {
    return this.x < -this.width || this.x > config.width
  }

  restart(source) {
    const data = Fire.generateData(source)
    super.restart(data)
  }
}

export default Fire