/**
 * Created by Christophe on 10/01/2018.
 */
import {TriggersData} from "./interfaces/triggers-data.interface";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {ControlDownTrigger} from "./controls/control-down-trigger.class";
import {TimeTrigger} from "./time-trigger.class";
import {BaseTrigger} from "./base-trigger.class";
import {ControlUpTrigger} from "./controls/control-up-trigger.class";
import {GameObject} from "../display/game-object.class";
import {Control} from "../gamelogic/control.class";

export class TriggersObject {

    private _triggersDictionary:{[key:string]:BaseTrigger} = {};

    private _types:{[key:string]:any} = {
        controldown: ControlDownTrigger,
        controlup: ControlUpTrigger,
        time: TimeTrigger
    };

    constructor(
        data:TriggersData,
        public gameObject:GameObject
    ) {
        this.loadData(data);
    }

    loadData(data:TriggersData) {

        if (data.triggers) {
            for (let id in data.triggers) {
                if (data.triggers.hasOwnProperty(id)) {
                    let type:string = data.triggers[id]["type"];
                    let trigger:BaseTrigger;

                    switch (type) {
                        case "controlup":
                            let ctrl:Control = this.gameObject.getControl(data.triggers[id]["control"]);
                            trigger = new ControlUpTrigger(ctrl);
                            break;

                        case "time":
                            trigger = new TimeTrigger(data.triggers[id]["time"]);
                            break;
                    }
                }
            }
        }
    }
}