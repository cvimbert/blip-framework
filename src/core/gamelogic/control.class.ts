/**
 * Created by Christophe on 21/02/2017.
 */
import {ControlSprite} from "../display/control-sprite.class";
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class ControlZone {

    constructor(
        public x:number,
        public y:number,
        public width:number,
        public height:number
    ) {}
}

export class Control extends EventDispatcher {

    constructor(
        public sprite:ControlSprite,
        public zone:ControlZone = null
    ) {
        super();
    }

    setZone(x:number, y:number, width:number, height:number) {
        this.zone = new ControlZone(x, y, width, height);
    }

    checkZoneEvent(eventName:string, event:MouseEvent) {

        if (this.zone) {
            let x:number = event.offsetX;
            let y:number = event.offsetY;

            if (
                x >= this.zone.x
                &&
                x <= this.zone.x + this.zone.width
                &&
                y >= this.zone.y
                &&
                y <= this.zone.y + this.zone.height
            ) {
                this.dispatchEvent(eventName);
            }

        } else {
            this.dispatchEvent(eventName);
        }
    }

    enable() {
        this.sprite.DOMElement.onmousedown = (evt:MouseEvent) => this.checkZoneEvent(Events.CONTROL_DOWN, evt);
        this.sprite.DOMElement.onmouseup = (evt:MouseEvent) => this.checkZoneEvent(Events.CONTROL_UP, evt);
    }

    disable() {
        this.sprite.DOMElement.onmousedown = () => {};
        this.sprite.DOMElement.onmouseup = () => {};
    }
}