/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";

export class SpritesGroup {

    constructor(
        public sprites:Sprite[]
    ) {}

    show() {
        this.sprites.forEach(sprite => sprite.show());
    }

    hide() {
        this.sprites.forEach(sprite => sprite.hide());
    }

    toggle() {
        this.sprites.forEach(sprite => sprite.toggle());
    }
}