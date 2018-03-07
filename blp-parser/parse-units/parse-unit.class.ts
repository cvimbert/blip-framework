import {AssertionsSet} from "../assertions-set.class";

export class ParseUnit {

    assertionsSets: {[key:string]: AssertionsSet} = {};
    closingGroup: AssertionsSet;

    constructor(
        private code: string,
        private parent: ParseUnit = null,
        private pointer: number = 0
    ) {}

    addAssertionsGroup(groupId: string, assertions: {[key: string]: RegExp}, Next: any = null) {
        this.assertionsSets[groupId] = new AssertionsSet(assertions, Next);
    }

    setClosingGroup(assertions: {[key: string]: RegExp}) {
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
            if (this.assertionsSets.hasOwnProperty(key)) {

                if (this.evaluateGroup(this.assertionsSets[key])) {
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
        }

        if (this.parent) {
            console.log("<-");
            return this.parent.evaluate(this.pointer);
        } else {
            console.log("end of parsing");
            return true;
        }
    }

    evaluateGroup(group: AssertionsSet): boolean {
        for (let expKey in group.assertions) {
            if (group.assertions.hasOwnProperty(expKey)) {
                let exp: RegExp = group.assertions[expKey];

                if (exp) {
                    let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this.pointer), exp);

                    if (!evaluation) {
                        return false;
                    } else {
                        if (evaluation[1]) {
                            console.log(evaluation[1], expKey);
                        }

                        this.pointer += evaluation[0].length;
                    }
                }

            }
        }

        return true;
    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}