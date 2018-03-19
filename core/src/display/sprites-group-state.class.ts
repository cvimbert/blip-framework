/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";
import {SpritesGroup} from "./sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Dispatcher} from "../common/dispatcher.class";
import {ExtendedSpritesGroup} from "./extended-sprites-group.class";

export class SpritesGroupState extends Dispatcher implements IState {

    constructor(
        public group:SpritesGroup|ExtendedSpritesGroup,
        public sprites:IDisplayable[] = []
    ) {
        super();
    }

    display() {
        this.group.hide();
        this.sprites.forEach(sprite => sprite.display());
    }

    hide() {
        this.group.hide();
    }

    isVisible():boolean {
        return true;
    }
}