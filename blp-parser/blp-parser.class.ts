import {Regexps} from "./regexps.class";

export class BlpParser {

    private code: string;

    constructor(
        private filePath: string
    ) {
        this.loadCode();

        /*var chaine='[soundcloud url="http://api.soundcloud.com/tracks/13633074" params="show_comments=true&auto_play=false&color=ff7700" width="100%" height="81" ] '
        let extrait=chaine.match(/tracks\/([^"]+)/);
        console.log(extrait);
        //alert (extrait[1])

        let test: string = "nnn<hhhh>mmmm";
        let exp: RegExp = /\<(?:.*)\>/;

        console.log("ok", test.match(exp));

        console.log(exp.exec(test));*/
    }

    loadCode() {
        let req: XMLHttpRequest = new XMLHttpRequest();

        req.open("GET", "code.blp", true);

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    this.code = req.responseText;
                    this.simplifiedParsing();
                }
            } else {

            }
        };

        req.send();
    }

    composeRegExp(jointure:string, ...values: string[]): string {
        let regExpStr: string = "(";

        values.forEach((regValue: string, index: number) => {
            regExpStr += regValue;

            if (index < values.length - 1) {
                regExpStr += jointure;
            }
        });

        regExpStr += ")";

        return regExpStr;
    }

    simplifiedParsing() {
        let capturingPropertyName: string = `(${Regexps.objectName})\\s*:${Regexps.spaceOrLinebreak}`;
        let propertyName: string = `${Regexps.objectName}\\s*:${Regexps.spaceOrLinebreak}`;

        let everything: string = `(?:.|\\n|\\r)`;

        let freeGroupContent: string = `(?:(?!(?:${propertyName})|#)${everything})*`;

        let namedBracketsGroup: string = `${capturingPropertyName}\\{((?:(?!\\}(?:[^\\}]*)$)${everything})*)`;

        let freeGroup: string = `${capturingPropertyName}(${freeGroupContent})${Regexps.spaceOrLinebreak}`;

        let tested: RegExp = new RegExp(namedBracketsGroup, "g");

        let res: RegExpExecArray = tested.exec(this.code);

        while (res) {
            console.log("res:", res[2]);
            res = tested.exec(this.code);
        }
    }

    parseCode() {
        // pas vraiment de sens, celle-là
        let enumeration: string = this.composeRegExp("\\s+", Regexps.propertyName, Regexps.objectName);

        let typedObject: string = `(${Regexps.className}\\s*\\(\\s*${Regexps.objectName}\\s*\\))`;

        let triggerLink: string = `${Regexps.objectName}\\s*-\\>\\s*${Regexps.objectName}`;

        let property: string = this.composeRegExp(
            "|",
            Regexps.stringProperty,
            Regexps.numericProperty,
            Regexps.booleanProperty,
            Regexps.objectName,
            typedObject,
            triggerLink);

        let propertyList: string = `((${property}${Regexps.listSeparator})*${property})`;

        let nameAndProperty: string = this.composeRegExp(`:${Regexps.spaceOrLinebreak}`, Regexps.objectName, propertyList);

        let nameAndPropertyList: string = `(${nameAndProperty}${Regexps.spaceOrLinebreak})*${nameAndProperty})`;

        // incomplet
        let completeProperty: string = `(${Regexps.propertyName}${Regexps.spaceOrLinebreak}${nameAndPropertyList}`;

        let tested: RegExp = new RegExp(completeProperty, "g");

        console.log(completeProperty);

        let res: RegExpExecArray = tested.exec(this.code);

        while (res) {
            console.log(res[0]);
            res = tested.exec(this.code);
        }
    }
}