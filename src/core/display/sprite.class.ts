/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {BehaviorSubject} from "rxjs/Rx";

export class Sprite {

    public visibility:BehaviorSubject<boolean>;
    private _visible:boolean;
    private _DOMElement:HTMLElement;

    constructor(
        public file:File,
        public x:number,
        public y:number,
        public scale:number = 1,
        initVisibility:boolean = false
    ) {
        this.visibility = new BehaviorSubject<boolean>(initVisibility);
        this._visible = initVisibility;
    }

    getDOMElement():HTMLElement {
        var div:HTMLElement = document.createElement("div");
        var image:HTMLElement = document.createElement("img");
        image["src"] = this.file.path;
        div.appendChild(image);
        div.className = "game-element";
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        return div;
    }

    displayInDOMElement(container:HTMLElement) {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);

        if (this._visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        this.visibility.next(true);

        if (this._DOMElement) {
            this._DOMElement.style.display = "block";
        }

        this._visible = true;
    }

    hide() {
        this.visibility.next(false);

        if (this._DOMElement) {
            this._DOMElement.style.display = "none";
        }

        this._visible = false;
    }

    toggle() {
        if (this._visible) {
            this.hide();
        } else {
            this.show();
        }
    }
}