import {AssertionsSet} from "../assertions-set.class";
import {Assertions} from "../assertions.interface";

export class ParseUnit {

    code: string;
    parent: ParseUnit;
    private _pointer: number = 0;

    assertionsSets: {[key:string]: AssertionsSet} = {};
    closingGroup: AssertionsSet;

    startIndex: number = 0;
    endIndex: number = 0;

    assertions: Assertions;
    closingExpression: RegExp;

    generated: ParseUnit[] = [];


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

            let res: RegExpExecArray[] = this.evaluateGroup(this.assertionsSets[key]);

            if (this.assertionsSets.hasOwnProperty(key) && res) {
                if (this.assertionsSets[key].Next) {
                    //console.log("->");
                    let unit: ParseUnit = new this.assertionsSets[key].Next();
                    unit.code = this.code;
                    unit.parent = this;
                    unit.pointer = this._pointer;

                    this.generated.push(unit);

                    unit.parseParentResult(res);
                    this.parseOwnResult(key, unit, res);

                    return unit.evaluate();
                } else {
                    //console.log("<->");
                    return this.evaluate(this._pointer);
                }
            }
        }

        if (this.parent) {
            //console.log("<-");
            return this.parent.evaluate(this._pointer);
        } else {
            console.log("EOP");
            return true;
        }
    }

    parseParentResult(res: RegExpExecArray[]) {

    }

    parseOwnResult(id: string, generated: ParseUnit, res: RegExpExecArray[]) {

    }

    evaluateGroup(group: AssertionsSet): RegExpExecArray[] {

        let evaluations: RegExpExecArray[] = [];

        for (let exp of group.assertions) {
            let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this._pointer), exp);

            if (!evaluation) {
                return null;
            } else {
                /*if (evaluation[1]) {
                    console.log(evaluation[1]);
                }*/

                evaluations.push(evaluation);

                this._pointer += evaluation[0].length;
            }
        }

        return evaluations;
    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}