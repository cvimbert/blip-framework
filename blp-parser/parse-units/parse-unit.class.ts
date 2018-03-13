import {AssertionsSet} from "../assertions-set.class";
import {Assertion, AssertionResult, Assertions} from "../interfaces/assertions.interface";
import {ResultUnit} from "../result-unit.class";

export class ParseUnit {

    // for parsing
    private _pointer: number = 0;
    private _lastPointer: number = 0;

    code: string;
    parent: ParseUnit;
    assertions: Assertions;
    closingExpression: RegExp;

    // results storage
    startIndex: number;
    resultUnits: ResultUnit[] = [];

    constructor(
    ) {}

    set pointer(value: number) {
        if (this._pointer === undefined) {
            this.startIndex = value;
        } else {
            this.startIndex = 0;
        }

        this._pointer = value;
    }

    evaluate(newPointer: number = null): boolean {

        if (newPointer) {
            this._pointer = newPointer;
        }

        if (this.closingExpression && this.parent) {

            let closingResult: RegExpExecArray = this.evaluateSingleExpression(this.closingExpression);

            if (closingResult) {
                this._lastPointer = this._pointer;
                this._pointer += closingResult[0].length;

                if (this.resultUnits) {
                    this.parent.resultUnits[this.parent.resultUnits.length - 1].endIndex = this._pointer - 1;
                }

                return this.parent.evaluate(this._pointer);
            }
        }

        for (let assertionName in this.assertions) {

            let res: AssertionResult = this.evaluateGroup(this.assertions[assertionName]);

            if (this.assertions.hasOwnProperty(assertionName) && res) {

                let resultUnit: ResultUnit = new ResultUnit();
                resultUnit.startIndex = this._lastPointer;
                resultUnit.endIndex = this._pointer;
                resultUnit.type = assertionName;
                resultUnit.results = res;

                this.resultUnits.push(resultUnit);

                if (this.parent) {
                    this.parent.resultUnits[this.parent.resultUnits.length - 1].children.push(resultUnit);
                }

                if (this.assertions[assertionName].next) {
                    //console.log("->", assertionName);
                    let unit: ParseUnit = new this.assertions[assertionName].next();
                    unit.code = this.code;
                    unit.parent = this;
                    unit.pointer = this._pointer;

                    return unit.evaluate();
                } else {
                    //console.log("<->", assertionName);
                    return this.evaluate(this._pointer);
                }
            }
        }

        if (this.parent) {
            //console.log("<-");

            if (this.resultUnits) {
                this.parent.resultUnits[this.parent.resultUnits.length - 1].endIndex = this._pointer - 1;
            }

            return this.parent.evaluate(this._pointer);
        } else {
            console.log("EOP");
            return true;
        }
    }

    evaluateSingleExpression(exp: RegExp): RegExpExecArray {
        return this.evaluateExpression(this.code.substring(this._pointer), exp);
    }

    evaluateGroup(group: Assertion): AssertionResult {

        let results: AssertionResult = {};

        for (let exp of group.assertions) {
            let evaluation: RegExpExecArray = this.evaluateExpression(this.code.substring(this._pointer), exp.expression);

            if (!evaluation) {
                return null;
            } else {
                if (exp.values) {
                    exp.values.forEach((value: string, index: number) => {
                        results[value] = evaluation[index + 1];
                    });
                }

                this._lastPointer = this._pointer;
                this._pointer += evaluation[0].length;
            }
        }

        //console.log(results);
        return results;
    }

    evaluateExpression(partialCode: string, expression: RegExp): RegExpExecArray {
        return expression.exec(partialCode);
    }
}