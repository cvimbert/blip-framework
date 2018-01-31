/**
 * Created by Christophe on 01/02/2017.
 */
import {Sprite} from "./sprite.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {IState} from "../interfaces/IState.interface";
import {SpritesGroupState} from "./sprites-group-state.class";
import {Dispatcher} from "../common/dispatcher.class";

export class SpritesGroup extends Dispatcher implements IDisplayable {

    constructor(
        public sprites:Sprite[],
        public states:IState[] = []
    ) {
        super();
    }

    show() {
        this.sprites.forEach(sprite => sprite.show());
    }

    isVisible():boolean {
        return true;
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

    createState(sprites:IDisplayable[]):SpritesGroupState {

        sprites.forEach((sprite:IDisplayable) => {
            if (sprites.indexOf(sprite) === -1) {
                console.error("State sprite is not in group");
                return null;
            }
        });

        let state:SpritesGroupState = new SpritesGroupState(this, sprites);
        this.states.push(state);
        return state;
    }
}