/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {DisplayElement} from "./display-element.class";
//import {BehaviorSubject} from "rxjs/Rx";

export class Sprite extends DisplayElement {

    //public visibility:BehaviorSubject<boolean>;
    private _visible:boolean;

    constructor(
        file:File,
        x:number,
        y:number,
        scale:number = 1,
        initVisibility:boolean = false
    ) {
        //this.visibility = new BehaviorSubject<boolean>(initVisibility);
        super(file, x, y, scale);
        this._visible = initVisibility;
    }

    displayInDOMElement(container:HTMLElement) {
        
        super.displayInDOMElement(container);

        if (this._visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        //this.visibility.next(true);

        if (this._DOMElement) {
            this._DOMElement.style.display = "block";
        }

        this._visible = true;
    }

    hide() {
        //this.visibility.next(false);

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