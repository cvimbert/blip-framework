import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpritesGroupState} from "../display/sprites-group-state.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";

export interface ConditionDef {
    negated: boolean,
    conditionId: string
}

export class GroupStateDefinition {

    // or other, see later
    sprites: string[] = [];
    altSprites: string[] = [];
    conditions: ConditionDef[] = [];

    constructor(
        definition: ResultUnit
    ) {
        console.log("def", definition);

        definition.children.forEach((result: ResultUnit) => {
            this.sprites.push(result.results["value"]);
            this.altSprites.push(result.results["altValue"]);

            this.conditions.push({
                conditionId: result.results["conditionId"],
                negated: result.results["negation"] === "!"
            });
        });
    }

    create(group: GameUnitObject): SpritesGroupState {
        let displayables: IDisplayable[] = [];

        this.sprites.forEach((id: string) => {
            displayables.push(group.getSprite(id));
        });

        return new SpritesGroupState(group, displayables, this.conditions);
    }
}