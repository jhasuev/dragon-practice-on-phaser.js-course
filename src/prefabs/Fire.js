import config from "../config"
import MovableObject from "../prefabs/MovableObject"

class Fire extends MovableObject {
  init(data) {
    super.init(data)
  }

  static generateData(source) {
    return {
      x: source.x,
      y: source.y,
      texture: source.bullet.texture,
      velocity: source.bullet.velocity,
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
    super.restart(data.x, data.y)
  }
}

export default Fire