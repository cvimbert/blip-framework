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
import {Condition} from "../gamelogic/condition.class";
import {Gettable} from "../interfaces/gettable.interface";
import {Trigger} from "../triggers/trigger.class";
import {Triggerable} from "../interfaces/triggerable.interface";
import {EventListener} from "../../";

export class GameUnitObject extends Dispatcher implements IDisplayable, Actionable, Gettable {

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
    conditions: {[key: string]: Condition} = {};

    objects: {[key: string]: GameUnitObject} = {};

    scripts: {[key: string]: Script} = {};

    bindedListeners: {[key: string]: EventListener} = {};

    constructor(
        private definition: GameObjectDefinition,
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

        for (let id in definition.graphs) {
            this.graphs[id] = definition.graphs[id].create(this, this);
        }



        for (let id in definition.conditions) {
            this.conditions[id] = definition.conditions[id].create(this);
        }



        for (let id in this.definition.triggers) {
            this.triggers[id] = this.definition.triggers[id].create(this);
        }

    }

    initScripts() {
        console.log("init");
        for (let id in this.definition.scripts) {
            console.log("i", id);
            this.scripts[id] = this.definition.scripts[id].create(this);
        }

        for (let id in this.objects) {
            this.objects[id].initScripts();
        }
    }

    display() {
        let startScript: Script = this.scripts["start"];

        if (startScript) {
            startScript.execute();
        }
    }

    addToScene(container:any) {
        for (let id in this.sprites) {
            this.sprites[id].displayInDOMElement(container);
        }

        for (let id in this.objects) {
            this.objects[id].addToScene(container);
        }

        // temporary
        // this.display();
    }

    hide() {
        for (let id in this.sprites) {
            this.sprites[id].hide();
        }

        for (let id in this.triggers) {
            this.triggers[id].disable();
        }

        let nodeOutScript: Script = this.scripts["nodeout"];

        if (nodeOutScript) {
            nodeOutScript.execute();
        }

        let exitScript: Script = this.scripts["exit"];

        if (exitScript) {
            exitScript.execute();
        }
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

    getObject(id: string): GameUnitObject {
        return this.objects[id] || this.parent.getObject(id);
    }

    getScript(id: string): Script {
        return this.scripts[id] || this.parent.getScript(id);
    }

    getCondition(id: string): Condition {
        return this.conditions[id] || this.parent.getCondition(id);
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

            case "object":
                return this.getObject(id);

            case "trigger":
                return this.getTrigger(id);
        }
    }

    getGettable(type: string, id: string): Gettable {
        switch (type) {
            case "variable":
                return this.getVariable(id);

            case "graph":
                return this.getGraph(id);

        }
    }

    getTriggerable(type: string, id: string): Triggerable {
        switch (type) {
            case "control":
                return this.getControl(id);

            case "clock":
                return this.getClock(id);

            case "sequence":
                return this.getSequence(id);

            case "state":
                return this.getState(id);
        }
    }

    getSceneBounds(): { width: number, height: number } {

        let ret = { width: 0, height: 0 };

        for (let id in this.sprites) {
            let bounds: { x:number, y: number } = this.sprites[id].getBoundPoint();

            if (bounds.x > ret.width) {
                ret.width = bounds.x;
            }

            if (bounds.y > ret.height) {
                ret.height = bounds.y;
            }
        }

        return ret;
    }

    executeScript(id: string) {
        this.scripts[id].execute();
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "execute":
                this.executeScript(args[0]);
                break;

            case "hide":
                this.hide();
                break;

            case "randomAction":
                let rndVal: number = Math.floor(Math.random() * args.length);
                this.executeScript(args[rndVal]);
                break;

            case "console":
                console.log("!!!!MSG", args);
                break;
        }
    }

    getProperty(propertyName: string): any {
        switch (propertyName) {

        }
    }

    destroy() {
        for (let id in this.clocks) {
            this.clocks[id].stop();
        }
    }
}