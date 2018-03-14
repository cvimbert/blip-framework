import {ParseUnit} from "../../../blp-parser/parse-units/parse-unit.class";
import {Assertions} from "../../../blp-parser/interfaces/assertions.interface";
import {NamedBracketsGroup} from "./named-brackets-group-parse-unit.class";

export class ObjectTypesParseUnit extends ParseUnit {
    assertions: Assertions = {
        instanciable: {
            assertions: [
                {
                    expression: /^#sprites\s*/
                }
            ],
            next: NamedBracketsGroup
        }
    };
}