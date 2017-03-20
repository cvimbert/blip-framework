/**
 * Created by Christophe on 03/03/2017.
 */
import { File } from "../files/file.class";
export declare class Sound {
    file: File;
    private _buffer;
    constructor(file: File);
    load(): void;
    play(): void;
    stop(): void;
    pause(): void;
}
