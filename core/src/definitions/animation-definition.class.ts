import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {Animation} from "../spriteslogic/animation.class";
import {Clock} from "../gamelogic/clock.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class AnimationDefinition {

    sequenceId: string;
    period: number;
    clockId: string;

    iterations: number;
    interruptable: boolean;

    constructor(
        definition: ResultUnit
    ) {
        this.sequenceId = definition.children[0].results["value"];

        let clockResult: ResultUnit = definition.children[1];

        if (clockResult.type === "number") {
            this.period = +clockResult.results["value"];
        } else if (clockResult.type === "typed" && clockResult.results["type"] === "clock") {
            this.clockId = clockResult.results["value"];
        }

        if (definition.children[2]) {
            this.iterations = +definition.children[2].results["value"];
        }

        if (definition.children[3]) {
            this.interruptable = definition.children[3].results["value"] === "true";
        }
    }

    create(group: ExtendedSpritesGroup | GameUnitObject, scope: GameUnitObject): Animation {
        let clockValue: number | Clock = this.clockId ? scope.getClock(this.clockId) : this.period;
        return new Animation(group.getSequence(this.sequenceId), this.iterations, clockValue, this.interruptable);
    }
}