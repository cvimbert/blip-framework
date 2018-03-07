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

        req.open("GET", "code.blp", true);

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
        let baseUnit: TypedObject = new TypedObject(this.code);
        console.log("eval: ", baseUnit.evaluate());
    }
}