import {ParseUnit} from "./parse-unit.class";

export class GraphLink extends ParseUnit {

    trigger: string;
    targetNode: string;

    parseParentResult(res: RegExpExecArray[]) {
        this.trigger = res[0][1];
        this.targetNode = res[0][2];
        console.log(this);
    }
}