/**
 * Created by Christophe on 03/02/2017.
 */
import {Condition} from "../condition.class";
import {ConditionTypes} from "./condition-types.class";
import {Sequence} from "../../spriteslogic/sequence.class";

export class SequenceCondition {

    constructor(
        public sequence:Sequence,
        public operator:string,
        public sequenceConditionType:string
    ) {
        //super();
    }
}