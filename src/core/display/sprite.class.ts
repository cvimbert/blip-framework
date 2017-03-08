/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {ImageDisplayElement} from "./image-display-element";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Events} from "../common/events.class";
//import {BehaviorSubject} from "rxjs/Rx";

export class Sprite extends ImageDisplayElement implements IDisplayable{

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
        
        var elem:HTMLElement = super.displayInDOMElement(container);

        if (this._visible) {
            this.show();
        } else {
            this.hide();
        }

        return elem;
    }

    show() {
        //this.visibility.next(true);

        /*if (this._DOMElement) {
            this._DOMElement.style.display = "block";
        }*/

        this.dispatchEvent(Events.DISPLAYED);

        this._DOMElement.classList.remove("inactive");
        this._DOMElement.classList.add("active");

        this._visible = true;
    }

    display() {
        this.show();
    }

    hide() {
        //this.visibility.next(false);

        this.dispatchEvent(Events.HIDDEN);

        this._DOMElement.classList.add("inactive");
        this._DOMElement.classList.remove("active");

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