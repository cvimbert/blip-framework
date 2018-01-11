/**
 * Created by Christophe on 09/01/2018.
 */
import {Sound} from "./sound.class";
import {SoundsData} from "./interfaces/sounds-data.interface";
import {File} from "../files/file.class";

export class SoundObject {

    private _soundsDictionary:{[key:string]:Sound} = {};
    
    constructor(
        data:SoundsData = {}
    ) {
        this.loadData(data);
    }
    
    loadData(data:SoundsData) {

        if (data.sounds) {
            for (let id in data.sounds) {
                if (data.sounds.hasOwnProperty(id)) {
                    let soundFile:File = new File(data.sounds[id]);
                    this._soundsDictionary[id] = new Sound(soundFile);
                }
            }
        }
    }

    getSound(soundId:string):Sound {
        return this._soundsDictionary[soundId];
    }
}