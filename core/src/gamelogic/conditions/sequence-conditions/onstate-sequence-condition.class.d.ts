/**
 * Created by Christophe on 03/02/2017.
 */
import { SequenceCondition } from "../sequence-condition.class";
import { ICondition } from "../../../interfaces/ICondition.interface";
export declare class OnStateSequenceCondition extends SequenceCondition implements ICondition {
    eval(): boolean;
}
