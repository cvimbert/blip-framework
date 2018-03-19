import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {SpritesGroupState} from "../display/sprites-group-state.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Sequence} from "../spriteslogic/sequence.class";

export class SequenceDefinition {

    // or others...
    states: string[] = [];

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("free").forEach((result: ResultUnit) => {
            this.states.push(result.results["value"]);
        });
    }

    create(group: ExtendedSpritesGroup) {
        let states: IDisplayable[] = [];

        this.states.forEach((id: string) => {
            states.push(group.getState(id));
        });

        return new Sequence(group, states);
    }
}