/* global Phaser */

// Copyright (c) 2024 Hames.al-sharoa ALL rights reserved
//
// Created by: Hames.al-sharoa
// This is the Splasg Scene.

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */

  constructor() {
   super({ key: "splashScene"})
}

/**
 * Can be defined on your own Scenes.
 * This methos is called by thr Scene Manager when the scene starts,
 *   before preload() and  create().
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
 init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
 }