class Boom extends Phaser.GameObjects.Sprite {
  static generate(scene, x, y) {
    return new this({scene, x, y})
  }

  constructor(data) {
    super(data.scene, data.x, data.y, "boom")
    this.scene.add.existing(this)

    let frames = this.scene.anims.generateFrameNames("boom", {
      prefix: "boom",
      start: 1,
      end: 4,
    })

    this.scene.anims.create({
      frames,
      key: "boom",
      frameRate: 10,
      repeat: 0,
    })

    this.play("boom")

    this.once("animationcomplete", () => {
      this.destroy()
    })

  }
}

export default Boom