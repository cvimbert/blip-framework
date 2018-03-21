import {GroupDefinition} from "../definitions/group-definition.class";
import {Sprite} from "./sprite.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Dispatcher} from "../common/dispatcher.class";
import {IState} from "../interfaces/IState.interface";
import {Sequence} from "../spriteslogic/sequence.class";
import {Animation} from "../spriteslogic/animation.class";
import {Graph} from "../graphs/graph.class";

export class ExtendedSpritesGroup extends Dispatcher implements IDisplayable {

    sprites: Sprite[] = [];
    states: {[key: string]: IDisplayable} = {};
    sequences: {[key: string]: Sequence} = {};
    animations: {[key: string]: Animation} = {};
    graphs: {[key: string]: Graph} = {};

    constructor(
        definition: GroupDefinition,
        private scope: GameUnitObject
    ) {
        super();
        this.fromDefinition(definition);
    }

    fromDefinition(definition: GroupDefinition) {
        definition.spriteIds.forEach((id: string) => {
            this.sprites.push(this.scope.getSprite(id));
        });

        for (let id in definition.states) {
            this.states[id] = definition.states[id].create(this);
        }

        for (let id in definition.sequences) {
            this.sequences[id] = definition.sequences[id].create(this);
        }

        for (let id in definition.animations) {
            this.animations[id] = definition.animations[id].create(this, this.scope);
        }

        for (let id in definition.graphs) {
            this.graphs[id] = definition.graphs[id].create(this, this.scope);
        }
    }

    getSprite(id: string): Sprite {
        return this.sprites[id];
    }

    getState(id: string): IDisplayable {
        return this.states[id];
    }

    getSequence(id: string): Sequence {
        return this.sequences[id];
    }

    hide() {

    }

    display() {

    }
}