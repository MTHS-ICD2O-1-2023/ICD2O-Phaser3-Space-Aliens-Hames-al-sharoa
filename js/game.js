/* global Phaser */

// Copyright (c) 2024 Hames.al-sharoa ALL rights reserved
//
// Created by: Hames.al-sharoa
// This is the phaser3 game configuration file

// sene import statements
import SplashScene from "./splashScene.js"

// create the new scenes
  const splashScene = SplashScene()

/** 
 * Start  Phaser Game.
  */
 const config = {
   type: Phaser.AUTO,
   width: 1920,
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
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)

// the start scene
game.scene.start("splashScene")
