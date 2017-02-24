/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";
import {SpritesGroup} from "./sprites-group.class";
import {IState} from "../interfaces/IDisplayable.interface";

export class SpritesGroupState implements IState {

    constructor(
        public group:SpritesGroup,
        public sprites:Sprite[] = []
    ) {}

    display() {
        this.group.hide();
        this.sprites.forEach(sprite => sprite.show());
    }

    hide() {
        this.group.hide();
    }
}