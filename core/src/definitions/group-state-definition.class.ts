import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpritesGroupState} from "../display/sprites-group-state.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";

export class GroupStateDefinition {

    // or other, see later
    sprites: string[] = [];

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("free").forEach((result: ResultUnit) => {
            this.sprites.push(result.results["value"]);
        });
    }

    create(group: ExtendedSpritesGroup | GameUnitObject): SpritesGroupState {
        let sprites: IDisplayable[] = [];

        this.sprites.forEach((id: string) => {
            sprites.push(group.getSprite(id));
        });

        return new SpritesGroupState(group, sprites);
    }
}