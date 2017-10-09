/**
* @author       Juan David Nicholls Cardona <jdnichollsc@hotmail.com>
* @copyright    2017 Juan David Nicholls Cardona
* @license      {@link http://opensource.org/licenses/MIT}
* @version      2.0.0 - 2017-10-06
*/

import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';
import {  } from 'phaser-ce';

/**
 * The IonPhaser plugin.
 *
 * With this Angular directive you can integrate Phaser Framework with Ionic.
 */
@Directive({
  selector: 'ion-phaser'
})
export class IonPhaser implements OnInit {
  /**
   * @property {Boolean} initialized - To initialize the plugin manually.
   * @protected
   */
  initialized: boolean;

  /**
   * @property {String} currentState - The current state name.
   * @protected
   */
  currentState: String;

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello IonPhaserDirective Directive');
  }

  ngOnInit(){
    alert("Ey!!")
  }
}
