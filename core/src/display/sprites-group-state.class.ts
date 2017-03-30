/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";
import {SpritesGroup} from "./sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {IDisplayable} from "../interfaces/IDisplayable.interface";

export class SpritesGroupState implements IState {

    constructor(
        public group:SpritesGroup,
        public sprites:IDisplayable[] = []
    ) {}

    display() {
        this.group.hide();
        this.sprites.forEach(sprite => sprite.display());
    }

    hide() {
        this.group.hide();
    }
}