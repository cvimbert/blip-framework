/**
 * Created by Christophe on 28/03/2017.
 */
import {GameScene} from "./game-scene.class";
import {Sprite} from "./sprite.class";

export class HTMLGameScene extends GameScene {

    protected _DOMElement:HTMLElement;
    
    constructor(
        sprites:Object = {},
        groups:Object = {},
        states:Object = {}
    ) {
        super(sprites, groups, states);
    }

    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var div:HTMLElement = document.createElement("div");
            div.className = "game-scene";
            this._DOMElement = div;
            return div;
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
        var sprites:Sprite[] = super.loadSprites(spritesData);
        sprites.forEach((sprite:Sprite) => sprite.displayInDOMElement(this.getDOMElement()));
        return sprites;
    }
}