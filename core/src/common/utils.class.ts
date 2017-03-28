/**
 * Created by Christophe on 28/03/2017.
 */

export class Utils {

    static verifyAndExtend(targetObject:Object, defaults:Object):Object {

        var retObject:Object = {};

        for (let id in targetObject) {
            if (targetObject.hasOwnProperty(id)) {
                if (defaults[id] === undefined) {
                    console.error("Parse object error !");
                    return null;
                }
            }
        }

        for (let id in defaults) {
            if (defaults.hasOwnProperty(id)) {
                if (!targetObject[id]) {
                    retObject[id] = defaults[id];
                }
                else {
                    retObject[id] = targetObject[id];
                }
            }
        }

        return retObject;
    }
}