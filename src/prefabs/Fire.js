import config from "../config"
import MovableObject from "../prefabs/MovableObject"

class Fire extends MovableObject {
  init(data) {
    super.init(data)
  }

  static generateData(source) {
    return {
      x: source.x + source.width,
      y: source.y + source.height / 2,
      texture: "fire",
      velocity: 1000,
    }
  }

  static generate(scene, source) {
    const data = this.generateData(source)
    return new this({
      scene,
      x: data.x,
      y: data.y,
      texture: data.texture,
      velocity: data.velocity
    })
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