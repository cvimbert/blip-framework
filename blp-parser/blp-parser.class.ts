import {TypedObject} from "./parse-units/typed-object.class";

export class BlpParser {

    private code: string;

    constructor(
        private filePath: string
    ) {
        this.loadCode();
    }

    loadCode() {
        let req: XMLHttpRequest = new XMLHttpRequest();

        req.open("GET", "../examples/blp/object1.blp", true);

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    this.code = req.responseText;
                    this.linearParsing();
                }
            } else {

            }
        };

        req.send();
    }

    linearParsing() {
        let baseUnit: TypedObject = new TypedObject();
        baseUnit.code = this.code;
        baseUnit.evaluate();

        console.log(baseUnit.resultUnits);
        console.log(baseUnit.resultUnits[0].getResult("bracketsGroup/typedObject@type=sprite/simplePropsGroup"));
        console.log(baseUnit.resultUnits[0].getResult("bracketsGroup/typedObject@type=clock/simplePropsGroup"));
    }
}