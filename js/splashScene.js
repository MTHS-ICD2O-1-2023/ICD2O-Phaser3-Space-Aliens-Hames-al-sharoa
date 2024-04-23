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

 /**
  * Can be defined on your own Scenes.
  * Yse it to ;oad assets
 */
 preload() {
   console.log("Splash Scene")
 }

 /**
  * Can be defined on your own Scenes.
  * Use it to create yoyr objects
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
 create(data) {
   //pass
 }

 /**
  * Should be overridden by your own Scenes.
  * This method is called once per game step while the scene is running.
  * @param {number} time - The current time.
  * @param {number} delta - The delta time in ms since the last frame.
  */
    update(time, delta) {
      // pass
    }
   }

   export default SplashScene