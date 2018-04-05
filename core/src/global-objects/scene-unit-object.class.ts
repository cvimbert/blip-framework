import {SceneObjectDefinition} from "../definitions/scene-object-definition.class";
import {Sprite} from "../display/sprite.class";
import {Clock} from "../gamelogic/clock.class";
import {Variable} from "../gamelogic/variables/variable.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {Control} from "../gamelogic/control.class";
import {SceneObject} from "./scene-object.class";
import {Decoration} from "../display/decoration.class";
import {ControlSprite} from "../display/control-sprite.class";
import {GameUnitObject} from "./game-unit-object.class";
import {GameObjectDefinition} from "../definitions/game-object-definition.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class SceneUnitObject extends SceneObject {

    backgrounds: Decoration[] = [];
    clocks: {[key: string]: Clock} = {};
    variables: {[key: string]: Variable} = {};
    triggers: {[key: string]: BaseTrigger} = {};
    controls: {[key: string]: Control} = {};
    controlSprites: {[key: string]: ControlSprite} = {};

    objects: {[key: string]: GameUnitObject} = {};

    constructor(
        definition: SceneObjectDefinition,
        private objectsBank: {[key: string]: GameObjectDefinition}
    ) {
        super();

        this.scale = definition.scale;

        for (let id in definition.backgrounds) {
            this.backgrounds.push(definition.backgrounds[id].createDecorationSprite());
        }

        for (let id in definition.clocks) {
            this.clocks[id] = definition.clocks[id].create();
        }

        for (let id in definition.variables) {
            this.variables[id] = definition.variables[id].create();
        }

        for (let id in definition.controls) {
            let controls: Control | {[key: string]: Control} = definition.controls[id].create();

            if (controls instanceof Control) {
                this.controls[id] = controls;
                this.controlSprites[id] = controls.sprite;
            } else {
                for (let zoneId in controls) {
                    if (!this.controlSprites[id]) {
                        this.controlSprites[id] = controls[zoneId].sprite;
                    }

                    this.controls[id + "_" + zoneId] = controls[zoneId];
                }
            }
        }

        for (let id in definition.triggers) {
            this.triggers[id] = definition.triggers[id].create(this);
        }

        for (let id in definition.objects) {
            this.objects[id] = definition.objects[id].create(this.objectsBank, this);
        }

        this.displayIn(document.body);
        this.getDOMElement();
        this.displayDecorations();
        this.displayControls();

        // TODO temp
        setTimeout(() => {
            this.initialize();
        });
    }

    initialize() {
        // objects initialization
        for (let id in this.objects) {
            if (this.objects[id].scripts["start"]) {
                this.objects[id].scripts["start"].execute();
            }
        }
    }

    displaySprites() {
        for (let id in this.objects) {
            for (let spriteId in this.objects[id].sprites) {
                if (this.objects[id].sprites.hasOwnProperty(spriteId)) {
                    this.objects[id].sprites[spriteId].displayInDOMElement(this._spritesContainer);
                }
            }
        }
    }

    displayDecorations() {
        this.backgrounds.forEach((sprite: Sprite) => {
            sprite.displayInDOMElement(this._backgroundsContainer)
        });
    }

    displayControls() {
        for (let id in this.controlSprites) {
            this.controlSprites[id].displayInDOMElement(this._controlsContainer);
        }
    }

    getControl(id: string): Control {
        return this.controls[id];
    }

    getClock(id: string): Clock {
        return this.clocks[id];
    }

    getVariable(id: string): Variable {
        return this.variables[id];
    }

    getTrigger(id: string): BaseTrigger {
        return this.triggers[id];
    }

    getObject(id: string): GameUnitObject {
        return this.objects[id];
    }

    getActionable(type: string, id: string): Actionable {
        return;
    }
}