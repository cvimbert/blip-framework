import {AssertionsSet} from "../assertions-set.class";

export class ParseUnit {

    assertionsSets: {[key:string]: AssertionsSet} = {};
    closingGroup: AssertionsSet;

    startIndex: number = 0;
    endIndex: number = 0;

    constructor(
        private code: string,
        private parent: ParseUnit = null,
        private pointer: number = 0
    ) {
        this.startIndex = pointer;
    }

    addAssertionsGroup(groupId: string, assertions: RegExp[], Next: any = null) {
        this.assertionsSets[groupId] = new AssertionsSet(assertions, Next);
    }

    setClosingGroup(assertions: RegExp[]) {
        this.closingGroup = new AssertionsSet(assertions);
    }

    evaluate(newPointer: number = null): boolean {

        if (newPointer) {
            this.pointer = newPointer;
        }

        if (this.closingGroup) {
            if (this.evaluateGroup(this.closingGroup)) {
                return this.parent.evaluate(this.pointer);
            }
        }

        for (let key in this.assertionsSets) {

            if (this.assertionsSets.hasOwnProperty(key) && this.evaluateGroup(this.assertionsSets[key])) {
                if (this.assertionsSets[key].Next) {
                    console.log("->");
                    let obj: ParseUnit = new this.assertionsSets[key].Next(this.code, this, this.pointer);
                    return obj.evaluate();
                } else {
                    console.log("<->");
                    return this.evaluate(this.pointer);
                }
            }
        }

        if (this.parent) {
            console.log("<-");
            return this.parent.evaluate(this.pointer);
        } else {
            console.log("EOP");
            return true;
        }
    }

    evaluateGroup(group: AssertionsSet): boolean {

        for (let exp of group.assertions) {
            let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this.pointer), exp);

            if (!evaluation) {
                return false;
            } else {
                if (evaluation[1]) {
                    console.log(evaluation[1]);
                }

                this.pointer += evaluation[0].length;
            }
        }

        return true;
    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}