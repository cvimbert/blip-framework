/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Condition} from "../gamelogic/condition.class";

export class ConditionalSpritesGroupState extends Dispatcher {

    constructor(
        public state:IDisplayable,
        public condition:Condition
    ) {
        super();
    }

}