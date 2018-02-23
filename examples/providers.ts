import {SpritesProvider} from "../core/src/providers/sprites-provider.class";
import {GroupProvider} from "../core/src/providers/group-provider.class";

let spritesProvider: SpritesProvider = new SpritesProvider();

spritesProvider.fill(`
sp1:machin/truc,28,87
sp2:machin/bidule,700,98
`);

let groupProvider: GroupProvider = new GroupProvider();

groupProvider.fill(`g1:
sp1;sp2`);