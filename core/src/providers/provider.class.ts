import {RevertedTemplate} from "reverted-template";
import {ExtractionResult} from "reverted-template/src/result/extraction-result.class";

export class Provider {

    protected template: RevertedTemplate;
    public templateResult: ExtractionResult;

    constructor(
        templateText: string = null
    ) {
        this.template = new RevertedTemplate(templateText);
    }

    fill(data: string | Object) {

        if (typeof data === "string") {
            this.templateResult = this.template.extractResult(data);
        } else if (typeof data === "object") {

        }

    }

}