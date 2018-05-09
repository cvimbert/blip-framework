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
import {ConditionDef} from "../definitions/group-state-definition.class";
import {Sprite} from "./sprite.class";
import {Condition} from "../gamelogic/condition.class";

export class SpritesGroupState extends Dispatcher implements IState, Actionable {

    constructor(
        public group: GameUnitObject,
        public sprites: IDisplayable[] = [],
        public conditions: ConditionDef[] = [],
    ) {
        super();
    }

    display() {
        this.group.hide();
        this.sprites.forEach((sprite: Sprite, index: number) => {

            if (this.conditions[index].conditionId) {
                let condition: Condition = this.group.getCondition(this.conditions[index].conditionId);

                if (condition.eval() === !this.conditions[index].negated) {
                    sprite.display();
                }
            } else {
                sprite.display();
            }
        });
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