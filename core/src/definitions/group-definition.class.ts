import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GroupStateDefinition} from "./group-state-definition.class";
import {SequenceDefinition} from "./sequence-definition.class";
import {AnimationDefinition} from "./animation-definition.class";
import {GraphDefinition} from "./graph-definition.class";
import {SpritesGroup} from "../display/sprites-group.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class GroupDefinition {

    spriteIds: string[] = [];
    states: {[key:string]: GroupStateDefinition} = {};
    sequences: {[key: string]: SequenceDefinition} = {};
    animations: {[key:string]: AnimationDefinition} = {};
    graphs: {[key: string]: GraphDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {

        definition.getResult("simplePropertyGroup@groupName=sprites/free").forEach((definition: ResultUnit) => {
            this.spriteIds.push(definition.results["value"])
        });

        definition.getResult("typedObject@type=state/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.states[definition.results["groupName"]] = new GroupStateDefinition(definition);
        });

        definition.getResult("typedObject@type=sequence/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.sequences[definition.results["groupName"]] = new SequenceDefinition(definition);
        });

        definition.getResult("typedObject@type=animation/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.animations[definition.results["groupName"]] = new AnimationDefinition(definition);
        });

        definition.getResult("typedObject@type=graph/bracketsGroup").forEach((definition: ResultUnit) => {
            this.graphs[definition.results["groupName"]] = new GraphDefinition(definition);
        });
    }

    create(scope: GameUnitObject): ExtendedSpritesGroup {
        return new ExtendedSpritesGroup(this, scope);
    }
}