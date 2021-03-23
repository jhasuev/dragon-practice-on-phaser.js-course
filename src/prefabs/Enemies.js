import Enemy from "./Enemy"

class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
    this.countMax = 3
    this.countCreated = 0
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
    if(this.countCreated < this.countMax) {
      this.createEnemy()
    } else {
      this.timer.remove()
    }
  }

  createEnemy() {
    let enemy = this.getFirstDead()
    if (!enemy) {
      enemy = Enemy.generate(this.scene)
      this.add(enemy)
    } else {
      enemy.restart()
    }

    enemy.move()

    this.countCreated++
  }
}

export default Enemies