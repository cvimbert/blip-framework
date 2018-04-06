/**
 * Created by Christophe on 01/02/2017.
 */
import {SpritesGroup} from "./sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Dispatcher} from "../common/dispatcher.class";
import {ExtendedSpritesGroup} from "./extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class SpritesGroupState extends Dispatcher implements IState, Actionable {

    constructor(
        public group: SpritesGroup | ExtendedSpritesGroup | GameUnitObject,
        public sprites: IDisplayable[] = []
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

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "show":
                this.display();
                break;

            case "hide":
                this.hide();
                break;
        }
    }
}