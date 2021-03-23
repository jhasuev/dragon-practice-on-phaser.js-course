import Enemy from "./Enemy"

class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
    this.count = 3
    this.createTimer()
  }

  createTimer() {
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.onTimerTick,
      callbackScope: this,
    })
  }
  
  onTimerTick() {
    if(this.getLength() < this.count) {
      this.createEnemy()
    } else {
      this.timer.remove()
    }
  }

  createEnemy() {
    let enemy = Enemy.generate(this.scene)
    this.add(enemy)
    enemy.move()
  }
}

export default Enemies