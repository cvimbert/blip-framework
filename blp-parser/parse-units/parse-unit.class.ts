import {AssertionsSet} from "../assertions-set.class";

export class ParseUnit {

    code: string;
    parent: ParseUnit;
    protected _pointer: number = 0;

    assertionsSets: {[key:string]: AssertionsSet} = {};
    closingGroup: AssertionsSet;

    startIndex: number = 0;
    endIndex: number = 0;

    constructor(
    ) {}

    set pointer(value: number) {
        if (this._pointer === undefined) {
            this.startIndex = value;
        }

        this._pointer = value;
    }

    addAssertionsGroup(groupId: string, assertions: RegExp[], Next: any = null) {
        this.assertionsSets[groupId] = new AssertionsSet(assertions, Next);
    }

    setClosingGroup(assertions: RegExp[]) {
        this.closingGroup = new AssertionsSet(assertions);
    }

    evaluate(newPointer: number = null): boolean {

        if (newPointer) {
            this._pointer = newPointer;
        }

        if (this.closingGroup) {
            if (this.evaluateGroup(this.closingGroup)) {
                return this.parent.evaluate(this._pointer);
            }
        }

        for (let key in this.assertionsSets) {

            if (this.assertionsSets.hasOwnProperty(key) && this.evaluateGroup(this.assertionsSets[key])) {
                if (this.assertionsSets[key].Next) {
                    console.log("->");
                    let obj: ParseUnit = new this.assertionsSets[key].Next(this.code, this, this._pointer);
                    obj.code = this.code;
                    obj.parent = this;
                    obj.pointer = this._pointer;
                    return obj.evaluate();
                } else {
                    console.log("<->");
                    return this.evaluate(this._pointer);
                }
            }
        }

        if (this.parent) {
            console.log("<-");
            return this.parent.evaluate(this._pointer);
        } else {
            console.log("EOP");
            return true;
        }
    }

    evaluateGroup(group: AssertionsSet): boolean {

        for (let exp of group.assertions) {
            let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this._pointer), exp);

            if (!evaluation) {
                return false;
            } else {
                if (evaluation[1]) {
                    console.log(evaluation[1]);
                }

                this._pointer += evaluation[0].length;
            }
        }

        return true;
    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}