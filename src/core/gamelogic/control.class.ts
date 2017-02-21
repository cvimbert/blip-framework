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
        public zones:ControlZone = null
    ) {
        super();
    }
    
    // todo: tenir compte des zones, on oublie pour le moment

    enable() {
        this.sprite.DOMElement.onmousedown = () => this.dispatchEvent(Events.CONTROL_DOWN);
        this.sprite.DOMElement.onmouseup = () => this.dispatchEvent(Events.CONTROL_UP);
    }

    disable() {
        this.sprite.DOMElement.onmousedown = () => {};
        this.sprite.DOMElement.onmouseup = () => {};
    }
}