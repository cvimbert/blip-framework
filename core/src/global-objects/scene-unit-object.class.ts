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

export class SceneUnitObject extends GameUnitObject {

    // for display in DOM
    private _DOMElement:HTMLElement;
    private _spritesContainer:HTMLElement;
    private _backgroundsContainer:HTMLElement;
    private _foregroundsContainer:HTMLElement;
    private _controlsContainer:HTMLElement;

    private scale: number = 1;
    //

    backgrounds: Decoration[] = [];
    controls: {[key: string]: Control} = {};
    controlSprites: {[key: string]: ControlSprite} = {};

    constructor(
        definition: SceneObjectDefinition,
        public objectsBank: {[key: string]: GameObjectDefinition},
        public element: HTMLElement = null
    ) {
        super(definition, objectsBank);
        this.scale = definition.scale;

        for (let id in definition.backgrounds) {
            this.backgrounds.push(definition.backgrounds[id].createDecorationSprite());
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

        if (this.element) {
            this.displayIn(this.element);
        } else {
            this.displayIn(document.body);
        }

        this.getDOMElement();
        this.displayDecorations();
        this.displayControls();

        // TODO temp
        setTimeout(() => {
            this.initialize();
        });

        this.initializeObject(definition);
    }

    preinit() {
        // must be empty for override
    }

    initialize() {
        // objects initialization
        for (let id in this.objects) {
            if (this.objects[id].scripts["start"]) {
                this.objects[id].scripts["start"].execute();
            }
        }

        if (this.scripts["start"]) {
            this.scripts["start"].execute();
        }
    }

    displaySprites() {
        this.addToScene(this._spritesContainer);
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

    // for display

    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        } else {

            let div:HTMLElement = document.createElement("div");
            div.className = "game-scene";
            this._DOMElement = div;

            let gameContainer:HTMLElement = document.createElement("div");
            gameContainer.className = "game-container";
            div.appendChild(gameContainer);

            gameContainer.style.transform = "scale(" + this.scale + ")";

            //backgrounds
            this._backgroundsContainer = document.createElement("div");
            this._backgroundsContainer.classList.add("backgrounds-container");
            gameContainer.appendChild(this._backgroundsContainer);

            // sprites
            this._spritesContainer = document.createElement("div");
            this._spritesContainer.classList.add("sprites-container");
            gameContainer.appendChild(this._spritesContainer);

            // foregrounds
            this._foregroundsContainer = document.createElement("div");
            this._foregroundsContainer.classList.add("foregrounds-container");
            gameContainer.appendChild(this._foregroundsContainer);

            // controls
            this._controlsContainer = document.createElement("div");
            this._controlsContainer.classList.add("controls-container");
            div.appendChild(this._controlsContainer);

            return div;
        }
    }

    displayIn(element:string|HTMLElement) {
        let type:string = typeof element;

        if (type === "string") {
            this.displayInDOMElementById(element as string);
        } else if (element instanceof HTMLElement) {
            this.displayInDOMElement(element as HTMLElement);
        }
    }

    displayInDOMElement(container:HTMLElement):HTMLElement {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);
        return this._DOMElement;
    }

    displayInDOMElementById(containerId:string) {
        this._DOMElement = this.getDOMElement();
        let element:HTMLElement = document.getElementById(containerId);
        element.appendChild(this._DOMElement);
    }

    destroy() {
        for (let id in this.controls) {
            this.controls[id].removeDocumentListeners();
        }
    }
}