import {AssertionsSet} from "../assertions-set.class";
import {Assertion, AssertionResult, Assertions} from "../interfaces/assertions.interface";

export class ParseUnit {

    // for parsing
    private _pointer: number = 0;

    code: string;
    parent: ParseUnit;
    assertions: Assertions;
    closingExpression: RegExp;

    // results storage
    startIndex: number = 0;
    endIndex: number = 0;
    children: ParseUnit[] = [];
    childrenById: {[key: string]: ParseUnit[]} = {};
    results: AssertionResult[] = [];
    resultsById: {[key: string]: AssertionResult[]} = {};


    constructor(
    ) {}

    set pointer(value: number) {
        if (this._pointer === undefined) {
            this.startIndex = value;
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
                this._pointer += closingResult[0].length;
                return this.parent.evaluate(this._pointer);
            }
        }

        for (let assertionName in this.assertions) {

            let res: AssertionResult = this.evaluateGroup(this.assertions[assertionName]);

            if (this.assertions.hasOwnProperty(assertionName) && res) {
                if (this.assertions[assertionName].next) {
                    //console.log("->", assertionName);
                    let unit: ParseUnit = new this.assertions[assertionName].next();
                    unit.code = this.code;
                    unit.parent = this;
                    unit.pointer = this._pointer;

                    unit.parseParentResult(res);
                    this.parseOwnResult(assertionName, unit, res);

                    return unit.evaluate();
                } else {
                    //console.log("<->", assertionName);
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

    parseParentResult(res: AssertionResult) {

    }

    parseOwnResult(id: string, generated: ParseUnit, res: AssertionResult) {

        this.children.push(generated);

        if (!this.childrenById[id]) {
            this.childrenById[id] = [];
        }

        this.childrenById[id].push(generated);

        this.results.push(res);

        if (!this.resultsById[id]) {
            this.resultsById[id] = [];
        }

        this.resultsById[id].push(res);

        if (this.parent) {
            let target: AssertionResult = this.parent.results[this.parent.results.length - 1];
            target[id] = this.results;
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