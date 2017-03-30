/**
 * Created by Christophe on 28/03/2017.
 */
import {GameScene} from "./game-scene.class";
import {Sprite} from "./sprite.class";
import {Decoration} from "./decoration.class";

export class HTMLGameScene extends GameScene {

    private _DOMElement:HTMLElement;
    private _spritesContainer:HTMLElement;
    private _backgroundsContainer:HTMLElement;
    private _foregroundsContainer:HTMLElement;
    
    constructor(
        data:Object = {}
    ) {
        super(data);
    }

    loadData(data:Object):Object {
        var param:Object = super.loadData(data);
        this.loadDecorations(param["backgrounds"], this._backgroundsContainer);
        this.loadDecorations(param["foregrounds"], this._foregroundsContainer);
        return param;
    }

    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var div:HTMLElement = document.createElement("div");
            div.className = "game-scene";
            this._DOMElement = div;

            //backgrounds
            this._backgroundsContainer = document.createElement("div");
            this._backgroundsContainer.classList.add("backgrounds-container");
            div.appendChild(this._backgroundsContainer);

            // sprites
            this._spritesContainer = document.createElement("div");
            this._spritesContainer.classList.add("sprites-container");
            div.appendChild(this._spritesContainer);

            // foregrounds
            this._foregroundsContainer = document.createElement("div");
            this._foregroundsContainer.classList.add("foregrounds-container");
            div.appendChild(this._foregroundsContainer);

            return div;
        }
    }

    displayIn(element:string|HTMLElement) {
        var type:string = typeof element;

        if (element instanceof String) {
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
        var element:HTMLElement = document.getElementById(containerId);
        element.appendChild(this._DOMElement);
    }

    loadSprites(spritesData:Object):Sprite[] {
        this.getDOMElement();
        var sprites:Sprite[] = super.loadSprites(spritesData);
        sprites.forEach((sprite:Sprite) => sprite.displayInDOMElement(this._spritesContainer));
        return sprites;
    }

    loadDecorations(decorationDatas:Object[], container:HTMLElement = null):Decoration[] {
        this.getDOMElement();
        var decorations:Decoration[] = super.loadDecorations(decorationDatas);
        decorations.forEach((decoration:Decoration) => decoration.displayInDOMElement(container));
        return decorations;
    }
}