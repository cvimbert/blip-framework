import {GameObjectDefinition} from "../definitions/game-object-definition.class";
import {Sprite} from "../display/sprite.class";
import {Clock} from "../gamelogic/clock.class";
import {Sound} from "../sound/sound.class";
import {Variable} from "../gamelogic/variables/variable.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {BaseTrigger} from "../triggers/base-trigger.class";

export class GameUnitObject {

    sprites: {[key: string]: Sprite} = {};
    clocks: {[key: string]: Clock} = {};
    sounds: {[key: string]: Sound} = {};
    variables: {[key: string]: Variable} = {};
    groups: {[key: string]: ExtendedSpritesGroup} = {};

    constructor(
        definition: GameObjectDefinition
    ) {
        for (let id in definition.sprites) {
            this.sprites[id] = definition.sprites[id].create();
        }

        for (let id in definition.clocks) {
            this.clocks[id] = definition.clocks[id].create();
        }

        for (let id in definition.sounds) {
            this.sounds[id] = definition.sounds[id].create();
        }

        for (let id in definition.variables) {
            this.variables[id] = definition.variables[id].create();
        }

        for (let id in definition.groups) {
            this.groups[id] = definition.groups[id].create(this);
        }
    }

    getSprite(id: string): Sprite {
        return this.sprites[id];
    }

    getClock(id: string): Clock {
        return this.clocks[id];
    }

    getTrigger(id: string): BaseTrigger {
        return new BaseTrigger();
    }
}