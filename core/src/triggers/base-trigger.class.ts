/**
 * Created by Christophe on 07/03/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class BaseTrigger extends Dispatcher implements Actionable {

    protected _enabled:boolean = false;

    constructor() {
        super();
    }

    action(arg:any = null) {
        this.dispatchEvent(Events.TRIGGER_ACTION, arg);
    }

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    get enabled():boolean {
        return this._enabled;
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "enable":
                this.enable();
                break;

            case "disable":
                this.disable();
                break;
        }
    }
}