export class Regexps {

    static propertyName: string = "#[A-Za-z0-9]+";
    static capturingPropertyName: string = "#([A-Za-z0-9]+)";

    static bracketObject: string = "#([A-Za-z0-9]+)[\\s\\n]*([A-Za-z0-9]+)[\\s\\n]*\\{(.*)\\}";

    static className: string = "([A-Za-z]+)";
    static objectName: string = "[A-Za-z0-9]+";

    static stringProperty: string = "(\".+\")";
    static numericProperty: string = "([0-9]+(.[0-9]+)?)";
    static booleanProperty: string = "(true|false)";

    static listSeparator: string = "(\\s*(,|\\n)\\s*)";

    static spaceOrLinebreak: string = "[\\s\\n]*";
}