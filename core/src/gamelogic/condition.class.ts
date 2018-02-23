/**
 * Created by Christophe on 03/02/2017.
 */

export class Condition {

    constructor(
        private testFunction:Function = null
    ) {}

    eval():boolean {
        return this.testFunction();
    }
}