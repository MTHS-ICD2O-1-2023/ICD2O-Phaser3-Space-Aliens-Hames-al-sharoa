/* global Phaser */

// Copyright (c) 2024 Hames.al-sharoa ALL rights reserved
//
// Created by: Hames.al-sharoa
// created on: apr 2024
// This is the phaser3 game configuration file

 // scene import statements
  import splashScene from "./splashScene.js"
import splasgScene from "./splashScene.js"
  import TitleScene from "./titleScene.js"

 // create the new scene
  const splashScene = new splasgScene
  const titleScene = new TitleScene()

  /**
 * start phaser Game.
 */
  const config = {
  Type: Phaser.AUT0,
  Width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
}

 const game = new Phaser.Game(config)
 // console.log(game)

 // load scenes
 // Note: remember any "key" is global and CAN NOT be reused!
 ame.scene.add("splashScene", splashScene)
 game.scene.add("titleScene", titleScene)

 // the state scene
 game.scene.start("splashScene")
