/**
 * Created by Christophe on 03/02/2017.
 */
import { Condition } from "../condition.class";
import { Sequence } from "../../spriteslogic/sequence.class";
export declare class SequenceCondition extends Condition {
    sequence: Sequence;
    operator: string;
    sequenceConditionType: string;
    constructor(sequence: Sequence, operator: string, sequenceConditionType: string);
}
