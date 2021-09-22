import "./reset.css";
import "./style.css";

import Phaser from "phaser";
import GameScene from "./src/scenes/GameScene";

const GAME_WIDTH = 768;
const GAME_HEIGHT = 1366;

const config = {
  type: Phaser.AUTO,
  parent: "phaser-canvas",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  scene: GameScene,
};

const game = new Phaser.Game(config);
