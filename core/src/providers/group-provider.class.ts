import {Provider} from "./provider.class";

export class GroupProvider extends Provider {

    constructor() {
        super(
            `$groupId:
[$spriteId]`
        );
    }
}