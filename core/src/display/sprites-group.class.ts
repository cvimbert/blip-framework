/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";

export class SpritesGroup implements IDisplayable {

    constructor(
        public sprites:Sprite[]
    ) {}

    show() {
        this.sprites.forEach(sprite => sprite.show());
    }
    
    display() {
        this.show();
    }

    hide() {
        this.sprites.forEach(sprite => sprite.hide());
    }

    toggle() {
        this.sprites.forEach(sprite => sprite.toggle());
    }
}