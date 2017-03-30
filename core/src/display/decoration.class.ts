/**
 * Created by Christophe on 30/03/2017.
 */
import {ImageDisplayElement} from "./image-display-element";
import {File} from "../files/file.class";
import {Utils} from "../common/utils.class";

export class Decoration extends ImageDisplayElement {

    constructor(
        file:File,
        x:number = 0,
        y:number = 0,
        scale:number = 1
    ) {
        super(file, x, y, scale);
    }

    static fromData(data:Object):Decoration {

        var defaults:Object = {
            file: "",
            x: 0,
            y: 0,
            scale: 1
        };

        var param:Object = Utils.verifyAndExtends(data, defaults);
        var file:File = new File(param["file"]);

        return new Decoration(file, param["x"], param["y"], param["scale"]);
    }
}