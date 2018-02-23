import {RevertedTemplate} from "reverted-template";

export class DataTemplates {

    static graphNode:RevertedTemplate = new RevertedTemplate("sprite($spriteId)|$spriteId;[*$conditionId:*$triggerId->$nodeId]");

    static condition:RevertedTemplate = new RevertedTemplate("$type($applyTo)$variables");

}