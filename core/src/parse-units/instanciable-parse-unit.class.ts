import {NamedProperty} from "../../../blp-parser/parse-units/named-property.class";
import {Assertions} from "../../../blp-parser/interfaces/assertions.interface";
import {ParseUnit} from "../../../blp-parser/parse-units/parse-unit.class";
import {NamedBracketsGroup} from "./named-brackets-group-parse-unit.class";

export class InstanciableParseUnit extends ParseUnit{

    assertions: Assertions = {
        instanciable: {
            assertions: [
                {
                    expression: /^#instanciable\s*/
                }
            ],
            next: NamedBracketsGroup
        }
    };

    // TODO: peut-être à déplacer
    closingExpression: RegExp = /^\s*\}\s*/;
}