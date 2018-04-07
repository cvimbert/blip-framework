import {GameObjectDefinition} from "../definitions/game-object-definition.class";
import {Sprite} from "../display/sprite.class";
import {Clock} from "../gamelogic/clock.class";
import {Sound} from "../sound/sound.class";
import {Variable} from "../gamelogic/variables/variable.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {Graph} from "../graphs/graph.class";
import {SceneUnitObject} from "./scene-unit-object.class";
import {Control} from "../gamelogic/control.class";
import {Dispatcher} from "../common/dispatcher.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Sequence} from "../spriteslogic/sequence.class";
import {Animation} from "../spriteslogic/animation.class";
import {SpritesGroupState} from "../display/sprites-group-state.class";
import {Script} from "../script/script.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class GameUnitObject extends Dispatcher implements IDisplayable {

    sprites: {[key: string]: Sprite} = {};
    clocks: {[key: string]: Clock} = {};
    sounds: {[key: string]: Sound} = {};
    variables: {[key: string]: Variable} = {};
    groups: {[key: string]: ExtendedSpritesGroup} = {};
    graphs: {[key: string]: Graph} = {};
    triggers: {[key: string]: BaseTrigger} = {};
    sequences: {[key: string]: Sequence} = {};
    animations: {[key: string]: Animation} = {};
    states: {[key: string]: SpritesGroupState} = {};

    objects: {[key: string]: GameUnitObject} = {};

    scripts: {[key: string]: Script} = {};

    constructor(
        definition: GameObjectDefinition,
        public objectsBank: {[key: string]: GameObjectDefinition},
        public parent: GameUnitObject | SceneUnitObject = null,
        public x: number = 0,
        public y: number = 0
    ) {
        super();
        this.preinit(definition);
    }

    preinit(definition: GameObjectDefinition) {
        this.initializeObject(definition);
    }

    initializeObject(definition: GameObjectDefinition) {
        for (let id in definition.sprites) {
            this.sprites[id] = definition.sprites[id].createBasicSprite(this.x, this.y);
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

        for (let id in definition.triggers) {
            this.triggers[id] = definition.triggers[id].create(this);
        }

        for (let id in definition.graphs) {
            this.graphs[id] = definition.graphs[id].create(this, this);
        }

        for (let id in definition.objects) {
            this.objects[id] = definition.objects[id].create(this.objectsBank, this);
        }

        for (let id in definition.states) {
            this.states[id] = definition.states[id].create(this);
        }

        for (let id in definition.sequences) {
            this.sequences[id] = definition.sequences[id].create(this);
        }

        for (let id in definition.animations) {
            this.animations[id] = definition.animations[id].create(this, this);
        }

        for (let id in definition.scripts) {
            this.scripts[id] = definition.scripts[id].create(this);
        }
    }

    display() {

    }

    hide() {

    }

    getSprite(id: string): Sprite {
        return this.sprites[id] || this.parent.getSprite(id);
    }

    getClock(id: string): Clock {
        return this.clocks[id] || this.parent.getClock(id);
    }

    getTrigger(id: string): BaseTrigger {
        return this.triggers[id] || this.parent.getTrigger(id);
    }

    getGroup(id: string): ExtendedSpritesGroup {
        return this.groups[id] || this.parent.getGroup(id);
    }

    getControl(id: string): Control {
        return this.parent.getControl(id);
    }

    getGraph(id: string): Graph {
        return this.graphs[id] || this.parent.getGraph(id);
    }

    getSequence(id: string): Sequence {
        return this.sequences[id] || this.parent.getSequence(id);
    }

    getAnimation(id: string): Animation {
        return this.animations[id] || this.parent.getAnimation(id);
    }

    getState(id: string): SpritesGroupState {
        return this.states[id] || this.parent.getState(id);
    }

    getVariable(id: string): Variable {
        return this.variables[id] || this.parent.getVariable(id);
    }

    getSound(id: string): Sound {
        return this.sounds[id] || this.parent.getSound(id);
    }

    getScript(id: string): Script {
        return this.scripts[id] || this.parent.getScript(id);
    }

    getActionable(type: string, id: string): Actionable {
        switch (type) {
            case "animation":
                return this.getAnimation(id);

            case "control":
                return this.getControl(id);

            case "clock":
                return this.getClock(id);

            case "graph":
                return this.getGraph(id);

            case "sequence":
                return this.getSequence(id);

            case "sprite":
                return this.getSprite(id);

            case "state":
                return this.getState(id);

            case "variable":
                return this.getVariable(id);

            case "sound":
                return this.getSound(id);

            case "script":
                return this.getScript(id);
        }
    }

    executeScript(id: string) {
        this.scripts[id].execute();
    }
}