/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {ICondition} from "../interfaces/ICondition.interface";
import {IDisplayable} from "../interfaces/IDisplayable.interface";

export class ConditionalSpritesGroupState extends Dispatcher {

    constructor(
        public state:IDisplayable,
        public condition:ICondition
    ) {
        super();
    }

}