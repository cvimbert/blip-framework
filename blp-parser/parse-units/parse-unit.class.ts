import {AssertionsSet} from "../assertions-set.class";

export class ParseUnit {

    assertionsSets: {[key:string]: AssertionsSet} = {};

    constructor(
        private code: string,
        private pointer: number = 0
    ) {}

    addAssertionsGroup(groupId: string, assertions: {[key: string]: RegExp}, Next: any = null) {
        this.assertionsSets[groupId] = new AssertionsSet(assertions, Next);
    }

    evaluate(): boolean {
        for (let key in this.assertionsSets) {
            if (this.assertionsSets.hasOwnProperty(key)) {
                if (this.evaluateGroup(this.assertionsSets[key])) {
                    if (this.assertionsSets[key].Next) {

                        // we must index this.object
                        let obj: ParseUnit = new this.assertionsSets[key].Next(this.code, this.pointer);
                        return obj.evaluate();
                    } else {
                        // end of parsing, let's go on with this object
                        console.log("end of parsing");
                        return true;
                    }
                }
            }
        }

        return false;
    }

    evaluateGroup(group: AssertionsSet): boolean {
        for (let expKey in group.assertions) {
            if (group.assertions.hasOwnProperty(expKey)) {
                let exp: RegExp = group.assertions[expKey];

                if (exp) {
                    let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this.pointer), exp);
                    if (!evaluation) {
                        //console.log("error:", expKey);
                        return false;
                    } else {
                        if (evaluation[1]) {
                            console.log(evaluation[1]);
                        }

                        this.pointer += evaluation[0].length;
                    }
                }

            }
        }

        return true;
    }

    sendError() {

    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}