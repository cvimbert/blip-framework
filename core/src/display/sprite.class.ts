/**
 * Created by Christophe on 01/02/2017.
 */
import {ImageDisplayElement} from "./image-display-element";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Status} from "../common/status.class";
import {Utils} from "../common/utils.class";
import {File} from "../files/file.class";

export class Sprite extends ImageDisplayElement implements IDisplayable {
    
    private _visible:boolean;

    /**
     * The sprite is the basic display unit in Blip
     * @param file
     * @param x
     * @param y
     * @param scale
     * @param initVisibility
     */
    constructor(
        file:File,
        x:number,
        y:number,
        scale:number = 1,
        initVisibility:boolean = false
    ) {
        super(file, x, y, scale);
        this._visible = initVisibility;
    }


    /**
     * Create a sprite from raw datas
     * @param data
     * @returns {Sprite}
     */
    static fromData(data:Object):Sprite {
        
        var defaults:Object = {
            file: "",
            x: 0,
            y: 0,
            scale: 1,
            initVisibility: false
        };
        
        var param:Object = Utils.verifyAndExtends(data, defaults);
        var file:File = new File(param["file"]);
        
        return new Sprite(file, param["x"], param["y"], param["scale"], param["initVisibility"]);
    }


    /**
     * Displays the sprite in a DOM element
     * @param container - The DOM element where the sprite will be append
     * @returns {HTMLElement}
     */
    displayInDOMElement(container:HTMLElement):HTMLElement {
        var elem:HTMLElement = super.displayInDOMElement(container);
        this._setVisibility();
        return elem;
    }


    /**
     * Displays the sprite in a DOM element, selected by id
     * @param id
     */
    displayInDocumentById(id:string) {
        super.displayInDocumentById(id);
        this._setVisibility();
    }


    /**
     * Show or hide the sprite, according to the visibility boolean variable
     * @private
     */
    private _setVisibility() {

        if (this._visible) {
            this.show();
        } else {
            this.hide();
        }
    }


    /**
     * Displays the sprite and sets its status to visible
     */
    show() {

        this.setStatus(Status.VISIBILITY, Status.VISIBLE);

        this._DOMElement.classList.remove("inactive");
        this._DOMElement.classList.add("active");

        this._visible = true;
    }


    /**
     * Alias to Show()
     */
    display() {
        this.show();
    }


    /**
     * Hides the sprites, and sets its status to hidden
     */
    hide() {

        this.setStatus(Status.VISIBILITY, Status.HIDDEN);

        this._DOMElement.classList.add("inactive");
        this._DOMElement.classList.remove("active");

        this._visible = false;
    }


    /**
     * Toggles the sprite's visibility
     */
    toggle() {
        if (this._visible) {
            this.hide();
        } else {
            this.show();
        }
    }
}