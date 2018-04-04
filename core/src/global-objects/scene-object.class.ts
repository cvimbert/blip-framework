import {ControlSprite} from "../display/control-sprite.class";
import {Decoration} from "../display/decoration.class";

export class SceneObject {

    protected _DOMElement:HTMLElement;
    protected _spritesContainer:HTMLElement;
    protected _backgroundsContainer:HTMLElement;
    protected _foregroundsContainer:HTMLElement;
    protected _controlsContainer:HTMLElement;

    private _params:Object;

    protected scale: number = 1;

    constructor(

    ) {

    }

    /*loadData(data:Object):Object {
        var param:Object = super.loadData(data);
        this.loadDecorations(param["backgrounds"], this._backgroundsContainer);
        this.loadDecorations(param["foregrounds"], this._foregroundsContainer);
        this.loadControls(param["controls"], this._controlsContainer);
        return param;
    }*/

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
}