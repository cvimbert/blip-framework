/**
 * Created by Christophe on 01/02/2017.
 */

export class EventDispatcher {

    private _eventCallbacks:{[key:string]:Function[]} = {};

    dispatchEvent(eventType:string, param:any = null) {

        console.log("Event: " + eventType);

        if (this._eventCallbacks[eventType]) {
            this._eventCallbacks[eventType].forEach((callback:Function) => {
                callback(param);
            });
        }
    }

    on(eventType:string, callback:Function) {

        if (!this._eventCallbacks[eventType]) {
            this._eventCallbacks[eventType] = [];
        }

        this._eventCallbacks[eventType].push(callback);
    }

    off(eventType:string, callback:Function = null) {

        if (!callback) {
            this._eventCallbacks[eventType] = [];
        } else {
            let index:number = this._eventCallbacks[eventType].indexOf(callback);

            if (index !== -1) {
                this._eventCallbacks[eventType].splice(index, 1);
            }
        }
    }
}