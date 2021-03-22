import BootScene from "./scenes/BootScene"
import PreloadScene from "./scenes/PreloadScene"
import StartScene from "./scenes/StartScene"
import GameScene from "./scenes/GameScene"

export default {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [
    BootScene,
    PreloadScene,
    StartScene,
    GameScene,
  ],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
}
