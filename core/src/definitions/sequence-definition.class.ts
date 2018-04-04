import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {SpritesGroupState} from "../display/sprites-group-state.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Sequence} from "../spriteslogic/sequence.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class SequenceDefinition {

    // or others...
    states: string[] = [];
    statesTypes: string[] = [];

    constructor(
        definition: ResultUnit
    ) {
        for (let child of definition.children) {
            if (child.type === "free") {
                this.states.push(child.results["value"]);
                this.statesTypes.push("sprite");
            } else if (child.type === "typed") {
                this.states.push(child.results["value"]);
                this.statesTypes.push(child.results["type"]);
            }
        }
    }

    create(group: ExtendedSpritesGroup | GameUnitObject) {
        let states: IDisplayable[] = [];

        this.states.forEach((id: string, index: number) => {
            switch (this.statesTypes[index]) {
                case "sprite":
                    states.push(group.getSprite(id));
                    break;

                case "state":
                    states.push(group.getState(id));
                    break;
            }
        });

        return new Sequence(group, states);
    }
}